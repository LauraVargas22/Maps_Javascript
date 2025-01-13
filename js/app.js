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
    //Validar que el ID ingresado sea válido
    if(superheroes.has(id)) {
        console.log(`Nombre: ${superheroes.get(id).nombre}, Universo ${superheroes.get(id).universo}, Poder ${superheroes.get(id).poder}, Fuerza ${superheroes.get(id).fuerza}}`);
    //De lo contrario, mostrar que el ID no se encuentra
    } else {
        console.log(`El id ${id} no se encuentra`);
    }
}

console.log(buscarSuperheroePorID(9));

//Tercer Ejercicio: Crear función para buscar superhéroes por Universo
const buscarPorUniverso = (universoSelected) => {
    //Lista donde se van a almacenar los nombres de los superheroes que pertenezcan al universo seleccionado
    const resultado = [];

    //Recorrer cada superhéroe para conocer el universo al cual pertencen
    for (const [clave, valor] of superheroes) {
        //Si el universo seleccionado coincide con el cual pertence agregar el nombre del superhéroe a la lista
        if (valor.universo === universoSelected) {
            //Se agrega el nombre a la lista
            resultado.push(valor.nombre);
        } 
    }

    //Si la lista donde se agregaron los nombres tiene una longitud mayor a 0 mostrarla
    if (resultado.length > 0) {
        console.log(`Los superhéroes en el universo ${universoSelected} son: ${resultado.join(", ")}`);
    //De lo contrario, mostrar que el universo no coincide con la información de los superhéroes
    } else {
        console.log(`El universo ${universoSelected} no se ha encontrado`);
    }
    return resultado;
}

console.log(buscarPorUniverso("DC"));

//Cuarto Ejercicio: Actualizar el nivel de fuerza de un superhéroe
const actualizarFuerza = (id, nuevaFuerza) => {
    //Validar que el ID ingresado sea válido
    if (superheroes.has(id)) {
        const superheroe = superheroes.get(id);
        //Cambiar la fuerza actual por una nueva
        superheroe.fuerza = nuevaFuerza;
        console.log(`Fuerza del superheroe ${superheroes.get(id).nombre} actualizada a ${nuevaFuerza}.`);
    //De lo contrario, mostrar que el ID no se encuentra
    } else {
        console.log(`El superhéroe con ID ${id} no existe.`);
    }
}

console.log(actualizarFuerza(2, 70))

//Quinto Ejercicio: Eliminar un superhéroe usando su ID
const eliminarSuperheroe = (id) => {
    //Validar que el ID ingresado pertenezca a superheroes y eliminarlo
    if (superheroes.delete(id)) {
        console.log(`El superhéroe con el ID ${id} ha sido eliminado`);
    //De lo contrario, mostrar que el ID no se encuentra
    } else {
        console.log(`El superhéroe con el ID ${id} no existe`);
    }
}

console.log(eliminarSuperheroe(2));

//Sexto Ejercicio: Mostrar todos los superhéroes
const mostrarSuperheroes = () => {
    console.log("Superhéroes:");
    //Recorrer superhéroes y por cada uno mostrar su nombre
    for (const [id, superheroe] of superheroes) {
      console.log(`ID: ${id}, Nombre: ${superheroe.nombre}`);
    }
}

console.log(mostrarSuperheroes());

//Séptimo Ejercicio: Buscar el superhéroe más fuerte
const superheroeMasFuerte = () => {
    //Nombre del superhéroe con más fuerza
    let superheroeMasFuerza = null;
    //Valor al cual equivale la fuerza del superhéroe con mayor fuerza
    let mayorFuerza = 0;
    //Recorrer superhéroes con su clave - valor
    for (const [id, superheroe] of superheroes.entries()) {
        //La fuerza encontrada la compara con la evaluada anteriormente
        if (superheroe.fuerza > mayorFuerza) {
            //Toma la fuerza de mayor valor
            mayorFuerza = superheroe.fuerza;
            //Guarda el nombre del superhéroe con la fuerza de mayor valor
            superheroeMasFuerza = superheroe.nombre;
        }
    }
    console.log(`El superhéroe más fuerte es ${superheroeMasFuerza} con una fuerza de ${mayorFuerza}`);
}

console.log(superheroeMasFuerte());

//Octavo Ejercicio: Combate entre dos superhéroes
const combate = (id1, id2) => {
    //Valida la existencia de los IDs ingresados
    if (superheroes.has(id1) && superheroes.has(id2)) {
        //Fuerza del superhéroe con ID1
        const fuerzaId1 = superheroes.get(id1).fuerza;
        //Fuerza del superhéroe con ID2
        const fuerzaId2 = superheroes.get(id2).fuerza;
        //Evalua si la fuerza del superhéroe con id1 es mayor a la del id2
        if (fuerzaId1 > fuerzaId2) {
            console.log(`${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza}) vence a ${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza})`);
        //Evalua si la fuerza del superhéroe con id2 es mayor a la del id1
        } else if (fuerzaId2 > fuerzaId1) {
            console.log(`${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza}) vence a ${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza})`);
        //Evalua casos de empate
        } else {
            console.log(`${superheroes.get(id1).nombre} (Fuerza:${superheroes.get(id1).fuerza}) ha empatado con ${superheroes.get(id2).nombre} (Fuerza:${superheroes.get(id2).fuerza})`);
        }
    }
}

console.log(combate(1, 3));

//Noveno Ejercicio: Agregar Habilidades Adicionales
const agregarHabilidades = (id, nuevoPoder) => {
    //Valida la existencia del id ingresado
    if (superheroes.has(id)) {
        //Superhéroe con el id ingresado
        const superheroe = superheroes.get(id);
        
        // Cambiar la el valor de poder a un array
        if (!Array.isArray(superheroe.poder)) {
            superheroe.poder = [];
        }

        //Agrega el poder ingresado al superhéroe ingresado
        superheroe.poder.push(nuevoPoder);

        console.log(`El superhéroe ${superheroe.nombre} tiene ahora el poder de ${nuevoPoder}`);
    //En caso de que el id ingresado no exista
    } else {
        console.log(`El id ${id} no se ha encontrado`);
    }
};
console.log(agregarHabilidades(2, 'Visión'));

//Parte 2: Mostrar Habilidades
const mostrarHabilidades = (id) => {
    //Evaluar que el id ingresado exista
    if (superheroes.has(id)) {
        console.log(`Habilidades de ${superheroes.get(id).nombre}: ${superheroes.get(id).poder}`);
    //En caso de que el id ingresado no exista
    } else {
        console.log(`El id ${id} no se ha encontrado`);
    }
}

console.log(mostrarHabilidades(1))