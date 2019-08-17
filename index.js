
const { cons, first, rest, isEmpty, isList } = require('functional-light');

/*console.log(cons('1',[])); // ['1']
console.log(cons('2', cons('1',[]))); // ['2', '1']
console.log(isList(cons('1',[]))); // TRUE
console.log(isList({length: false })); // false
console.log(isEmpty(cons('1',[]))); // false
console.log(isEmpty([])); // true
console.log(isEmpty(9)); // false
console.log(rest(cons(1, cons(2, [])))); // [2]
console.log(rest([])); // []
console.log(cons(1, [2, 3])); // []

const foo = cons(484, []);
console.log(cons('XX', foo))
console.log(foo); // Debe imprimir [484]*/
/* funcion auxiliar 
  longitud(list)->lista->numbre
  proposito : Decir la longitud de una lista
  function longitud(list){
    cuerpo de la funcion
  }
  ejemplos : 
  longitud([1,2,3])->3
  longitud([4,5,9])->3

*/
function longitud(list) {
  if (isEmpty(list)) {
    return 0
  } else { return 1 + longitud(rest(list)) }
}
/*console.log(longitud([1,2,3]))*/


/* 1.Encuentre el mayor valor de una lista numeros 
mayor(list)->lista->number
proposito : Decir el mayor en una lista de numeros
function mayor(list){
  cuerpo de la funcion
}
ejemplos :
mayor([1,2,3])->3
mayor([9,10,12])->12
mayor([4,20,5])->20
*/
function mayor(list) {
  if (longitud(list) == 1) {
    return first(list)
  } else {
    return Math.max(first(list), mayor(rest(list)))
  }
}
/*console.log("mayor", mayor([1, 2, 3]))
console.log("mayor", mayor([9, 10, 12]))
console.log("mayor", mayor([4, 20, 5]))*/

/* 2.Encuentre el promedio de los valores de una lista
 funcion auxiliar
suma (list)->lista->number
proposito :  sumar los numeros de una lista 
function suma (list){
  cuerpo de la funcion
}
suma([1,2,3,4])->10
suma([1,2,5,9])->17
*/
function suma(list) {
  if (isEmpty(list)) {
    return 0
  } else {
    return first(list) + suma(rest(list))
  }
}
/*console.log(suma([1,2,3,4]))*/

/* funcion principal
promedio(list)->lista->number
proposito : Sacar un promedio
function promedio(list){
  cuerpo de la funcion
}
Ejemplos :
promedio([1,2,3])->2
promedio([4,3,2])-> 3
promedio([2,4,6,8])->5
*/
function promedio(list) {
  return suma(list) / longitud(list)
}
/*console.log("promedio", promedio([1, 2, 3]))
console.log("promedio", promedio([4, 3, 2]))
console.log("promedio", promedio([2, 4, 6, 8]))
*/

//3.Concatene 2 listas
/*
concatenar(list1,list2)->lista,lista->lista
proposito : concatenar dos listas
funcion concatenar(list1,list2){
  cuerpo de la funcion
}
Ejemplos :
concatenar([1,2,3],[4,5,6])->[1,2,3,4,5,6]
concatenar([7,1,4],[9,6,8])->[7,1,4,9,6,8]
concatenar([3,4,1],[7,2,4])->[3,4,1,7,2,4]
*/

function concatenar(list1, list2) {
  if (isEmpty(list1)) {
    return list2
  } else {
    return cons(first(list1), concatenar(rest(list1), list2))
  }
}
/*console.log("concaternar", concatenar([1, 2, 3], [4, 5, 6]))
console.log("concaternar", concatenar([7, 1, 4], [9, 6, 8]))
console.log("concaternar", concatenar([3, 4, 1], [7, 2, 4]))*/

/* 4.Invierta del orden de una lista
 funcion auxiliar
ultimo(list)->lista->number
proposto :  sacar el ultimo numero de una lista
function ultimo(list){
  cuerpo de la funcion
}
ejemplos :
ultimo([1,2,3])->3
ultimo([2,4,9])->9
*/
function ultimo(list) {
  if (isEmpty(rest(list))) {
    return first(list);
  } else {
    return ultimo(rest(list));
  }
}
/* console.log(ultimo([1,2,3]))
console.log(ultimo([2,4,9]))*/

