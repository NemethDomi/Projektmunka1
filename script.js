const vilagosGomb = document.querySelector('button[value="vilagos"]');
const sotetGomb = document.querySelector('button[value="sotet"]');
const h2 = document.querySelector('h2');
const hozzadGomb = document.getElementById('hozzaAdGomb');
const keresesGomb = document.getElementById('keresesGomb');
const menuIcon = document.getElementById('menuIcon');
const todoContainer = document.querySelector('.feladatok');
const osszesTorleseGomb = document.getElementById('OsszesTorlese');

function createTodoCard(todo) {
    const feladatCard = document.createElement('div');
    feladatCard.classList.add('feladat');
    feladatCard.style.width = '500px';
    feladatCard.style.height = '300px';
    feladatCard.style.float = 'left';
    feladatCard.style.margin = '5px 5px 0px 50px';
    feladatCard.style.padding = '10px';
    feladatCard.style.border = '1px solid #ccc';
    feladatCard.style.borderRadius = '5px';
    feladatCard.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.disabled = true;

    const pFeladat = document.createElement('p');
    pFeladat.textContent = todo.title;

    const pStatusz = document.createElement('p');
    pStatusz.innerHTML = 'Státusz: <span class="pipa">✔️</span> / <span class="x">❌</span>';

    const pAdatok = document.createElement('p');
    pAdatok.textContent = `userID: ${todo.userId || 1}, id: ${todo.id || 1}, title: "${todo.title}", befejezve: ${todo.completed}`;

    const torlesGomb = document.createElement('button');
    torlesGomb.classList.add('torles');
    torlesGomb.textContent = 'Törlés';

    feladatCard.appendChild(checkbox);
    feladatCard.appendChild(pFeladat);
    feladatCard.appendChild(pStatusz);
    feladatCard.appendChild(pAdatok);
    feladatCard.appendChild(torlesGomb);

    if (todo.completed) {
        feladatCard.style.backgroundColor = 'lightgreen';
    }

    const pipa = feladatCard.querySelector('.pipa');
    const x = feladatCard.querySelector('.x');
    if (todo.completed === true) {
        feladatCard.style.backgroundColor = 'lightgreen';
        pFeladat.style.textDecoration = 'line-through';
        pFeladat.style.color = 'gray';
    }
    else {
        pFeladat.style.textDecoration = 'none';
        pFeladat.style.color = 'black';
        feladatCard.style.backgroundColor = 'lightcoral';
    }

    pipa.addEventListener('click', function() {
        feladatCard.style.backgroundColor = 'lightgreen';
        pAdatok.textContent = `userID: ${todo.userId || 1}, id: ${todo.id || 1}, title: "${todo.title}", befejezve: true`;
        pFeladat.style.textDecoration = 'line-through';
        pFeladat.style.color = 'gray';
        checkbox.checked = true;
    });

    x.addEventListener('click', function() {
        feladatCard.style.backgroundColor = 'lightcoral';
        pAdatok.textContent = `userID: ${todo.userId || 1}, id: ${todo.id || 1}, title: "${todo.title}", befejezve: false`;
        pFeladat.style.textDecoration = 'none';
        pFeladat.style.color = 'black';
        checkbox.checked = false;
    });

    torlesGomb.addEventListener('click', function() {
        feladatCard.remove();
    });

    todoContainer.appendChild(feladatCard);
}

vilagosGomb.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    h2.style.color = 'white';
    document.body.classList.remove('sotet');
    document.body.classList.add('vilagos');
    vilagosGomb.setAttribute('aria-pressed', 'true');
    sotetGomb.setAttribute('aria-pressed', 'false');
});

sotetGomb.addEventListener('click', function() {
    document.body.style.backgroundColor = '#f4f4f4';
    h2.style.color = 'black';
    document.body.classList.remove('vilagos');
    document.body.classList.add('sotet');
    sotetGomb.setAttribute('aria-pressed', 'true');
    vilagosGomb.setAttribute('aria-pressed', 'false');
});

hozzadGomb.addEventListener('click', async function(event) { {
    event.preventDefault();

    const feladatInput = document.getElementById('feladat');
    const feladatSzoveg = feladatInput.value.trim();

    if (feladatSzoveg === '') {
        alert('Kérem adjon meg egy feladatot!');
        return;
    }

    const ujTodo = {
        userId: 1,
        title: feladatSzoveg,
        completed: false
    };

    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ujTodo)
    });

    const adat = await response.json();

    console.log('Sikeres POST:', adat);
    createTodoCard(adat);

    feladatInput.value = '';
    alert('Feladat sikeresen létrehozva (POST)!');
    } catch (error) {
        console.error('Hiba POST közben:', error);
        alert('Hiba történt a feladat létrehozásakor!');
    }
}
});

keresesGomb.addEventListener('click', function(event) {
    event.preventDefault();
    const keresesiSzoveg = document.getElementById('kereses').value.trim().toLowerCase();
    const feladatok = document.querySelectorAll('.feladat');

    feladatok.forEach(function(feladat) {
        const szoveg = feladat.querySelector('p').textContent.toLowerCase();
        feladat.style.display = szoveg.includes(keresesiSzoveg) ? 'block' : 'none';
    });
});

menuIcon.addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(adat => {
      adat.slice(0, 20).forEach(todo => {
          createTodoCard(todo);
      });
  })
  .catch(error => {
      console.error('Error fetching data:', error);
});


osszesTorleseGomb.addEventListener('click', function() {
    const feladatok = document.querySelectorAll('.feladat');
    feladatok.forEach(function(feladat) {
        feladat.remove();
    });
    alert('Minden feladat törölve!');
});