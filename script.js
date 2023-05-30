

//----- APARTADO VARIABLES -----
let num = 3;
let string = "holas";
let bool = true;

 console.log(num + string + bool);

 let variable1 = document.createElement("p");
 variable1.innerText = `${num} ${string} ${bool}`;
 document.querySelector("header").appendChild(variable1);


 let num1 = 2;
 let num2 = 6;

 function operaciones() {
    suma = num1 + num2;
    console.log(suma);

    resta = num1 - num2;
    console.log(resta);

    multiplicar = num1 * num2;
    console.log(multiplicar);

    dividir = num1 / num2;
    console.log(dividir);

    let variable2 = document.createElement("p");
    variable2.innerText = `${suma} ${resta} ${dividir}`;
    document.querySelector("header").appendChild(variable2);
 };

 operaciones();


 let nombre = "Marco";
 let apellido = "Polo";
 let edad = 43;

 let array = [nombre, apellido, edad];
 let filtro = array.filter((val) => {
   if(typeof(val) === "string") {
      return true;
   }
 });

 console.log(filtro.join(' '));

 let variable3 = document.createElement("p");
 variable3.innerText = `${filtro.join(' ')}`;
 document.querySelector("header").appendChild(variable3);


//----- APARTADO FUNCIONES -----
let imprimirNombre = (nombre) => {
   saludo = `Hola, ${nombre}`;
   return saludo;
};

console.log(imprimirNombre("Maite"));

let funcion1 = document.createElement("p");
funcion1.innerText = `${imprimirNombre("Maite")}`;
document.querySelector("header").appendChild(funcion1);


function sumaNumeros(num1, num2) {
   resultado = num1 + num2;
   return resultado;
};

console.log(sumaNumeros(3, 7));

let funcion2 = document.createElement("p");
funcion2.innerText = `${sumaNumeros(3, 7)}`;
document.querySelector("header").appendChild(funcion2);


function numeroParImpar(num) {
   if(typeof(num) === "number") {
      if(num % 2 === 0) {
         return `Este número es par`;
      } else {
         return `Este número es impar`;
      }
      
   } else {
      return `Esto no es un número`;
   }
};

console.log(numeroParImpar(3));

let funcion3 = document.createElement("p");
funcion3.innerText = `${numeroParImpar(3)}`;
document.querySelector("header").appendChild(funcion3);

//----- APARTADO OBJETOS -----
let coche = {
   marca: "BMW",
   puertas: 4,
   caracteristicas: {
      marchas: "manual",
      carroceria: "descapotable",
   }
};

console.log(coche.marca);
console.log(coche.puertas);
console.log(coche.caracteristicas.marchas);

let objetos1 = document.createElement("p");
objetos1.innerText = `${coche.marca} ${coche.puertas} ${coche.caracteristicas.marchas}`;
document.querySelector("header").appendChild(objetos1);

//----- APARTADO ARRAYS -----

let ejercicioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < ejercicioArray.length; i++) {
   console.log(ejercicioArray[i]);
};

ejercicioArray.push(11);
console.log(ejercicioArray.join(" "));

for (let i = 0; i < ejercicioArray.length; i++) {
   let num = ejercicioArray[i];
   if( typeof(num) === "number" && num % 2 === 0) {
      delete ejercicioArray[i];
   }
};

console.log(ejercicioArray.join(" "));

let numMayor = ejercicioArray[0];
for (let i = 0; i < ejercicioArray.length; i++) {
   let num = ejercicioArray[i];
   if(typeof(num)==="number" && num >= numMayor){
      numMayor = ejercicioArray[i];
   }
};
console.log(numMayor);

let numMenor = ejercicioArray[0];
for (let i = 0; i < ejercicioArray.length; i++) {
   let num = ejercicioArray[i];
   if(typeof(num)==="number" && num <= numMenor){
      numMenor = ejercicioArray[i];
   }
};
console.log(numMenor);

let textoMayus = "LOREM IPSUM";
console.log(textoMayus.toLowerCase());

let textoMinus = "lorem ipsum";
console.log(textoMayus.toUpperCase());


function textoCapital(arrayNombres) {
   return arrayNombres.map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
   }) 
};


let nombres = ["josefina", "anacleto", "eustaquio"];
console.log(textoCapital(nombres).join(" "));


//----- APARTADO DOM -----

document.getElementById("btn").addEventListener("click", () => {
   document.getElementById("textoPantalla").innerText="¡Perfecto!";
});


document.getElementById("btn2").addEventListener("click", () => {
   if (document.getElementById("textoPantalla").style.display === "none") {
      document.getElementById("textoPantalla").style.display = "block";
   } else {
      document.getElementById("textoPantalla").style.display = "none"
   }
});


let domNombres = ["Duffman", "Moe", "Homer", "Bart", "Lisa", "Marge", "Maggie", "Burns", "Flanders", "Dr.Nick"];

domNombres.forEach((val) => {
   let htmlLi = document.createElement("li");
   htmlLi.innerHTML=val;
   document.getElementById("simpsons").appendChild(htmlLi);
});


domNumeros = [3, 7, 10, 5, 4, "d"];

let contador = 0;
for (let i = 0; i < domNumeros.length; i++) {
   if (typeof(domNumeros[i]) === "number") {
      contador++;
   }
};

let htmlContador = document.createElement("h3");
htmlContador.innerHTML=contador;
document.body.appendChild(htmlContador);


let formulario = document.createElement("form");
let primerLabel = document.createElement("label");
let primerInput = document.createElement("input");
let segundoLabel = document.createElement("label");
let segundoImput = document.createElement("input");
let botonFormulario = document.createElement("button");

primerLabel.innerHTML="Usuario";
primerInput.placeholder="Nombre";
segundoLabel.innerHTML="Contraseña";
segundoImput.placeholder="Contraseña";
botonFormulario.innerText="Login";

formulario.appendChild(primerLabel);
formulario.appendChild(primerInput);
formulario.appendChild(segundoLabel);
formulario.appendChild(segundoImput);
formulario.appendChild(botonFormulario);

document.body.appendChild(formulario);


let animalesArray = [
{
   id: 025,
   name: "Hades",
   status: "LC",
   species: "Felino",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 037,
   name: "Cleo",
   status: "LC",
   species: "Felino",
   type: "Mamífero",
   gender: "Femenino",
},
{
   id: 333,
   name: "Zeus",
   status: "LC",
   species: "Perro",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 186,
   name: "Monstruo",
   status: "EN",
   species: "Ballena azul",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 846,
   name: "Loki",
   status: "LC",
   species: "Cuervo",
   type: "Oviparo",
   gender: "Masculino",
},
{
   id: 007,
   name: "Perry",
   status: "NT",
   species: "Ornitorrinco",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 953,
   name: "Dumbo",
   status: "EN",
   species: "Elefante africano",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 385,
   name: "Spirit",
   status: "LC",
   species: "Caballo",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 184,
   name: "Mufasa",
   status: "VU",
   species: "León africano",
   type: "Mamífero",
   gender: "Masculino",
},
{
   id: 047,
   name: "Rajah",
   status: "EN",
   species: "Tigre de bengala",
   type: "Mamífero",
   gender: "Masculino",
}
];


let tabla = document.createElement("table");

animalesArray.forEach((val) => {
   let tablaFila = document.createElement("tr");

   tablaFila.innerHTML = `<th>${val.id}</th>
   <td>${val.name}</td><td>${val.status}</td><td>${val.species}</td><td>${val.type}</td><td>${val.gender}</td>`
  
   tabla.appendChild(tablaFila);
});

document.body.appendChild(tabla);