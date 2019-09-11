/**
 * Función que retorna la lista dada sin su último elemento.
 * @param {list} list 
 * @returns {list}
 * @example principio ([4,2,7,3]) // => [4,2,7]
 * @example principio ([4,0,4,2]) // => [4,2,7]
 */
const principio = function (list) {
  if (isEmpty(list)) {
    return [];
  }
  if (longitud(list) == 1) {
    return [];
  } else {
    return cons(first(list), principio(rest(list)));
  }
}

/**
 * Determinar una funcion que nos arroje un booleano
 * para establecer si un determinado objeto rect, se encuentra 
 * dentro de un determinado objeto p.
 * @param {object} rect 
 * @param {object} p 
 * @returns {boolean}
 */
function isInside(rect, p) {
  return p.x >= rect.p0.x && p.x <= rect.p1.x &&
    p.y >= rect.p0.y && p.y <= rect.p1.y;
}

/**
 * Elaborar una funcion anonima que dada una lista,
  retorne el ultimo elemento de la misma.
 * @param {list} list 
 * @returns {number}
 * @example last ([3,4,5,6,2,1]) // => 1
 * @example last ([1,2,3,4,5,6,7]) // => 7
 */
const last = function (list) {
  if (isEmpty(list)) {
    return [];
  } else if (longitud(list) == 1) {
    return first(list);
  } else {
    return last(rest(list));
  }
}

/**
 * Diseñar una funcion que reciba una lista y devuelva el valor de la longitud de la
  lista contando cada uno de sus elementos.
 * @param {list} list 
 * @returns {number}
 * @example longitud (["a",4,7,"a"]) // => 4
 * @example longitud (["p",7,2]) // => 3
 * @example longitud ([]) // => 0
 */
const longitud = function (list) {
  if (isEmpty(list)) {
    return 0;
  } else {
    return 1 + longitud(rest(list));
  }
}
/**
 * Diseñar una funcion que reciba dos objetos de atributos "x", "y" y devuelva el valor
 * de la distancia euclidiana entre ambos.
 * @param {object} a 
 * @param {object} b
 * @returns {number} 
 * @example l2 (obj2,obj1) // => 14,14...
 * let obj1 = {x: 20, y: 20}
 * let obj2 = {x: 10 , y: 10}
 */
function l2(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/**
 * Diseñar una funcion que reciba la informacion de dos parametros y la asigne a un nuevo objeto
 * mediante el metodo "Object.assign".
 * @param {object} data 
 * @param {object} attribute 
 * @returns {object}
 * @example make (any1, any2) // => {x: 20, y:10, z: 10}
 * let any1 = {x: 20, y: 10}
 * let any2 = {y: 10 , z: 10}
 */
function make(data, attribute) {
  return Object.assign({}, data, attribute);
}

/**
 * Diseñar una funcion que permita concatenar dos listas en una nueva lista 
 * con los elementos de las anteriores.
 * @param {list} x 
 * @param {list} y 
 * @example append([4,2],[1,0]) // => [4,2,1,0]
 * @example append([0,7,8,5],[1,10,4]) // => [0,7,8,5,1,10,4]
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

