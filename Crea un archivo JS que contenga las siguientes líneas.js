//Una variable que contenga la lista de la compra (mínimo 5 elementos
var compras = ["arroz", "papa", "cebolla", "cebollin", "cilantro", "pimienta"]

//Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol")

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop()

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var peliculas = [
    {
        titulo: "kunfu panda",
        director: "alessandro carloni",
        fecha:  2016
    },
    {
        titulo: "interestelar",
        director: "jonathan nolan",
        fecha: 2014
    },
    { titulo: "joker", 
    director: " todd phillips",  
    fecha:2019 
     },
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
 const p = peliculas.filter(peliculas => peliculas.fecha > 2010)

 //Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
 const d = peliculas.map(peliculas => peliculas.director)
 
 //Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
 const t = peliculas.map(peliculas => peliculas.titulo)
 
 // Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat
 const lista = d.concat(t);
 
 //Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 const nuevaLista = [...d, ...t]
 console.log(nuevaLista)