/**
 * Cuando el obstaculo "bala" esta saliendo de las dimensiones del canvas el contador i se le empezara a sumar 1
 * @param {world} world 
 * @returns {world} 
 * @example contador2(world) -> world
 */

const contador2 = function (world) {
  if (first(world.bala).x < 10) {
    return make(world, { i: world.i + 1 })
  } return make(world, {})
}

/**
 * Cuando el contador i sea mayor que 100 volvera aparecer el obstaculo "bala" en una posicion y random
 * @param {world} world  
 * @returns {world} 
 * @example aparecer(world) -> world
 */
const aparecer = function (world) {
  if (world.i > 100) {
    return make(world, { bala: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }], bala1: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }], bala2: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }], i: 0 })
  } return make(world, {})
}

/**
 * Para que el obstaculo "bala" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * @param {world} world  
 * @returns {world} 
 * @example condicion(world) -> world
 */
const condicion = function (world) {
  if (first(world.bala).y <= 10 || first(world.bala).y >= 590) {
    return make(world, { bala: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }] })
  } return make(world, {})
}

/**
 * Para que el obstaculo "bala2" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * @param {world} world  
 * @returns {world} 
 * @example condicion2(world) -> world
 */
const condicion2 = function (world) {
  if (first(world.bala1).y <= 10 || first(world.bala1).y >= 590) {
    return make(world, { bala1: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }] })
  } return make(world, {})
}

/**
 * Para que el obstaculo "bala3" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * @param {world} world  
 * @returns {world} 
 * @example condicion3(world) -> world
 */
const condicion3 = function (world) {
  if (first(world.bala2).y <= 10 || first(world.bala2).y >= 590) {
    return make(world, { bala2: [{ x: 990, y: (Math.round(Math.random() * 10) / 10) * 500 }] })
  } return make(world, {})
}