/* funcion auxiliar
elPrincipio(list)->lista->lista
proposito : haeer una lista la cual muestra todos los numeros de los lista
menos el ultimo
function elPrincipio(list){
  cuerpo de la funcion
}
ejemplos : 
elPrincipio([1,2,3,4])->[1,2,3]
elPrincipio([4,5,9])->[4,5]
*/
function elPrincipio(list) {
  if (isEmpty(rest(list))) {
    return [];
  } else {
    return cons(first(list), elPrincipio(rest(list)));
  }
}
/*
console.log(elPrincipio([1,2,3,4]))
console.log(elPrincipio([4,5,9])) */

/* funcion principal
invertir(list)->lista->lista
proposito : invetir una lista
function invetir(list){
  cuerpo de la funcion
}
ejemplos :
invertir([1,2,3])->[3,2,1]
invertir([2,5,9])->[9.5.2]
invertir([7,2,3])->[3,2,7]
*/
function invertir(list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return cons(ultimo(list), invertir(elPrincipio(list)));
  }
}
/*console.log("invertir", invertir([1, 2, 3]))
console.log("invertir", invertir([2, 5, 9]))
console.log("invertir", invertir([7, 2, 3])) */

/* 5. Ordene de manera ascendente
funcion auxiliar
menor(list)->lista->number
proposito : decir el numero menor de una lista
function menor(list){
  cuerpo de la funcion
}
ejemplos : 
menor([1,2,5])->1
menor([5,2,7])->2
*/
function menor(list) {
  if (longitud(list) == 1) {
    return first(list)
  } else {
    return Math.min(first(list), menor(rest(list)))
  }
}
/* console.log(menor([1,2,5]))
console.log(menor([5,2,7]))
*/

/* funcion auxiliar
borrarmenor(list)->lista->lista
proposito : borrar el menor de una lista
function borrarmenor(list){
  cuerpo de la funcion
}
ejemplos :
borrarmenor([1,2,5])->[2,5]
borrarmenor([5,2,7])->[5,7] */
function borrarmenor(list) {
  if (isEmpty(list)) {
    return [];
  } else if (first(list) == menor(list)) {
    return rest(list);
  } else {
    return cons(first(list), borrarmenor(rest(list)));
  }
}
/*console.log(borrarmenor([1,2,5]))
console.log(borrarmenor([5,2,7]))*/

/* funcion principal
ascendente(list)->list->lista
proposito : Poner un lista de forma ascendente
function ascendente(list){
  cuerpo de la funcion
}
ejemplos :
ascendente([4,9,1,7,2])->[ 1, 2, 8, 10 ]
ascendente([4,9,1,7,2])->[1,2,4,7,9]
ascendente([0,7,3,4])->[ 0, 3, 4, 7 ]
*/
function ascendente(list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return cons(menor(list), ascendente(borrarmenor(list)));
  }
}
/*console.log("ascendente", ascendente([10, 8, 1, 2]))
console.log("ascendente", ascendente([4, 9, 1, 7, 2]))
console.log("ascendente", ascendente([0, 7, 3, 4]))*/

/* 6.Genere la lista de los primeros n términos de la serie de Fibonacci 
 funcion auxiliar
fibo(n)->number->number
proposito : dal el numero de fibonacci en una posicion n
function fibo(n){
  cuerpo de la funcion
}
ejemplos :
fibo(0)->1
fibo(2)->2
*/
function fibo(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}
/*console.log(fibo(0))
console.log(fibo(2))*/

/* funcion auxiliar
listafibo(n)->number->lista
proposito : añardir un numero de fibonacci en una lista
function listafibo(n){
  cuerpo de la funcion
}
ejemplos :
listafibo(3)->[ 3, 2, 1, 1 ]
listafibo(8)-> [34, 21, 13, 8, 5, 3, 2, 1, 1 ]
*/
function listafibo(n) {
  if (n >= 0) {
    return cons(fibo(n), listafibo(n - 1))
  } else {
    return [];
  }
}
/*console.log(listafibo(3))
console.log(listafibo(8))*/

