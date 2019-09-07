/**
 * contador : world -> world
 * Proposito : Cuando el obstaculo "bala" esta saliendo de las dimensiones del canvas el contador i se le empezara a sumar 1
 * Ejemplo contador2(world) -> world
 */

const contador2 = function(world){
    if(first(world.bala).x<10){
        return make(world,{i:world.i+1})
    }return make(world,{})
   }
/**
 * aparecer : world -> world
 * Proposito : Cuando el contador i sea mayor que 100 volvera aparecer el obstaculo "bala" en una posicion y random
 * y el contador volvera a ser 0,del caso contario se retornara el mundo sin alteracion
 * Ejemplo aparecer(world) -> world
 * 
 */
   const aparecer = function(world){
     if(world.i>100){
       return make(world,{bala : [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}],bala1 : [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}],bala2 : [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}],i:0 })
     }return make(world,{})
   }
/**
 * condicion : world -> world
 * Proposito : Para que el obstaculo "bala" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * en esa posicion se le volvera hacer el Math.random en y,del caso contario se retornara el mundo sin alteracion
 * Ejemplo condicion(world) -> world
 *
 */
   const condicion = function(world){
     if(first(world.bala).y<=10 || first(world.bala).y>=590 ){
       return make(world,{bala:[{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}]})
     }return make(world,{})
   }
/**
 * condicion2 : world -> world
 * Proposito : Para que el obstaculo "bala2" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * en esa posicion se le volvera hacer el Math.random en y,del caso contario se retornara el mundo sin alteracion
 * Ejemplo condici2n(world) -> world
 *
 */
   const condicion2 = function(world){
    if(first(world.bala1).y<=10 || first(world.bala1).y>=590  ){
      return make(world,{bala1:[{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}]})
    }return make(world,{})
  }
  /**
 * condicion3 : world -> world
 * Proposito : Para que el obstaculo "bala3" no aparezca por los bordes se pone la condicion en la cual si se encuentra 
 * en esa posicion se le volvera hacer el Math.random en y,del caso contario se retornara el mundo sin alteracion
 * Ejemplo condicion3(world) -> world
 *
 */
  const condicion3 = function(world){
    if( first(world.bala2).y<=10 || first(world.bala2).y>=590){
      return make(world,{bala2:[{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}]})
    }return make(world,{})
  }