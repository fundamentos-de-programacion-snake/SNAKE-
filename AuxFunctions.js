/* 
principio : list -> list
proposito: Elaborar una funcion anonima que dada una lista,
retorne el principio de la misma construyendo una nueva lista con el resto.
Ejemplos:
*console.log(Principio ([1,2,3,4,5,6,7])) -> [1,2,3,4,5,6,7].
*console.log(Principio ([3,4,5,6,2,1])) -> [3,4,5,6,2,1].
Cuerpo:
*/const principio = function (list) {
  if (isEmpty(list)) {
    return [];
}
if (longitud(list) == 1) {
    return [];
} else {
    return cons(first(list), principio(rest(list)));
}
}
 /* Funcion isInside: objeto, objeto -> booleano;
 Proposito: Determinar una funcion que nos arroje un booleano
 para establecer si un determinado objeto rect, se encuentra 
 dentro de un determinado objeto p.
 function isInside(rect,p){...};
 Pruebas:
 * isInside(processing.rect(50,50,10,10), processing.rect(0,0,100,100) ) -> #true
 * isInside(processing.rect(40,40,5,5), processing.rect(0,0,120,120)) -> #true
 Cuerpo:*/
 function isInside(rect, p) {
  return p.x >= rect.p0.x && p.x <= rect.p1.x &&
    p.y >= rect.p0.y && p.y <= rect.p1.y; }
 /*
 console.log (isInside(processing.rect(50,50,10,10), processing.rect(0,0,100,100)));
 console.log (isInside(processing.rect(40,40,5,5), processing.rect(0,0,120,120)))
 */
/* 
last : list -> number;
proposito: Elaborar una funcion anonima que dada una lista,
retorne el ultimo elemento de la misma.
Ejemplos:
*console.log(last ([1,2,3,4,5,6,7])) -> 7.
*console.log(last ([3,4,5,6,2,1])) -> 1.
Cuerpo:
*/
const last = function(list){
  if(isEmpty(list)){
    return [];
  }else if(longitud(list)==1){
    return first(list);
  }else{
    return last(rest(list));
  }
}

/**Pruebas
 console.log(last ([1,2,3,4,5,6,7]));
  console.log(last ([3,4,5,6,2,1]));
*/


  /*
longitud: list -> number;
Proposito: Diseñar una funcion que reciba una lista y devuelva el valor de la longitud de la
lista contando cada uno de sus elementos.. 
Ejemplos: 
longitud([1,2,3,4,5,6,7]) -> 7.
longitud([2,"a",4, 2, "b"]) ->5.
longitud ([7,2,3,4,5,1]) -> 6.
Cuerpo:
*/
const longitud = function (list) {
  if (isEmpty(list)) {
      return 0;
  } else {
      return 1 + longitud(rest(list));
  }
}
/** Pruebas
   longitud([1,2,3,4,5,6,7]);
   longitud([2,"a",4, 2, "b"]);
   longitud ([7,2,3,4,5,1]);
 */

/*
l2: object, object -> number;
Proposito: Diseñar una funcion que reciba dos objetos de atributos "x", "y" y devuelva el valor
de la distancia euclidiana entre ambos. 
Ejemplos: 
/** 
 * let obj1 = {x: 20, y: 20}
 * let obj2 = {x: 10 , y: 10}

console.log(l2 (obj2, obj1)); -> 14,14.
Cuerpo:
*/
function l2(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
/** Pruebas
 * console.log(l2 (obj2, obj1));
 */

   /*
make: any, any -> object;
Proposito: Diseñar una funcion que reciba la informacion de dos parametros y la asigne a un nuevo objeto
mediante el metodo "Object.assign".
Ejemplos: 
/** 
 * let any1 = {x: 20, y: 10}
 * let any2 = {y: 10 , z: 10}
   console.log(make (any1, any2)); -> {x: 20, y:10, z: 10}
Cuerpo:
*/
function make(data, attribute) {
  return Object.assign({}, data, attribute);
}

/*
append: list, list-> list;
Proposito: Diseñar una funcion que permita concatenar dos listas en una nueva lista
con los elementos de las anteriores.
/** 
 * let dblo = append ([1,2], [3,4]);
 * console.log (dblo); -> [1,2,3,4]
 * 
Cuerpo:
*/
function append(x, y) {
  if (isEmpty(x)) {
    return y
  }
  if (length(x) == 1) {
    return cons(first(x), y)
  } else {
    return cons(first(x), append(rest(x), y))
  }
}