/* funcion principal
invertirfibo(n)->number->lista
proposito : inverir la lista de numero fibonacci
function inverirfibo(n){
  cuerpo de la funcion
}
ejemplos :
inverirfibo(3)->[ 1, 1, 2, 3 ]
invertirfibo(8)->[ 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
invertirfibo(5)-> [ 1, 1, 2, 3, 5, 8 ]
*/
function invertirfibo(n) {
  return invertir(listafibo(n))
}
/*console.log("invertir fibonacci", invertirfibo(3))
console.log("invertir fibonacci", invertirfibo(8))
console.log("invertir fibonacci", invertirfibo(5))*/

/* 7.Dada una lista, eliminar todos los elementos que no sean números 

solonum(list)->lista->lista
proposito : eliminar los elementos que no sean numeros
function solonum(list){
  cuerpo de la funcion
}
ejemplos :
solonum([5,6,"j",8])->[ 5, 6, 8 ]
solonum([1,2,3,4])->[1,2,3,4]
solonum([1,"j",4,"k"])->[1,4]
*/
function solonum(list) {
  if (isEmpty(list)) {
    return []
  } else if (typeof first(list) == "number") {
    return cons(first(list), solonum(rest(list)))
  } else {
    return solonum(rest(list))
  }
}
/*console.log("Solo numero", solonum([5, 6, "j", 8]))
console.log("Solo numero", solonum([1, 2, 3, 4]))
console.log("Solo numero", solonum([1, "j", 4, "k"]))*/

/* 8.Implemente una función que inserta un elemento x en la posición n de la lista, si n está entre 0 y el
(longitud lista). No hace nada en caso contrario. 

agregarx(x,list,n)->number,lista,number->lista
proposito : agregar un numero en una posicion n de una lista
function agregarx(x,list,n){
  cuerpo de la funcion
}
ejemplos :
agregarx(10,[5,6,8],2)->[ 5, 6, 10, 8 ]
agregarx(1,[1,2,3],0)->[1,1,2,3]
agregarx(4,[7,8,9],3)->[7,8,9]
*/
function agregarx(x, list, n) {
  if (n > longitud(list)) {
    return list
  } else if (isEmpty(list)) {
    return [];
  } else if (n != 0) {
    return cons(first(list), agregarx(x, rest(list), n - 1))
  } else return cons(x, list)
}
/*console.log("agregar x", agregarx(10, [5, 6, 8], 2))
console.log("agregar x", agregarx(1, [1, 2, 3], 0))
console.log("agregar x", agregarx(4, [7, 8, 9], 3))*/

/* 9. retorne el indice o muestre -(n+1) donde n es la posciion en la cual deberia insertar x para mantener
una lista ordenada 
 funcion auxiliar
liascendente(n,list)->number,lista->number
propostito : da la posicion de un numero en una lista ascendente
function leascendente(n,list){
  cuerpo de la funcion
}
ejemplos : 
liascendente(2,[1,3,4])->1
liascendente(4,[1,2,3,4])->3
*/
function liascendente(x, list) {
  if (first(list) < x) {
    return 1 + liascendente(x, rest(list))
  } return 0
}
/*console.log(liascendente(2,[1,3,4]))
console.log(liascendente(4,[1,2,3,4]))*/

/* funcion auxiliar
lidescendiente(n,list)->number,lista->number
propostito : da la posicion de un numero en una lista descendete
function lidescendiente(n,list){
  cuerpo de la funcion
}
lidescendiente(2,[4,3,2])->2
liascendente(4,[5,3,2,1])->1
*/
function lidescendiente(x, list) {
  if (first(list) > x) {
    return 1 + lidescendiente(x, rest(list))
  } return 0
}
/*console.log(lidescendiente(2,[4,3,2]))
console.log(lidescendiente(4,[5,3,2,1]))*/

