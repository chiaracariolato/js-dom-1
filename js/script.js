const button = document.querySelector('button');
const img = document.getElementById('pic');

// Alternativa 0
// button.addEventListener('click', 
// function () {
//   if (button.innerHTML === 'Accendi') {
//     button.innerHTML = 'Spegni';
//     img.src = 'img/yellow_lamp.png';
//     img.alt = 'Lampadina accesa'
//   } else {
//     button.innerHTML = 'Accendi';
//     img.src = 'img/white_lamp.png';
//     img.alt = 'Lampadina spenta'
//   }
// }
// );

// Alternativa 1 con textContent
// button.addEventListener('click', 
// function () {
//   if (button.textContent === 'Accendi') {
//     button.textContent = 'Spegni';
//     img.src = 'img/yellow_lamp.png';
//     img.alt = 'Lampadina accesa'
//   } else {
//     button.textContent = 'Accendi';
//     img.src = 'img/white_lamp.png';
//     img.alt = 'Lampadina spenta'
//   }
// }
// );

// Alternativa 2 con string.includes()
// button.addEventListener('click', 
// function () {
//     let innerHTML = 'Accendi';
//     let source = 'img/white_lamp.png';
//     let alt = 'Lampadina spenta';
//     if (isOn) {
//         innerHTML = 'Spegni';
//         source = 'img/yellow_lamp.png';
//         alt = 'Lampadina accesa' 
//     }
//     isOn = !isOn;
//     button.innerHTML = innerHTML;
//     img.src = source;
//     img.alt = alt;
// }
// );


// Versione ottimizzata
const isOn = true;

button.addEventListener('click', accendi);

function accendi() {
    let innerHTML = 'Accendi';
    let source = 'img/white_lamp.png';
    let alt = 'Lampadina spenta';
    if (isOn) {
        innerHTML = 'Spegni';
        source = 'img/yellow_lamp.png';
        alt = 'Lampadina accesa' 
    }
    isOn = !isOn;
    button.innerHTML = innerHTML;
    img.src = source;
    img.alt = alt;
};
