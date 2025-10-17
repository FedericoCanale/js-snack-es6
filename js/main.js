console.log('it works');

//ex 1 
/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

To do list
    1.	Creare un array di oggetti, ognuno rappresenta una bici da corsa con:
    •	nome
    •	peso
    2.	Trovare la bici con il peso minore
    3.	Stampare a schermo il nome e il peso della bici più leggera
Tools
    •	const / let 
    •	Array di oggetti
    •	Ciclo for oppure for...of
    •	Condizione if
    •	console.log() per stampare a schermo

*/

// 1. Creo un array di bici da corsa, con nome e peso
const bikes = [
    {
        name: 'Bike 1',
        weight: 8
    },
    {
        name: 'Bike 2',
        weight: 7.5
    },
    {
        name: 'Bike 3',
        weight: 9
    },
    {
        name: 'Bike 4',
        weight: 6.8
    },
    {
        name: 'Bike 5',
        weight: 7.2
    }
];
// 2. Imposto la prima bici come la più leggera all'inizio
let lightestBike = bikes[0];

// 3. Scorro tutto l'array per trovare la bici col peso minore
for (const bike of bikes) {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
}
// 4. Stampo la bici con peso minore
console.log(`La bici più leggera è ${lightestBike.name} con peso di ${lightestBike.weight} kg`);