/* funcion principal
indice(n,list)->number,lista->number
propostito : da la posicion de un numero en una lista 
function indice(n,list){
  cuerpo de la funcion
}
ejemplos :
indice(2,[])->0
indice(3,[1,2])->2
indice(10[9,8,7])->0
*/
function indice(x, list) {
  if (first(list) > first(rest(list))) {
    return lidescendiente(x, list)
  } else {
    return liascendente(x, list)
  }
}
/*console.log("indice", indice(2, []))
console.log("indice", indice(3, [1, 2]))
console.log("indice", indice(10, [9, 8, 7]))*/

/* 10. Implemente una función que inserta datos en una lista que siempre está ordenada 

funcion principal
agregarordenar(list1,list2)->lista,lista->lista
proposito : agregarordenar de acuerdo a la list2
function agregarordenar(list1,list2){
  cuerpo de la funcion
}
ejemplos : 
agregarordenar([8,9],[5,6,7])->[5,6,7,8,9]
agregarordenar([10,11],[3,2,1])->[11,10,3,2,1]
agregarordenar([5,6],[1,2,3])->[1,2,3,5,6]
*/
function agregarordenar(list1, list2) {
  if (first(list2) < first(rest(list2))) {
    return ascendente(concatenar(list1, list2))
  } else {
    return descen(concatenar(list1, list2))
  }
}
/*console.log("agregar y ordenar", agregarordenar([8, 9], [5, 6, 7]))
console.log("agregar y ordenar", agregarordenar([10, 11], [3, 2, 1]))
console.log("agregar y ordenar", agregarordenar([5, 6], [1, 2, 3]))*/



/* funcion auxiliar
borrarmayor(list)->lista->lista
proposito : borrar el numero mayor de una lista
function borrarmayor(list){
  cuerpo de la funcion
}
borrarmayor([1,2,3])->[1,2]
borrarmayor([4,9,5])->[4,5]
*/
function borrarmayor(list) {
  if (isEmpty(list)) {
    return [];
  } else if (first(list) == mayor(list)) {
    return rest(list);
  } else {
    return cons(first(list), borrarmayor(rest(list)));
  }
}
/*console.log(borrarmayor([1,2,3]))
console.log(borrarmayor([4,9,5]))*/

/* funcion principal descendiente
descen(list)->lista->lista
proposito : poner una lista descendientemente
function descen(list){
  cuerpo de la funcion
}
descen([1,2,3])->[3,2,1]
descen([4,5,6])->[6,5,4]
*/
function descen(list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return cons(mayor(list), descen(borrarmayor(list)));
  }
}
/*console.log(descen([1,2,3]))
console.log(descenborrarmayor([4,9,5]))*/


/* 11.Implemente una funcion que busca un elemento en una lista desordenada 
 funcion principal 
buscarx(n,list)->numbre,list->booleano
proposito : buscar un elmento y si esta pone true,sino false
function buscarelen(n,list){
  cuerpo de la funcion
}
buscarx(5,[1,2,5])->true
buscarx(1,[2,3,6])->false
buscarx("j",["a",1,"j"])->true
*/
function buscarx(x, list) {
  if (isEmpty(list)) {
    return false
  } else if (first(list) == x) {
    return true
  } else return buscarx(x, rest(list))
}
/*console.log("buscar elemento", buscarx(5, [1, 2, 5]))
console.log("buscar elemento", buscarx(1, [2, 3, 6]))
console.log("buscar elemento", buscarx("j", ["a", 1, "j"]))*/

/* 12. Implemente una función que elimina el elemento n de la lista 
borrarn(n,list)->numre,lista->lista
propostio : borrar un elmento de una lista
function borrarn(n,list){
  cuerpo de la funcion
}
ejemplos :
borrarn(5,[1,2,5])->[1,2]
borrarn("j",[1,"j",5])->[1,5]
borrarn(5,[1,2,4]))->[1,2,4]
*/
function borrarn(n, list) {
  if (isEmpty(list)) {
    return []
  } else if (first(list) == n) {
    return rest(list)
  } else {
    return cons(first(list), borrarn(n, rest(list)))
  }
}
/*console.log("borar elemento", borrarn(5, [1, 2, 5]))
console.log("borar elemento", borrarn("j", [1, "j", 5]))
console.log("borar elemento", borrarn(5, [1, 2, 4]))*/

