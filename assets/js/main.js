// In un array sono contenuti i nomi degli ingredienti della lista della spesa, chiedi all’utente l'ingrediente che vuole comprare e comunicagli se può prenderlo o no 

const spesaItems = [
    "pane",
    "latte",
    "uova",
    "pomodoro",
    "lattuga",
    "yogurt",
    "caffè",
    "pasta",
    "riso",
    "cioccolato"
];

//chiedo all'utente cosa vuole comprare
const userName = prompt("Che cosa vuoi comprare al super? ")

//ciclo la lista finchè non trovo l'ingrediente
let trovato = false
let cnt = 0

while (cnt <= spesaItems.length - 1) {

    if (userName == spesaItems[cnt]) {

        trovato = true
    }

    cnt++
}


//se trovato = true è nella lista della spesa altrimenti no
if (trovato === true) {
    console.log("Perfetto l'articolo che hai scelto è nella tua lista della spesa");
} else {
    console.log("Sono spiacente ma l'articolo scelto non è presente nella tu alista della spesa");
}