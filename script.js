// Läs mer: visa 3 meningar, fäll ut/in resten
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-readmore]').forEach((container) => {
    const btn = container.querySelector('.btn-readmore');
    let more = container.querySelector('.more');
    const max = parseInt(container.getAttribute('data-sentences') || '3', 10);

    // Top-level <p>
    const ps = Array.from(container.querySelectorAll(':scope > p'));
    if (ps.length) {
      const first = ps[0];

      // skapa .more om den saknas
      if (!more) {
        more = document.createElement('div');
        more.className = 'more';
        container.insertBefore(more, btn || null);
      }

      // flytta alla stycken utom första till .more
      ps.slice(1).forEach(p => more.appendChild(p));

      // klipp första paragrafen efter X meningar
      const text = (first.textContent || '').trim();
      const parts = text.split(/(?<=[.!?])\s+/);
      if (parts.length > max) {
        const visible = parts.slice(0, max).join(' ');
        const hidden = parts.slice(max).join(' ');
        first.textContent = visible;
        const extraP = document.createElement('p');
        extraP.textContent = hidden;
        more.insertBefore(extraP, more.firstChild);
      }
    }

    if (more) more.hidden = true;
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', () => {
        const opening = more.hidden;
        more.hidden = !more.hidden;
        btn.textContent = opening ? 'Visa mindre' : 'Läs mer';
        btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
        if (!opening === false) {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });

  // Fullscreen-galleri: skrollbart, ingen pinch/wheel-zoom
  const ensureOverlay = () => {
    let overlay = document.getElementById('fs-gallery');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'fs-gallery';
      overlay.className = 'fs-overlay';
      document.body.appendChild(overlay);
    }
    // säkerställ struktur
    if (!overlay.querySelector('.fs-body')) {
      overlay.innerHTML = '<div class="fs-body"></div>';
    }
    // lägg X-knapp om saknas
    if (!overlay.querySelector('.fs-close')) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'fs-close';
      closeBtn.setAttribute('aria-label', 'Stäng');
      closeBtn.innerHTML = '×';
      closeBtn.addEventListener('click', () => closeOverlay());
      overlay.appendChild(closeBtn);
    }
    // stäng genom att klicka på bakgrunden
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeOverlay();
    });
    // Esc stänger
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeOverlay();
    });
    return overlay;
  };

  const openOverlay = (startIndex = 0) => {
    const overlay = ensureOverlay();
    overlay.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    const body = overlay.querySelector('.fs-body');
    const target = body.children[startIndex];
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  };

  const closeOverlay = () => {
    const overlay = document.getElementById('fs-gallery');
    if (overlay) overlay.classList.remove('open');
    document.documentElement.style.overflow = '';
  };

  // Knyt gallerier
  document.querySelectorAll('#galleri .gallery').forEach((gal) => {
    const thumbs = Array.from(gal.querySelectorAll('img'));
    thumbs.forEach((img, i) => {
      img.closest('a').addEventListener('click', (ev) => {
        ev.preventDefault();

        // Fyll overlay med alla bilder från galleriet
        const overlay = ensureOverlay();
        const body = overlay.querySelector('.fs-body');
        body.innerHTML = '';
        thumbs.forEach((t) => {
          const item = document.createElement('div');
          item.className = 'fs-item';
          const big = document.createElement('img');
          big.src = t.src;
          big.alt = t.alt || '';
          item.appendChild(big);
          body.appendChild(item);
        });

        openOverlay(i);
      });
    });
  });
});