/*13.Implemente una función que busca todos los números mayores que un cierto valor x. La función debe retornar una lista con los elementos encontrados

mayores(x,list)->number,lista->lista
proposito : dar una lista la cual tiene los numeros mayores a x
mayores(x,list){
  cuerpo de la funcion
}
mayores(5,[1,3,4,8])->[8]
mayores(1,[1,2,3,4])->[2,3,4]
mayores(2,[4,7,1,0])->[4,7]
*/
function mayores(x, list) {
  if (isEmpty(list)) {
    return []
  } else if (first(list) > x) {
    return cons(first(list), mayores(x, rest(list)))
  } else {
    return mayores(x, rest(list))
  }
}
/*console.log("mayores a x", mayores(5, [1, 3, 4, 8]))
console.log("mayores a x", mayores(1, [1, 2, 3, 4]))
console.log("mayores a x", mayores(2, [4, 7, 1, 0]))*/

/*14Implemente una función que busca todos los elementos de una lista que cumplen una cierta condición, por ejemplo, los números que sean pares. La función debe retornar una lista con los elementos encontrados

pares(x)->number,booleano
proposito : indicar true o false si es par
funcion pares(x){
  cuerpo de la funcion
}
Ejemplos :
pares(2)->true
pares(1)->false
*/
function pares(x) {
  if (x % 2 == 0) {
    return true
  } return false
}
/*
condicion(list,x)->lista,funcion->lista
proposito : de acuerdo a la funcion que se va a incluir mostrar
funcion condicion(list,x){
  cuerpo de la funcion
}
ejemplos :
(condicion([1,2,3,4,5,6],pares))->[2,4,6]
(condicion([1,2,3,4,5,6],impares))->[1,3,5] */
function condicion(list, x) {
  if (isEmpty(list)) {
    return []
  } else if (x(first(list))) {
    return cons(first(list), condicion(rest(list), x))
  } else {
    return condicion(rest(list), x)
  }
}
/*console.log("condicion con pares", condicion([1, 2, 3, 4, 5, 6], pares))*/


/*15Implemente una función que aplica una función data a todos los elementos de una lista(map).
Por ejemplo, la función debe ser capaz de elevar todos los elementos de la lista al cuadrado.

mapeo(list,x)->list,funcion->lista
proposito : dada una funcion se la aplica eso a la lista
function mapeo(list,x){
  cuerpo de la funcion
}
mapeo([1,2,3],(x)=>{return x*x}))->[ 1, 4, 9 ]
mapeo([1,2,3],(x)=>{return x+x}))->[ 2, 4, 6 ]
mapeo([4,8,2],(x)=>{return 2+x}))->[ 6, 10, 4 ]
*/

function mapeo(list, x) {
  if (isEmpty(list)) {
    return []
  } else {
    return cons(x(first(list)), mapeo(rest(list), x))
  }
}
/*console.log("mapeo", mapeo([1, 2, 3], (x) => { return x * x }))
console.log("mapeo", mapeo([1, 2, 3], (x) => { return x + x }))
console.log("mapeo", mapeo([4, 8, 2], (x) => { return 2 + x }))*/



//////////////////////////////////////// Parte II ///////////////////////////////////////////
//Instancias de las canciones.
const musica = [{ nombre: "Wish you were gay", album: "When we fall asleep", artista: "Billie", duracion: 240, estrellas: 5 },
{ nombre: "Bye bye beautiful", album: "Fly", artista: "Nightwish", duracion: 250, estrellas: 5 },
{ nombre: "Ride", album: "Born to Die", artista: "Lana del Rey", duracion: 280, estrellas: 5 },
{ nombre: "Jungle", album: "Forest", artista: "Tash Sultana", duracion: 350, estrellas: 4 },
{ nombre: "Boris", album: "Mutual Friends", artista: "Boy", duracion: 220, estrellas: 2 },
{ nombre: "Happy", album: "Happy", artista: "Pharrell Williams", duracion: 240, estrellas: 1 },
{ nombre: "Come out and play", album: "Come out and play", artista: "Billie", duracion: 250, estrellas: 3 },
{ nombre: "Feel good", album: "Chill out", artista: "Gorillaz", duracion: 350, estrellas: 4 },
{ nombre: "Eastside", album: "Eastside", artista: "Halsey", duracion: 180, estrellas: 4 },
{ nombre: "Sagan", album: "Fly", artista: "Nightwish", duracion: 350, estrellas: 5 }
]

