var vilagosGomb = document.querySelector('button[value="vilagos"]');
var sotetGomb = document.querySelector('button[value="sotet"]');
var h2 = document.querySelector('h2');
var hozzadGomb = document.querySelector('button[type="submit"]');

vilagosGomb.addEventListener('click', function() {
    document.body.style.backgroundColor = '#f4f4f4';
    h2.style.color = 'black';
    document.body.classList.remove('sotet');
    document.body.classList.add('vilagos');
    vilagosGomb.setAttribute('aria-pressed', 'true');
    sotetGomb.setAttribute('aria-pressed', 'false');
});

sotetGomb.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    h2.style.color = 'white';
    document.body.classList.remove('vilagos');
    document.body.classList.add('sotet');
    sotetGomb.setAttribute('aria-pressed', 'true');
    vilagosGomb.setAttribute('aria-pressed', 'false');
});

hozzadGomb.addEventListener('click', function(event) {
    event.preventDefault();
    var feladatInput = document.getElementById('feladat');
    var feladatSzoveg = feladatInput.value.trim();
    if (feladatSzoveg === '') {
        alert('Kérem adjon meg egy feladatot!');
        return;
    }
    if (feladatSzoveg !== '') {
        var feladatCard = document.createElement('card');
        feladatCard.classList.add('feladat');
        var checkbox = document.createElement('checkbox');
        var pFeladat = document.createElement('p');
        var pStatusz = document.createElement('p');
        var pAdatok = document.createElement('p');
        var torlesGomb = document.createElement('button');
        torlesGomb.classList.add('torles');
        torlesGomb.textContent = 'Törlés';
        pFeladat.textContent = feladatSzoveg;
        pStatusz.innerHTML = 'Státusz: <span id="pipa">✔️</span> / <span id="x">❌</span>';
        pAdatok.textContent = 'userID: 1, id: 1, title: "' + feladatSzoveg + '", completed: false';
        feladatCard.appendChild(checkbox);
        feladatCard.appendChild(pFeladat);
        feladatCard.appendChild(pStatusz);
        feladatCard.appendChild(pAdatok);
        feladatCard.appendChild(torlesGomb);
        document.querySelector('.feladatok').appendChild(feladatCard);
        feladatInput.value = '';
    }
});

torlesGomb.addEventListener('click', function() {
    this.parentElement.remove();
});