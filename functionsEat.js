
/**
 * posFoodX: () -> number.
 * Proposito: Crear una funcion posFoodX que permita establecer un numero aleatorio,
 * para posteriormente usarlo en la generacion de la coordenada X de la comida.
 * Cuerpo:
 */
const posFoodX = function () {
  return (Math.round(Math.random() * 10) / 10) * 800
}
/**
 * posFoodY: () -> number.
 * Proposito: Crear una funcion posFoodX que permita establecer un numero aleatorio,
 * para posteriormente usarlo en la generacion de la coordenada Y de la comida.
 * Cuerpo:
 */
const posFoodY = function () {
  return (Math.round(Math.random() * 10) / 10) * 500
}
/*
addLeft: world -> world;
Proposito: Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por la derecha.
Cuerpo:
*/
const addLeft = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x + 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255
  });
}
/*
addRight: world -> world;
Proposito:Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por la derecha.
Cuerpo:
*/
const addRight = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x - 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255
  });
}
/*
addDown: world -> world;
Proposito: Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por abajo.
Cuerpo:
*/
const addDown = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y - 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255
  });
}
/*
addUp: world -> world;
Proposito: Función que agrega un cuadro con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por arriba.
Cuerpo:
*/
const addUp = function (world) {
  return make(world, {
    score: world.score + 10, foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y + 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255
  });
}
/*
takeAdd: world -> world;
Proposito: Diseñar una funcion que permita "tomar" el objeto de la comida, dependiendo del lado
desde donde viene la serpiente. La funcion recibe un mundo y borra el objeto comida para hacerlo reaparecer 
en otro lugar mediante las funciones "add". Recibe un mundo y devuelve el mundo con la comida en el mismo lugar si no se detecta
una colision con ella.
Cuerpo:
*/
const takeAdd = function (world) {
  if (l2({ x: world.foodx, y: world.foody }, { x: first(world.snake).x, y: first(world.snake).y }) == 0) {
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
  } else {
    return make(world, {});
  }
  /*
Comer: world -> world;
Proposito: Diseñar una funcion que permita a snake "comer". La funcion compara si la distancia entre snake
y la comida es menor a 0 unidades. Si la condicion se cumple, la comida se borra y aparece en otro lugar
dentro del tablero de juego mediante la funcion takeAdd.
*/
}
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
/*
Comer2: world -> world;
Proposito: Diseñar una funcion que permita a snake "comer". La funcion compara si la distancia entre snake
y la comida bonus es 0 unidades. Si la condicion se cumple, la comida bonus se borra y aparece en otro lugar
dentro del tablero de juego mediante la funcion takeAdd.
*/
const comer2 = function (world) {
  if ((isInside({ p0: { x: 180, y: 130 }, p1: { x: 200, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 460, y: 130 }, p1: { x: 480, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 740, y: 130 }, p1: { x: 760, y: 450 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 10, y: 600 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 0 }, p1: { x: 400, y: 10 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 450, y: 0 }, p1: { x: 990, y: 10 } }, { x: world.food2x, y: world.food2y }) == true) || (isInside({ p0: { x: 0, y: 590 }, p1: { x: 990, y: 10 } }, { x: world.food2x, y: world.food2y }) == true)) {
    return make(world, { food2x: posFoodX(), food2y: posFoodY()})
  } else {
    if (l2({ x: world.food2x, y: world.food2y }, { x: first(world.snake).x, y: first(world.snake).y }) == 0) {
      return takeAdd2(world);
    } else {
      return make(world, {});
    }
  }
}
/*
takeAdd: world -> world;
Proposito: Diseñar una funcion que permita "tomar" el objeto de la comida bonus, dependiendo del lado
desde donde viene la serpiente. La funcion recibe un mundo y borra el objeto comida para hacerlo reaparecer 
en otro lugar mediante las funciones "add". Recibe un mundo y devuelve el mundo con la comida en el mismo lugar si no se detecta
una colision con ella.
Cuerpo:
*/
const takeAdd2 = function (world) {
  if (l2({ x: world.food2x, y: world.food2y }, { x: first(world.snake).x, y: first(world.snake).y }) == 0) {
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
  } else {
    return make(world, {});
  }
}
/*
addLeft: world -> world;
Proposito: Función que agrega DOS cuadros con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por la izquierda.
Cuerpo:
*/
const addLeft2 = function (world) {
  console.log("get: "+world.scoreNewFood)
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(),foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x + 10, y: last(world.snake).y }]),[{ x: last(world.snake).x + 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255, scoreNewFood:1 
  });
}
/*
addRight2: world -> world;
Proposito: Función que agrega DOS cuadros con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por la derecha.
Cuerpo:
*/
const addRight2 = function (world) {
  console.log("get: "+world.scoreNewFood)
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(),foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x - 10, y: last(world.snake).y }]),[{ x: last(world.snake).x - 10, y: last(world.snake).y }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255,scoreNewFood:1
  });
}
/*
addDown2: world -> world;
Proposito: Función que agrega DOS cuadros con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por abajo.
Cuerpo:
*/
const addDown2 = function (world) {
  console.log("get: "+world.scoreNewFood)
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(),foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y - 10}]),[{ x: last(world.snake).x, y: last(world.snake).y - 10}])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255,scoreNewFood:1
  });
}
/*
addUp2: world -> world;
Proposito: Función que agrega DOS cuadros con posiciones x y y en el último índice de la serpiente
cuando ésta alcanza la comida yendo por arriba.
Cuerpo:
*/
const addUp2 = function (world) {
  console.log("get: "+world.scoreNewFood)
  return make(world, {
    score: world.score + 20, food2x: posFoodX(), food2y: posFoodY(),foodx: posFoodX(), foody: posFoodY(),
    snake: append(append(world.snake, [{ x: last(world.snake).x, y: last(world.snake).y + 10 }]), [{ x: last(world.snake).x, y: last(world.snake).y + 10 }])
    , num: Math.random() * 255, num1: Math.random() * 255, num2: Math.random() * 255,scoreNewFood:1
  });
}
  const contador = function (world){
    if(world.o>60){
      return make(world,{food2x:(Math.round(Math.random() * 10) / 10) * 800 , food2y:(Math.round(Math.random() * 10) / 10) * 500,o:0})
    }else{
      return make(world,{o:world.o+1})
    }
  }
