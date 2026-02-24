var vilagosGomb = document.querySelector('button[value="vilagos"]');
var sotetGomb = document.querySelector('button[value="sotet"]');
var h2 = document.querySelector('h2');
var hozzadGomb = document.getElementById('hozzaAdGomb');
var keresesGomb = document.getElementById('keresesGomb');
var menuIcon = document.getElementById('menuIcon');

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

    var feladatCard = document.createElement('div');
    feladatCard.classList.add('feladat');
    feladatCard.style.width = '400px';
    feladatCard.style.height = '200px';
    feladatCard.style.float = 'left';
    feladatCard.style.margin = '5px 5px 0px 0px';
    feladatCard.style.padding = '10px';
    feladatCard.style.border = '1px solid #ccc';
    feladatCard.style.borderRadius = '5px';
    feladatCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.disabled = true;

    var pFeladat = document.createElement('p');
    pFeladat.textContent = feladatSzoveg;

    var pStatusz = document.createElement('p');
    pStatusz.innerHTML = 'Státusz: <span class="pipa">✔️</span> / <span class="x">❌</span>';

    var pAdatok = document.createElement('p');
    pAdatok.textContent = `userID: 1, id: 1, title: "${feladatSzoveg}", befejezve: false`;

    var torlesGomb = document.createElement('button');
    torlesGomb.classList.add('torles');
    torlesGomb.textContent = 'Törlés';

    feladatCard.appendChild(checkbox);
    feladatCard.appendChild(pFeladat);
    feladatCard.appendChild(pStatusz);
    feladatCard.appendChild(pAdatok);
    feladatCard.appendChild(torlesGomb);

    document.querySelector('.feladatok').appendChild(feladatCard);

    var pipa = feladatCard.querySelector('.pipa');
    var x = feladatCard.querySelector('.x');

    pipa.addEventListener('click', function() {
        feladatCard.style.backgroundColor = 'lightgreen';
        pAdatok.textContent = `userID: 1, id: 1, title: "${feladatSzoveg}", befejezve: true`;
        checkbox.checked = true;
        checkbox.disabled = true;
    });

    x.addEventListener('click', function() {
        feladatCard.style.backgroundColor = 'lightcoral';
        pAdatok.textContent = `userID: 1, id: 1, title: "${feladatSzoveg}", befejezve: false`;
        checkbox.checked = false;
        checkbox.disabled = true;
    });

    torlesGomb.addEventListener('click', function() {
        feladatCard.remove();
    });

    feladatInput.value = '';
});


keresesGomb.addEventListener('click', function(event) {
    event.preventDefault();
    var keresesiSzoveg = document.getElementById('kereses').value.trim().toLowerCase();
    var feladatok = document.querySelectorAll('.feladat');
    feladatok.forEach(function(feladat) {
        var feladatSzoveg = feladat.querySelector('p').textContent.toLowerCase();
        if (feladatSzoveg.includes(keresesiSzoveg)) {
            feladat.style.display = 'block';
        } else {
            feladat.style.display = 'none';
        }
    });
});

menuIcon.addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } 
    else {
        navbar.style.display = 'block';
    }
});