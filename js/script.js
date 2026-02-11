const button = document.querySelector('button');
const img = document.getElementById('pic');

button.addEventListener('click', 
function () {
  if (button.textContent === 'Accendi') {
    button.textContent = 'Spegni';
    img.src = 'img/yellow_lamp.png';
    img.alt = 'Lampadina accesa'
  } else {
    button.textContent = 'Accendi';
    img.src = 'img/white_lamp.png';
    img.alt = 'Lampadina spenta'
  }
}
);

