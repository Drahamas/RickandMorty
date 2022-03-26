import { ShowCard } from "../script/moduloCard.js";
import { characters } from "../data/data.js";

let cartas = document.getElementById("cartas");         //Contenedor de las cartas
let vidas = document.getElementById("vidas");           //Vidas
let monedas = document.getElementById("monedas");       //Monedas y/o puntos
let monedasJuego = 0;
let vidasJuego = 5;

let persArray = [];

for (let i = 0; i < 10; i++) {                                  //Cantidad de personajes
    let personaje = characters[i];
    persArray.push(personaje);
}
let revuelto = persArray.concat(persArray);                     //Doblar la baraja
let dobleRevuelto = revuelto.sort(() => Math.random() - 0.5)    //Barajar las cartas
console.log(dobleRevuelto);

ShowCard(dobleRevuelto, cartas);                                //Pintar las cartas
giroCartas();


let cardId = [];

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('imagBack')) {
        let id = target.id;             //Capturamos id de la carta
        cardId.push(id);                //Enviamos el id a arreglo "cardId"
        
        const optionOneId = cardId[0]
        const optionTwoId = cardId[1]
        console.log(cardId);
        if(optionOneId == optionTwoId){
            cardId = [];                                            // Limpia el arreglo
            let elemento = dobleRevuelto.find(item => item.id == id);
            let indiceCard = dobleRevuelto.indexOf(elemento);
            console.log(indiceCard);
            dobleRevuelto.splice(indiceCard, 1);                    //Elimina la primera carta
            let indiceCard2 = dobleRevuelto.indexOf(elemento);
            dobleRevuelto.splice(indiceCard2, 1);                   //Elimina la segunda carta
            console.log(dobleRevuelto);
            ShowCard(dobleRevuelto, cartas);                        //Se vuelven a llamar todas las cartas
            giroCartas();                                           //Se vuelve a llamar la funcion
            monedasJuego += 2;
            monedas.textContent = monedasJuego;
            if(dobleRevuelto.length == 0){                          //Gano el juego
                alert("Felicitaciones, Ganaste el juego");
                location.reload();
            }
        }else if (cardId[1]){
            console.log("Continua");
            cardId = [];                                            //Limpia el arreglo
            vidasJuego -= 1;
            vidas.textContent = vidasJuego;
            if(vidasJuego == 0){                                    // Vidas = 0 pierde el juego
                alert("GameOver")
                location.reload();                                  // Recarga la pagina
            }
        }
            
    }

})

//Clic en las cartas
function giroCartas(){
    let voltCartaBack = document.querySelectorAll(".imagBack");
    voltCartaBack.forEach(voltCartaBack => {
        voltCartaBack.addEventListener('click', () => {
            if (document.querySelectorAll(".imagBack.active").length == 2) {    //Cuando se de clic 3ra se voltean todas
                removeActiveClass();
            }
            voltCartaBack.classList.add('active')                               //Agregar una clase "ACTIVE"
            console.log(document.querySelectorAll(".imagBack.active").length);
        })
    });
    function removeActiveClass() {                              //Remover Cartas
        voltCartaBack.forEach(voltCartaBack => {
            voltCartaBack.classList.remove('active')
        })
    }
}



