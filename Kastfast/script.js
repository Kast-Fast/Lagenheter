// Global JS: Läs mer + fullscreen gallery with pinch-to-zoom
document.addEventListener('DOMContentLoaded', function(){
  // Läs mer (sentence clamp to 3 sentences)
  document.querySelectorAll('[data-readmore]').forEach(function(container){
    var btn = container.querySelector('.btn-readmore');
    var more = container.querySelector('.more');
    var max = parseInt(container.getAttribute('data-sentences') || '3', 10);

    var ps = Array.from(container.querySelectorAll(':scope > p'));
    if (ps.length){
      var first = ps[0];
      if(!more){
        more = document.createElement('div');
        more.className = 'more';
        if(btn) container.insertBefore(more, btn); else container.appendChild(more);
      }
      ps.slice(1).forEach(function(p){ more.appendChild(p); });

      var text = (first.textContent || '').trim();
      var parts = text.split(/(?<=[.!?])\s+/);
      if(parts.length > max){
        var visible = parts.slice(0,max).join(' ');
        var hidden = parts.slice(max).join(' ');
        first.textContent = visible;
        var extraP = document.createElement('p');
        extraP.textContent = hidden;
        more.insertBefore(extraP, more.firstChild);
      }
    }
    if(more){ more.hidden = true; }
    if(btn){
      btn.setAttribute('aria-expanded','false');
      btn.addEventListener('click', function(){
        var willOpen = more.hidden;
        more.hidden = !more.hidden;
        btn.textContent = willOpen ? 'Visa mindre' : 'Läs mer';
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if(!willOpen===false){ container.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    }
  });

  // Fullscreen scrollable lightbox build + pinch-to-zoom
  function makeFS(gal){
  let fs = document.querySelector('#fs-gallery');
  if(!fs){
    fs = document.createElement('div');
    fs.id = 'fs-gallery';
    fs.className = 'fs-overlay';
    document.body.appendChild(fs);
  }
  // Sätt korrekt struktur varje gång
  fs.innerHTML = '<div class="fs-body"></div><button class="fs-close" type="button" aria-label="Stäng">&times;</button>';
  const body = fs.querySelector('.fs-body');
  // Bygg om bilder
  gal.querySelectorAll('img').forEach((img, idx)=>{
    const item = document.createElement('div');
    item.className = 'fs-item';
    const vp = document.createElement('div');
    vp.className = 'fs-viewport';
    const big = document.createElement('img');
    big.className = 'fs-img';
    big.src = img.src; big.alt = img.alt || ('Bild ' + (idx+1));
    vp.appendChild(big); item.appendChild(vp); body.appendChild(item);
    enablePinchZoom(vp);
  });
  // Wire stäng
  const closeBtn = fs.querySelector('.fs-close');
  closeBtn.addEventListener('click', ()=>closeFS());
  fs.addEventListener('click', (e)=>{ if(e.target===fs) closeFS(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeFS(); });
  return fs;
}
  function openFS(fs, index){
    fs.classList.add('open');
    document.documentElement.style.overflow='hidden';
    const target = fs.querySelectorAll('.fs-item')[index];
    if(target){ target.scrollIntoView({behavior:'instant', block:'start'}); }
  }
  function closeFS(){
    const fs = document.querySelector('#fs-gallery');
    if(fs){ fs.classList.remove('open'); document.documentElement.style.overflow=''; }
  }

  // Add click handlers on thumbs
  document.querySelectorAll('#galleri .gallery').forEach(function(gal){
    gal.querySelectorAll('a').forEach(function(a, i){
      a.addEventListener('click', function(ev){
        ev.preventDefault();
        const fs = makeFS(gal);
        openFS(fs, i);
      });
    });
  });

  // Pinch-to-zoom for each fs-viewport (two-pointer gesture + pan + double-tap)
  function enablePinchZoom(vp){
    const img = vp.querySelector('.fs-img');
    let pointers = new Map();
    let scale = 1, minS=1, maxS=4;
    let tx=0, ty=0;
    let lastMid = null;
    let lastDist = 0;
    let lastTap=0;

    function apply(){
      vp.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }
    function getMid(){
      const arr=[...pointers.values()];
      const x=(arr[0].clientX+arr[1].clientX)/2;
      const y=(arr[0].clientY+arr[1].clientY)/2;
      return {x,y};
    }
    function getDist(){
      const arr=[...pointers.values()];
      const dx=arr[0].clientX-arr[1].clientX;
      const dy=arr[0].clientY-arr[1].clientY;
      return Math.hypot(dx,dy);
    }
    function clampPan(){
      // limit panning a bit so image doesn't fly away
      const rect = img.getBoundingClientRect();
      const vw = window.innerWidth, vh = window.innerHeight;
      const pad = 80;
      tx = Math.min(pad, Math.max(tx, -pad));
      ty = Math.min(pad, Math.max(ty, -pad));
    }

    vp.addEventListener('pointerdown', (e)=>{
      vp.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, e);
      if(pointers.size===2){
        lastMid = getMid();
        lastDist = getDist();
      }
      // double-tap
      const now=Date.now();
      if(now-lastTap<280){
        if(scale===1){ scale=2.5; } else { scale=1; tx=ty=0; }
        apply();
      }
      lastTap=now;
    });
    vp.addEventListener('pointermove', (e)=>{
      if(!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, e);
      if(pointers.size===2){
        const mid = getMid();
        const dist = getDist();
        const factor = (lastDist>0) ? (dist/lastDist) : 1;
        const newScale = Math.min(maxS, Math.max(minS, scale * factor));
        // adjust translation by mid movement
        if(lastMid){
          tx += (mid.x - lastMid.x);
          ty += (mid.y - lastMid.y);
        }
        scale = newScale;
        lastMid = mid; lastDist = dist;
        clampPan(); apply();
      }else if(pointers.size===1 && scale>1){
        // pan with one finger
        const prev = pointers.get(e.pointerId);
        tx += (e.clientX - prev.clientX);
        ty += (e.clientY - prev.clientY);
        clampPan(); apply();
      }
    });
    function endPointer(e){
      pointers.delete(e.pointerId);
      if(pointers.size<2){ lastMid=null; lastDist=0; }
      if(pointers.size===0 && scale<1.02){ scale=1; tx=ty=0; apply(); }
    }
    vp.addEventListener('pointerup', endPointer);
    vp.addEventListener('pointercancel', endPointer);
      }
});
