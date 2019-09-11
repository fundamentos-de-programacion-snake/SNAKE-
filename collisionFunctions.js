/**
 * Diseñar una funcion que reciba un objeto, una lista y un mundo para determinar siel objeto "primero" ha 
 * chocado con alguna otra parte de él mismo.
 * @param {object} primero 
 * @param {list} list 
 * @param {world} world 
 * @returns {world} 
 */
const collisionSnake = function (primero, list, world) {
  if (isEmpty(list)) {
    return make(world, {});
  } else {
    if (length(list) == 1) {
      return make(world, {});
    } else {
      if ((primero.x == first(rest(list)).x) && (primero.y == first(rest(list)).y)) {
        return make(world, { loser: true })
      } else {
        return collisionSnake(primero, rest(list), world);
      }
    }
  }
}

/**
 * Diseñar una funcion que reciba mundo y permita determinar las collisiones del objeto "snake" con los limites 
 * internos del mismo. 
 * @param {world} world 
 * @returns {world}
 */
function collision2(world) {
  if (((first(world.snake).x) >= 10 && (first(world.snake).y) >= 10 && (first(world.snake).y) <= 580)) {
    if ((isInside({ p0: { x: 180, y: 130 }, p1: { x: 200, y: 450 } }, { x: first(world.snake).x, y: first(world.snake).y }) != true) && (isInside({ p0: { x: 460, y: 130 }, p1: { x: 480, y: 450 } }, { x: first(world.snake).x, y: first(world.snake).y }) != true) && (isInside({ p0: { x: 740, y: 130 }, p1: { x: 760, y: 450 } }, { x: first(world.snake).x, y: first(world.snake).y }) != true)) {
      return make(world, {});
    } else {
      return make(world, { loser: true })
    }
  } else {
    return make(world, { loser: true })
  }
}

/**
 * Si la cabeza de la serpiente esta dentro de algun obstaculo "bala" perdera,de lo contario retornara el mundo
 * @param {object } primero 
 * @param {world} world 
 * @returns {world}
 */
function colisionbala(primero, world) {
  if ((isInside({ p0: { x: first(world.bala).x + 10, y: first(world.bala).y }, p1: { x: first(world.bala).x + 70, y: first(world.bala).y } }, { x: primero.x, y: primero.y }) === true) || (isInside({ p0: { x: first(world.bala1).x + 10, y: first(world.bala1).y }, p1: { x: first(world.bala1).x + 70, y: first(world.bala1).y } }, { x: primero.x, y: primero.y }) === true) || (isInside({ p0: { x: first(world.bala2).x + 10, y: first(world.bala2).y }, p1: { x: first(world.bala2).x + 70, y: first(world.bala2).y } }, { x: primero.x, y: primero.y }) === true)) {
    return make(world, { loser: true })

  }
  return make(world, {})
}