/*
1. . Búsqueda de canción por nombre de canción. Debe retornar una canción o
vacío en caso de no encontrarla.
busquedadCancion(list,nombre)->list,string->String
proposito : Buscar una cancion por medio de la recursividad estructural 
function busquedaCancion(list,nombre){
  cuerpo de la funcion
}
busquedaCancion(musica,"Sagan")-> Sagan
busquedaCancion(musica,"Rest calm")-> []
busquedaCancion(musica,"Fly")-> []
*/

const busquedaCancion = function (list, nombre) {
  if (isEmpty(list)) {
    return [];
  } else if ((first(list).nombre) === nombre) {
    return first(list).nombre;
  } else {
    return busquedaCancion(rest(list), nombre);
  }
}
/*console.log(busquedaCancion(musica,"Sagan"))
console.log(busquedaCancion(musica,"Happy"))
console.log(busquedaCancion(musica,"Fly"))
*/
/*
2. Búsqueda de canciones por artista. Debe retornar una lista de canciones o
empty
busquedaArtista(list,artist)->list,string->List
proposito : De acuerdo a un artista se muestra su la lista de canciones o un vacio en caso no estar el artista dentro de la lista
function busquedaArtista(list,artist){
  cuerpo de la funcion
}
busquedaArtista(musica, "Nightwish")-> [ 'Bye bye beautiful', 'Sagan' ]
busquedaArtista(musica, "Halsey")-> [ 'Eastside' ]
busquedaArtista(musica, "Epica")-> []
*/
const busquedaArtista = function (list, artist) {
  if (isEmpty(list)) {
    return [];
  } else if ((first(list).artista) === artist) {
    return cons(first(list).nombre, busquedaArtista(rest(list), artist));
  } else {
    return busquedaArtista(rest(list), artist);
  }
}
/*console.log(busquedaArtista(musica, "Nightwish"))
console.log(busquedaArtista(musica, "Halsey"))
console.log(busquedaArtista(musica, "Epica"))*/

/*
3. Duración de la lista de reproducción en el formato “horas:minutos:segundos”

Funcion auxiliar
sumaDuracion (list)->list->Number
proposito : Sumar todas las duraciones de las canciones
function sumaDuracion (list){
  cuerpo de la funcion
}
sumaDuracion (musica)-> 2710
*/
const sumaDuracion = function (list) {
  if (isEmpty(list)) {
    return 0;
  } else {
    return first(list).duracion + sumaDuracion(rest(list));
  }
}
/*console.log(sumaDuracion(musica))*/

/*Funcion auxiliar
convertirHoras  (list)->list->Number
proposito : Convertir de segundos a horas 
function convertirHoras (list){
  cuerpo de la funcion
}
convertirHoras (musica)-> 0
*/
const convertirHoras = function (list) {
  return Math.floor(sumaDuracion(list) / 3600);
}
/*console.log(convertirHoras(musica))*/

/*Funcion auxiliar
convertirMinutos (list)->list->Number
proposito : Convertir de segundos a minutos
function convertirMinutos (list){
  cuerpo de la funcion
}
convertirMinutos (musica)-> 45
*/
const convertirMinutos = function (list) {
  return Math.floor((sumaDuracion(list) - (convertirHoras(list) * 3600)) / 60);
}
/*console.log(convertirMinutos(musica))*/

