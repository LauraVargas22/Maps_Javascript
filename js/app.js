/* Gestión de Superhéroes con Map en JS
    By Mariana Vargas
*/

//Ejercicio 1: Crear el sistema de superhéroes
const superheroes = new Map ([
    [1, {
        nombre: "Iron Man",
        universo: "Marvel",
        poder: "Tecnología avanzada",
        fuerza: 85
    }],
    [2, {
        nombre: "Batman",
        universo: "DC",
        poder: "Inteligencia y estrategia",
        fuerza: 50
    }],
    [3, {
        nombre: "Wonder Woman",
        universo: "DC",
        poder: "Fuerza sobrehumana",
        fuerza: 95
    }],
    [4, {
        nombre: "Capitana Marvel",
        universo: "Marvel",
        poder: "Energía Cósmica",
        fuerza: 98
    }],
    [5, {
        nombre: "Black Widow",
        universo: "Marvel",
        poder: "Espionaje y Artes marciales",
        fuerza: 55
    }]
]);

//Segundo Ejercicio: Crear función para buscar superhéroes por ID
const buscarSuperheroePorID = (id) => {

    if(superheroes.has(id)) {
        alert(`Nombre: ${superheroes.get(id).nombre}, Universo ${superheroes.get(id).universo}, Poder ${superheroes.get(id).poder}, Fuerza ${superheroes.get(id).fuerza}}`)
    } else {
        alert(`El id ${id} no se encuentra`);
    }
}

console.log(buscarSuperheroePorID(9));

//Tercer Ejercicio: Crear función para buscar superhéroes por Universo

const buscarPorUniverso = (universoSelected) => {
    const resultado = [];

    for (const [clave, valor] of superheroes) {
        if (valor.universo === universoSelected) {
            resultado.push(valor.nombre);
        } 
    }

    if (resultado.length > 0) {
        alert(`Los superhéroes en el universo ${universoSelected} son: ${resultado.join(", ")}`);
    } else {
        alert(`El universo ${universoSelected} no se ha encontrado`);
    }
    return resultado;
}

console.log(buscarPorUniverso("DC"));

//Cuarto Ejercicio: Actualizar el nivel de fuerza de un superhéroe
const actualizarFuerza = (id, nuevaFuerza) => {
    if (superheroes.has(id)) {
        const superheroe = superheroes.get(id);
        superheroe.fuerza = nuevaFuerza;
        console.log(`Fuerza del superheroe ${superheroes.get(id).nombre} actualizada a ${nuevaFuerza}.`);
    } else {
        console.log(`El superhéroe con ID ${id} no existe.`);
    }
}

console.log(actualizarFuerza(2, 70))

//Quinto Ejercicio: Eliminar un superhéroe usando su ID
const eliminarSuperheroe = (id) => {
    if (superheroes.delete(id)) {
        console.log(`El superhéroe con el ID ${id} ha sido eliminado`);
    } else {
        console.log(`El superhéroe con el ID ${id} no existe`);
    }
}

console.log(eliminarSuperheroe(2));

//Sexto Ejercicio: Mostrar todos los superhéroes
const mostrarSuperheroes = () => {
    console.log("Superhéroes:");
    for (const [id, superheroe] of superheroes) {
      console.log(`ID: ${id}, Nombre: ${superheroe.nombre}`);
    }
}

console.log(mostrarSuperheroes());

//Séptimo Ejercicio: Buscar el superhéroe más fuerte
const superheroeMasFuerte = () => {
    let superheroeMasFuerza = null;
    let mayorFuerza = 0;
    for (const [id, superheroe] of superheroes.entries()) {
        if (superheroe.fuerza > mayorFuerza) {
            mayorFuerza = superheroe.fuerza;
            superheroeMasFuerza = superheroe.nombre;
        }
    }
    console.log(`El superhéroe más fuerte es ${superheroeMasFuerza} con una fuerza de ${mayorFuerza}`);
}

console.log(superheroeMasFuerte());

//Octavo Ejercicio: Combate entre dos superhéroes
const combate = (id1, id2) => {
    if (superheroes.has(id1) && superheroes.has(id2)) {
        const fuerzaId1 = superheroes.get(id1).fuerza;
        const fuerzaId2 = superheroes.get(id2).fuerza;
        if (fuerzaId1 > fuerzaId2) {
            console.log(`${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza}) vence a ${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza})`);
        } else if (fuerzaId2 > fuerzaId1) {
            console.log(`${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza}) vence a ${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza})`);
        } else {
            console.log(`${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza}) ha empatado con ${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza})`);
        }
    }
}

console.log(combate())
