function visaGard(gardId) {
    // Döljer valet av gård
    document.getElementById('gard-val').style.display = 'none';
    // Visar rätt gårdssektion
    document.getElementById(gardId).style.display = 'block';
}

function tillbakaTillVal() {
    // Visar gårdsvalet igen
    document.getElementById('gard-val').style.display = 'block';
    // Döljer båda gårdssektionerna
    document.getElementById('kastanjegarden').style.display = 'none';
    document.getElementById('sjostorp').style.display = 'none';
}