/*Funcion auxiliar
convertirSegundos (list)->list->Number
proposito : Dice los segundo que hay en la lista de canciones
function convertirSegundos (list){
  cuerpo de la funcion
}
convertirSegundos (musica)-> 10
*/
const convertirSegundos = function (list) {
  return Math.round((((sumaDuracion(list) - (convertirHoras(list) * 3600)) / 60) - convertirMinutos(list)) * 60)
}
/*console.log(convertirSegundos (musica))*/

/*Funcion principal
 unirFormato (list)->list->String
proposito : Dice los segundo que hay en la lista de canciones
function  unirFormato (list){
  cuerpo de la funcion
}
 unirFormato (musica)-> 0 h : 45 m : 10 s
*/
const unirFormato = function (list) {
  return convertirHoras(list) + ' h : ' + Math.floor(convertirMinutos(list)) + ' m : ' + convertirSegundos(list) + ' s'
}
/*console.log(unirFormato(musica))*/

/*
4. Todas las canciones con al menos menos de 2 estrellas

 Menos2Estrellas (list)->list->List
proposito : Mostrar el nombre de las canciones que tienen al menos 2 estrellas
function   Menos2Estrellas (list){
  cuerpo de la funcion
}
 Menos2Estrellas (musica)-> [ 'Boris', 'Happy' ]
*/
const Menos2Estrellas = function (list) {
  if (isEmpty(list)) {
    return [];
  } else if ((first(list).estrellas) <= 2) {
    return cons(first(list).nombre, Menos2Estrellas(rest(list)));
  } else {
    return Menos2Estrellas(rest(list));
  }
}
/*console.log(Menos2Estrellas(musica))*/
/*

5.  Todas las canciones con 5 estrellas
 Estrellas5  (list)->list->List
proposito : Mostrar el nombre de las canciones que tienen 5 estrellas
function   Estrellas5  (list){
  cuerpo de la funcion
}
Estrellas5 (musica)->[ 'Wish you were gay', 'Bye bye beautiful', 'Ride', 'Sagan' ]

*/
const Estrellas5 = function (list) {
  if (isEmpty(list)) {
    return [];
  } else if ((first(list).estrellas) === 5) {
    return cons(first(list).nombre, Estrellas5(rest(list)));
  } else {
    return Estrellas5(rest(list));
  }
}
/*console.log(Estrellas5(musica))*/

/*
6. Imprima los títulos de las canciones y su duración.

TituloDuracion   (list)->list->List
proposito : Mostrar en una lista de objetos el nombre de las canciones con su duracion
function   TituloDuracion   (list){
  cuerpo de la funcion
}
TituloDuracion (musica)->[
  { nombre: 'Wish you were gay', duracion: 240 },
  { nombre: 'Bye bye beautiful', duracion: 250 },
  { nombre: 'Ride', duracion: 280 },
  { nombre: 'Jungle', duracion: 350 },
  { nombre: 'Boris', duracion: 220 },
  { nombre: 'Happy', duracion: 240 },
  { nombre: 'Come out and play', duracion: 250 },
  { nombre: 'Feel good', duracion: 350 },
  { nombre: 'Eastside', duracion: 180 },
  { nombre: 'Sagan', duracion: 350 }
]

*/
const TituloDuracion = function (list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return concatenar([{ nombre: first(list).nombre, duracion: first(list).duracion }], TituloDuracion(rest(list)));
  }
}
/*console.log(TituloDuracion(musica))*/

/*
7. Crear la lista de mejor a peor canción

Funcion auxiliar
 mayorObj   (list)->list->Number
proposito : Identifica cual es la estrella con mayor calificacion
function    mayorObj   (list){
  cuerpo de la funcion
}
mayorObj(musica)->5
*/
const mayorObj = function (list) {
  if (longitud(list) == 1) {
    return first(list).estrellas;
  } else {
    return Math.max(first(list).estrellas, mayorObj(rest(list)));
  }
}
/*console.log(mayorObj(musica))*/

