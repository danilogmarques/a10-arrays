//Exercicío 1
const arrayNumeros = [ 7, 9 , 23 , 14, 5 , 89, 65]
console.log(arrayNumeros)

//Exercicio 2
console.log(arrayNumeros[0])
console.log(arrayNumeros.includes(23))

const arrayString = ["maca", "banana", "uva" ,"limao" ,"abacaxi",]
console.log(arrayString)
console.log(arrayString[1])

const arrayMisto = [32, "banana", true, "uva" ,false ,89]
console.log(arrayMisto)

//Exercicio 2 
console.log(arrayMisto[2])
console.log(arrayMisto.includes("abacaxi"))

//Exercicío 3
const arrayNumerosCopia = arrayNumeros.slice()
arrayNumerosCopia.push(6)
console.log(arrayNumerosCopia)
console.log(arrayNumeros)

const arrayStringCopia = arrayString.slice()
 arrayStringCopia.pop()
 console.log(arrayString)
 console.log(arrayStringCopia)

const arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(2,1)
console.log(arrayMisto)
console.log(arrayMistoCopia)