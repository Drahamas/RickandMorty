import { ShowCard } from "../script/moduloCard.js";
import { characters } from "../data/data.js";

let cartas = document.getElementById("cartas");


let persArray =[];
for(let i = 0; i < 10; i++){
    let personaje = characters[i];
    persArray.push(personaje);
}
console.log(persArray);

ShowCard(persArray, cartas);
ShowCard(persArray, cartas);


document.addEventListener('click', ({target}) =>{
    if(target.classList.contains('imagen')){
        let id = target.id;
        console.log(id);
        let seleccion1 = localStorage.setItem("cardSelect1", id);
        



    }

})


let cards = document.querySelector('.cards');
let cardFront = document.querySelector('.front')
let cardBack = document.querySelector('.back')

// cards.addEventListener('click', () => {
//     cardFront.style.transform = 'perspective(500px) rotateY(180deg)';
//     cardBack.style.transform = 'perspective(500px) rotateY(360deg';
// })



const card = document.querySelectorAll('.card');

card.forEach( card =>{
    card.addEventListener('click', ()=>{
        removeActiveClass();
        card.classList.add('active')
    })
})

function removeActiveClass(){
    panel.forEach(panel =>{
        panel.classList.remove('active')
    })
}