/*
Funcion auxiliar
 nombre   (list)->list->Object
proposito : Identifica en la lista de objetos cual tiene mayor calificacion en estrellas
function  nombre   (list){
  cuerpo de la funcion
}
nombre(musica)->{
  nombre: 'Wish you were gay',
  album: 'When we fall asleep',
  artista: 'Billie',
  duracion: 240,
  estrellas: 5
}

*/
const nombre = function (list) {
  if (isEmpty(list)) {
    return [];
  } else if (mayorObj(list) == (first(list).estrellas)) {
    return first(list);
  } else {
    return nombre(rest(list));
  }
}
/*console.log(nombre(musica))*/

/*
Funcion auxiliar
 borrarmayor  (list)->list->List
proposito : Borra de la lista el objeto con mayor aributo en estrellas
function borrarmayor   (list){
  cuerpo de la funcion
}
borrarmayorlist(musica)->[
  {nombre: 'Wish you were gay',album: 'When we fall asleep', artista: 'Billie',duracion: 240,estrellas: 5},{ nombre: 'Bye bye beautiful',album: 'Fly',
    artista: 'Nightwish',duracion: 250,estrellas: 5},{nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},{
    nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,estrellas: 4},{nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',
    duracion: 220,estrellas: 2}, {nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,estrellas: 1},{nombre: 'Come out and play',
    album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3}, {nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,
    estrellas: 4},{nombre: 'Eastside',album: 'Eastside',artista: 'Halsey',duracion: 180,estrellas: 4}
]
*/
function borrarmayorlist(list) {
  if (isEmpty(list)) {
    return [];
  } else if (first(list).estrellas == mayorObj(list)) {
    return rest(list);
  } else {
    return cons(first(list), borrarmayorlist(rest(list)));
  }
}
/*console.log(borrarmayor(musica))*/

/*
Funcion principal
 descenlist  (list)->list->List
proposito : Ordena la lista de la mejor a la peor
function descenlis (list){
  cuerpo de la funcion
}
descenlist(musica)->[
  {nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',
    artista: 'Nightwish',duracion: 250,estrellas: 5}, {nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},
  {nombre: 'Sagan', album: 'Fly',artista: 'Nightwish',duracion: 350,estrellas: 5},{nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,
    estrellas: 4}, {nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,estrellas: 4},{nombre: 'Eastside',album: 'Eastside',
    artista: 'Halsey',duracion: 180,estrellas: 4},{nombre: 'Come out and play',album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},
  { nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',duracion: 220, estrellas: 2},{ nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,
    estrellas: 1 }
]
*/
function descenlist(list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return cons(nombre(list), descenlist(borrarmayorlist(list)));
  }
}
/*console.log(descenlist(musica))*/

/*
8.  Eliminar la n-ésima canción

 borrarObj (list,number)->list,number->List
proposito : Borrar un elemento de la lista ,en este caso un objeto con sus atributos ,dependiendo de la posicion digitada
function borrarObj (list,n){
  cuerpo de la funcion
}
borrarObj(musica)->[
  {nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',
    artista: 'Nightwish',duracion: 250,estrellas: 5},{nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},
  {nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,estrellas: 4},{nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',
    duracion: 220,estrellas: 2},{nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,estrellas: 1},{nombre: 'Come out and play',
    album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},{nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,
    estrellas: 4},{nombre: 'Eastside',album: 'Eastside',artista: 'Halsey',duracion: 180, estrellas: 4}
]
*/

const borrarObj = function (list, n) {
  if (isEmpty(list)) {
    return [];
  } else if (n == 0) {
    return rest(list);
  } else {
    return cons(first(list), borrarObj(rest(list), n - 1));
  }
}

/*console.log(borrarObj(musica,9));*/

module.exports = { longitud, mayor, suma, promedio, concatenar, ultimo, elPrincipio, invertir, menor, borrarmenor, ascendente, fibo, listafibo, invertirfibo, solonum, agregarx, liascendente, lidescendiente, indice, agregarordenar, descen, borrarmayor, buscarx, borrarn, mayores, pares, condicion, mapeo,
busquedaCancion,busquedaArtista, sumaDuracion,convertirHoras,convertirMinutos,convertirSegundos,unirFormato,Menos2Estrellas,Estrellas5,TituloDuracion,mayorObj,nombre,borrarmayorlist,descenlist,borrarObj,musica}