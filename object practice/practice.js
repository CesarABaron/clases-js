const user = {
    name: "Cesar",
    age: 28,
    city: "Bogotá",
    job: "Developer"
  }





//   → Reto:

// Muestra solo el valor de city en consola.

// Cambia el valor de job a "Senior Developer".

// Agrega una nueva propiedad llamada hobby con el valor "Guitar".

// Elimina la propiedad age.



// console.log(user.city);

// user.job = "Senior Developer"

// user.hobby = "Guitar"

// user.age= 0


// delete user.age



// console.log(user)



// const users = [
//     { name: "Cesar", age: 28 },
//     { name: "Juan", age: 31 },
//     { name: "Cesar", age: 25 },
//     { name: "Laura", age: 22 }
//   ]




//   Reto:

//   Muestra solo los objetos que tengan el nombre "Cesar".
  
//   Muestra solo los que sean menores de 30 años.
  
//   Cambia la edad de "Laura" a 24 años.
  
//   Elimina a "Juan" del array.



// const soloCesar  = users.filter((x) => x.name === "Cesar")


// console.log(soloCesar)


// mejor de 30 años

// const menorQ30 = users.filter((x)=> x.age < 30 )


// // Edad laura 24 años

// const edadLaura = users[3].age = 24



// // elimminar a "juan" del array 


// const eliminaJuan = users.filter((x) => x.name != "Juan")


// console.log(eliminaJuan)





//   // Reto 1 → Devuelve solo los usuarios que vivan en "Lima" 


//   console.log(users.filter((x)=> x.city === "Lima"))


//   // Reto 2 → Devuelve solo los usuarios menores de 30 que NO se llamen "Juan"

//   console.log(users.filter((x)=> x.name != "Juan" && x.age < 30))


//   // Reto 3 → Devuelve solo los usuarios cuyo nombre tenga más de 4 letras 

//   console.log(users.filter((x)=> x.name.length > 4))




//   //quiero que me digas por que es una buena practica no pisar valores, por ejempo   users = user. filter()






//  // Ejemplo 1 → Dame solo los nombres de los que viven en Lima


//  const justLima =users.filter((x) => x.city === "Lima")
  
//  console.log(justLima.map(x => x.name))


// // Ejemplo 2 → Dame solo las edades de los que tengan menos de 30 años

// const justAge = users.filter(x => x.age < 30)

// console.log(justAge.map(x => x.age))


// // Ejemplo 3 → Dame un array de frases con la gente de Lima 

// const phraseLima = users.filter(x => x.city === "Lima")

// console.log(phraseLima.map(x => ` Hola soy ${x.name} y vivo en ${x.city} `))


// → Devuelve un array solo con los nombres de las personas que vivan en "Lima".



const users = [
    { name: "Cesar", age: 28, city: "Lima" },
    { name: "Laura", age: 24, city: "Bogotá" },
    { name: "Juan", age: 31, city: "México" },
    { name: "Maria", age: 29, city: "Lima" },
    { name: "Pedro", age: 27, city: "Santiago" }
  ]


  //  Devuelve un array solo con los nombres de las personas que vivan en "Lima". 


// const justLima  = users.filter((x)=> x.city === "Lima")

// console.log(justLima.map(x => x.name ))




// // → Devuelve un array con las edades de las personas que NO se llamen "Juan". 


// const justage = users.filter(x => x.name != "Juan")

// console.log(justage.map(x => x.age))



// //  → Devuelve un array de strings que diga: "Hola soy NOMBRE y tengo EDAD años"
// //Solo de las personas menores de 30 años.


// const minor30 = users.filter(x => x.age < 30)

// console.log(minor30.map(x => `Hola, soy ${x.name} y tengo ${x.age}`))



// Reto 4:


// → Devuelve un array con objetos que solo contengan name y city
// Pero solo de las personas que vivan en "Lima".



const justLima  = users.filter((x)=> x.city === "Lima")



const deleteAge =  justLima.map(x => {return {name:x.name, age: x.age }})


console.log(deleteAge)
// console.log(justLima)



// Reto 5:
// → Devuelve un array de strings así:
// "NOMBRE vive en CITY"
// Pero solo de personas mayores de 25.





// const moreThan25 = users.filter(x => x.city > 25)

// console.log(moreThan25.map(x => `${x.name} vive en {x.city}`))