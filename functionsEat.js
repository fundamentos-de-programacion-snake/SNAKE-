
/**
 * Crear una funcion posFoodX que permita establecer un numero aleatorio,
 * para posteriormente usarlo en la generacion de la coordenada X de la comida.
 * @param {}
 * @returns {number}
 */
const posFoodX = function () {
  return (Math.round(Math.random() * 10) / 10) * 800
}

/**
 * rear una funcion posFoodX que permita establecer un numero aleatorio,
 * para posteriormente usarlo en la generacion de la coordenada Y de la comida.
 * @param {}
 * @returns {number}
 */
const posFoodY = function () {
  return (Math.round(Math.random() * 10) / 10) * 500
}

/**
 * Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por la izquierda y aunmenta el score en +10
 * @param {world } world 
 * @returns {world}
 */
const addLeft = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x + 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, score3: world.score3 + 10
  });
}

/**
 * Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por la derecha y aunmenta el score en +10
 * @param {world } world 
 * @returns {world}
 */
const addRight = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x - 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, score3: world.score3 + 10
  });
}

/**
 * Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por abajo y aunmenta el score en +10
 * @param {world } world 
 * @returns {world}
 */
const addDown = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y - 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, score3: world.score3 + 10
  });
}

/**
 * Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por arriba y aunmenta el score en +10
 * @param {world } world 
 * @returns {world}
 */
const addUp = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y + 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, score3: world.score3 + 10
  });
}

/**
 * Diseñar una funcion que permita "tomar" el objeto de la comida, dependiendo del lado
 * desde donde viene la serpiente. La funcion recibe un mundo y borra el objeto comida para hacerlo reaparecer 
 * en otro lugar mediante las funciones "add". Recibe un mundo y devuelve el mundo con la comida en el mismo lugar si no se detecta
 * una colision con ella.
 * @param {world} world 
 * @returns {world}
 */
const takeAdd = function (world) {
  if (world.ultimaTecla === "izquierda") {
    return addLeft(world);
  } else if (world.ultimaTecla == "derecha") {
    return addRight(world);
  } else if (world.ultimaTecla == "abajo") {
    return addDown(world);
  } else if (world.ultimaTecla == "arriba") {
    return addUp(world);
  } else {
    return make(world, {});
  }
}

/**
 * Diseñar una funcion que permita a snake "comer" con la comida normal,comparando si la distancia entre el snake y la comida es 0
 * @param {world} world 
 * @returns {world}
 */
const comer = function (world) {
  if ((isInside({ p0: { x: 180, y: 130 }, p1: { x: 200, y: 450 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 460, y: 130 }, p1: { x: 480, y: 450 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 740, y: 130 }, p1: { x: 760, y: 450 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 10, y: 600 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 400, y: 10 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 450, y: 0 }, p1: { x: 990, y: 10 } }, { x: world.foodx, y: world.foody }) == true) || (isInside({ p0: { x: 0, y: 590 }, p1: { x: 990, y: 10 } }, { x: world.foodx, y: world.foody }) == true)) {
    return make(world, { foodx: posFoodX(), foody: posFoodY() })
  } else {
    if (l2({ x: world.foodx, y: world.foody }, { x: first(world.snake).x, y: first(world.snake).y }) == 0) {
      return takeAdd(world);
    } else {
      return make(world, {});
    }
  }
}

/**
 * Diseñar una funcion que permita a snake "comer" con la comida bonus,comparando si la distancia entre el snake y la comida es 0
 * @param {world} world 
 * @returns {world}
 */
const comer2 = function (world) {
  if ((isInside({ p0: { x: 180, y: 130 }, p1: { x: 200, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 460, y: 130 }, p1: { x: 480, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 740, y: 130 }, p1: { x: 760, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 10, y: 600 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 400, y: 10 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 450, y: 0 }, p1: { x: 990, y: 10 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 590 }, p1: { x: 990, y: 10 } }, { x: world.food2x, y: world.food2y }) == true)) {
    return make(world, { food2x: posFoodX(), food2y: posFoodY() })
  } else {
    if (l2({ x: world.food2x, y: world.food2y }, { x: first(world.snake).x, y: first(world.snake).y }) == 0) {
      return takeAdd2(world);
    } else {
      return make(world, {});
    }
  }
}

/**
 * Diseñar una funcion que permita "tomar" el objeto de la comida bonus, dependiendo del lado
 * desde donde viene la serpiente. La funcion recibe un mundo y borra el objeto comida para hacerlo reaparecer 
 * en otro lugar mediante las funciones "add". Recibe un mundo y devuelve el mundo con la comida en el mismo lugar si no se detecta
 * una colision con ella.
 * @param {world} world 
 * @returns {world}
 */
const takeAdd2 = function (world) {
  if (world.ultimaTecla === "izquierda") {
    return addLeft2(world);
  } else if (world.ultimaTecla == "derecha") {
    return addRight2(world);
  } else if (world.ultimaTecla == "abajo") {
    return addDown2(world);
  } else if (world.ultimaTecla == "arriba") {
    return addUp2(world);
  } else {
    return make(world, {});
  }
}

/**
 * Función que agrega dos cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por la izquierda y aunmenta el score en +20
 * @param {world } world 
 * @returns {world}
 */
const addLeft2 = function (world) {
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(), foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x + 10, y: last(world.snake).y }]), [{ x: last(world.snake).x + 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, scoreNewFood: 1, score3: world.score3 + 20
  });
}

/**
 * Función que agrega dos cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por la derecha y aunmenta el score en +20
 * @param {world } world 
 * @returns {world}
 */
const addRight2 = function (world) {
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(), foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x - 10, y: last(world.snake).y }]), [{ x: last(world.snake).x - 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, scoreNewFood: 1, score3: world.score3 + 20
  });
}

/**
 * Función que agrega dos cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por abajo y aunmenta el score en +20
 * @param {world } world 
 * @returns {world}
 */
const addDown2 = function (world) {
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(), foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y - 10 }]), [{ x: last(world.snake).x, y: last(world.snake).y - 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, scoreNewFood: 1, score3: world.score3 + 20
  });
}

/**
 * Función que agrega dos cuadro con posiciones x y y en el último índice de la serpiente
 * cuando ésta alcanza la comida yendo por la arriba y aunmenta el score en +20
 * @param {world } world 
 * @returns {world}
 */
const addUp2 = function (world) {
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(), foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y + 10 }]), [{ x: last(world.snake).x, y: last(world.snake).y + 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, scoreNewFood: 1, score3: world.score3 + 20
  });
}

/**
 * Cuando el acumulador sea mayor a 60 la comida bonus aparecera en otra posicion y el acumulador volvera a inciciar
 * en cero ,si la condicion aun no es cierta ira aumentando en 1.
 * @param {world } world 
 * @returns {world}
 */
const contador = function (world) {
  if (world.o > 70) {
    return make(world, { food2x: (Math.round(Math.random() * 10) / 10) * 800, food2y: (Math.round(Math.random() * 10) / 10) * 500, o: 0 })
  } else {
    return make(world, { o: world.o + 1 })
  }
}
