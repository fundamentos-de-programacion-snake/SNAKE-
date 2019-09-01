/* Funciones de movimiento
/** Para definir funciones de movimiento es necesario primero definir el mundo a trabajar:
 *     processing.draw = function () {
      /**
       *Dibuja la serpiente.
      function drawSnake(snake) {
        snake.forEach(part => {
          processing.fill(240, 240, 240);
          processing.rect(10,10, 10,10);
        });
      }
MoveRight : world -> world;
Proposito: Diseñar una funcion que permita a la serpiente empezar a moverse
hacia la derecha en un espacio bidimensional.
Ejemplos: 
moveRight (snake) -> snake.x = 20.
Cuerpo:
*/
const moveRight = function(world){
  return world.x + 10
}
/** Pruebas
* console.log (snake.x);
*/

/*
MoveUp : world -> world;
Proposito: Diseñar una funcion que permita a la serpiente empezar a moverse
hacia arriba en un espacio bidimensional.
Ejemplos: 
moveUp (snake) -> snake.y = 20.
Cuerpo:
*/
const moveUp = function(world){
  return world.y - 10;
}
/** Pruebas
 * console.log (snake.y);
 */
/*
MoveDown : world -> world;
Proposito: Diseñar una funcion que permita a la serpiente empezar a moverse
hacia abajo en un espacio bidimensional.
Ejemplos: 
moveDown (snake) -> snake.y = 0.
Cuerpo:
*/
const moveDown = function(world){
  return  world.y + 10
}
/** Pruebas
 * console.log (snake.y);
 */
 /*
MoveLeft : world -> world;
Proposito: Diseñar una funcion que permita a la serpiente empezar a moverse
hacia la izquierda en un espacio bidimensional.
Ejemplos: 
moveLeft (snake) -> snake.x = 0.
Cuerpo:
*/
const moveLeft = function(world){
  return world.x - 10;
}
/** Pruebas
 * console.log (snake.x);
 */

 /*
MapObjX : list, function -> list;
Proposito: Diseñar una funcion que reciba una lista y una funcion y permita aplicar la misma
al atributo "x" de los elementos de la lista. 
Ejemplos: 
mapObjX (snake, principio) -> snake.x = 10.
Cuerpo:
*/
const mapObjX = function(list,fx){
  return cons({x: fx(first(list)), y:first(list).y},principio(list));
}
/** Pruebas
 * console.log (snake.x);
 */
/*
MapObjY : list, function -> list;
Proposito: Diseñar una funcion que reciba una lista y una funcion y permita aplicar la misma
al atributo "y" de los elementos de la lista. 
Ejemplos: 
mapObjX (snake, principio) -> snake.y = 10.
Cuerpo:
*/
const mapObjY = function(list,fx){
  return cons({x: first(list).x, y: fx(first(list))},principio(list));
}
/** Pruebas
 * console.log (snake.y);
 */

 /*
MapObj : list, function -> list;
Proposito: Diseñar una funcion que reciba una lista y una funcion y permita aplicar la misma
a cada uno de los elementos de la lista. 
Ejemplos: 
mapObjX (snake, principio) -> snake.y = 10.
mapObjY (snake, principio) -> snake.x = 10.
Cuerpo:
*/
const mapObj = function(list,fx){
  if(isEmpty(list)){
    return [];
  }else{
    return cons(fx(first(list)),mapObj(rest(list),fx));
  }
}
/** Pruebas
 * console.log (snake.y);
 * console.log (snake.x)
 */


 /** movementOutScreenUp : world -> world.
  * Proposito: Elaborar una funcion que reciba un mundo y permita determinar cuando snake se mueve hacia afuera
  * de la pantalla por la parte superior.
  * Cuerpo:
  */
 const movementOutScreenUp = function(world){
  return make(world, {snake: cons({x: 980 , y: 280 },principio(world.snake)),ultimaTecla: "izquierda"})
}

 /** movementOutScreenRight : world -> world.
  * Proposito: Elaborar una funcion que reciba un mundo y permita determinar cuando snake se mueve hacia afuera
  * de la pantalla por la parte superior.
  * Cuerpo:
  */
const movementOutScreenRight = function(world){
  return make(world, {snake: cons({x: 420, y: 10},principio(world.snake)), ultimaTecla: "abajo"})
}

/** OutOfScreenRight : world -> world
 * Proposito: Elaborar una funcion de reciba un mundo y evalue si snake se movio hacia el borde del mapa
 * por la derecha, para aplicar el metodo "movementOutScreenRight". En caso contrario, devuelve el mundo
 * sin alteraciones.
 * Cuerpo:
 */
 const outOfScreenRight = function(world){
    if(first(world.snake).x >= 980 && world.ultimaTecla == "derecha"){
      return movementOutScreenRight(world);
    }else{
      return make(world,{});
    }
  }
  /** OutOfScreenUp : world -> world
 * Proposito: Elaborar una funcion de reciba un mundo y evalue si snake se movio hacia el borde del mapa
 * por arriba, para aplicar el metodo "movementOutScreenRight". En caso contrario, devuelve el mundo
 * sin alteraciones.
 * Cuerpo:
 */
  const OutOfScreenUp = function(world){
    if(first(world.snake).y<10 && first(world.snake).x>=400 && first(world.snake).x <=445 ){
      return movementOutScreenUp(world);
    }else{
      return make(world,{});  
    }
  }
