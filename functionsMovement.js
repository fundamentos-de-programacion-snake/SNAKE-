/**
 * Diseñar una funcion que permita a la serpiente empezar a moverse
 * hacia la derecha en un espacio bidimensional.
 * @param {list} world 
 * @returns {number}
 * @example moveRight (snake) -> snake.x = 20.
 */
const moveRight = function (world) {
  return world.x + 10
}

/**
 * Diseñar una funcion que permita a la serpiente empezar a moverse
 * hacia arriba en un espacio bidimensional.
 * @param {list} world 
 * @returns {number}
 * @example moveUp (snake) -> snake.y = 0.
 */
const moveUp = function (world) {
  return world.y - 10;
}

/**
 * Diseñar una funcion que permita a la serpiente empezar a moverse
 * hacia abajo en un espacio bidimensional.
 * @param {list} world 
 * @returns {number}
 * @example moveDown (snake) -> snake.y = 20.
 */
const moveDown = function (world) {
  return world.y + 10
}

/**
 * Proposito: Diseñar una funcion que permita a la serpiente empezar a moverse
 * hacia la izquierda en un espacio bidimensional.
 * @param {list} world 
 * @returns {number}
 * @example moveLeft (snake) -> snake.x = 0
 */
const moveLeft = function (world) {
  return world.x - 10;
}

/**
 * Diseñar una funcion que reciba una lista y una funcion ,que permita aplicar la misma
 * al atributo "x" de los elementos de la lista. 
 * @param {lista} list 
 * @param {funcion} fx 
 * @returns {list}
 */
const mapObjX = function (list, fx) {
  return cons({ x: fx(first(list)), y: first(list).y }, principio(list));
}

/**
 * Diseñar una funcion que reciba una lista y una funcion ,que permita aplicar la misma
 * al atributo "y" de los elementos de la lista. 
 * @param {lista} list 
 * @param {funcion} fx 
 * @returns {list}
 */
const mapObjY = function (list, fx) {
  return cons({ x: first(list).x, y: fx(first(list)) }, principio(list));
}

/**
 * Diseñar una funcion que reciba una lista y una funcion ,que permita aplicar la misma
 * a cada uno de los elementos de la lista. 
 * @param {lista} list 
 * @param {funcion} fx 
 * @returns {list}
 */
const mapObj = function (list, fx) {
  if (isEmpty(list)) {
    return [];
  } else {
    return cons(fx(first(list)), mapObj(rest(list), fx));
  }
}

/**
 * Hacer que el snake salga por la parte derecha del canvas y se mueva hacia la izquierda
 * @param {world} world 
 * @returns {world}
 */

const movementOutScreenUp = function (world) {
  return make(world, { snake: cons({ x: 980, y: 280 }, principio(world.snake)), ultimaTecla: "izquierda" })
}

/** 
* Hacer que el snake salga por la parte superios del canvas y se mueva hacia abajo
* @param {world} world 
* @returns {world}
*/
const movementOutScreenRight = function (world) {
  return make(world, { snake: cons({ x: 420, y: 10 }, principio(world.snake)), ultimaTecla: "abajo" })
}


/**
 * Elaborar una funcion de reciba un mundo y evalue si snake se movio hacia el borde del mapa
 * por la derecha, para aplicar el metodo "movementOutScreenRight.
 * @param {world} world 
 * @returns {world}
 */
const outOfScreenRight = function (world) {
  if (first(world.snake).x >= 980 && world.ultimaTecla == "derecha") {
    return movementOutScreenRight(world);
  } else {
    return make(world, {});
  }
}


/**
 * Elaborar una funcion de reciba un mundo y evalue si snake se movio hacia el borde del mapa
 * por arriba, para aplicar el metodo "movementOutScreenRight".
 * @param {world} world 
 * @returns {world}
 */
const OutOfScreenUp = function (world) {
  if (first(world.snake).y < 10 && first(world.snake).x >= 400 && first(world.snake).x <= 445 && world.ultimaTecla == "arriba") {
    return movementOutScreenUp(world);
  } else {
    return make(world, {});
  }
}

/**
 * Función que decide en qué dirección se mueve la serpiente dependiendo de la
  * última tecla.
 * @param {world} world 
 * @returns {world}
 */
const mover = function (world) {
  if (world.ultimaTecla === "derecha") {
    return make(world, { snake: mapObjX(world.snake, moveRight) });
  }
  if (world.ultimaTecla === "arriba") {
    return make(world, { snake: mapObjY(world.snake, moveUp) });
  }
  if (world.ultimaTecla === "abajo") {
    return make(world, { snake: mapObjY(world.snake, moveDown) });
  }
  if (world.ultimaTecla === "izquierda") {
    return make(world, { snake: mapObjX(world.snake, moveLeft) });
  }
  return make(world, {});
}

/**
 * Mover de maneja constante hacia la izquierda los obstaculos "bala"
 * @param {world} world 
 * @returns {world}
 */
const mover2 = function (world) {
  return make(world, { bala: mapObjX(world.bala, moveLeft), bala1: mapObjX(world.bala1, moveLeft), bala2: mapObjX(world.bala2, moveLeft) });
}
