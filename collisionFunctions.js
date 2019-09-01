/* CollisionSnake : object, list, world -> world.
Proposito: Diseñar una funcion que reciba un objeto, una lista y un mundo para determinar si
el objeto "primero" ha chocado con alguna otra parte de él mismo.
Cuerpo: */
  const collisionSnake = function(primero,list,world){
      if(isEmpty(list)){
        return make(world,{});
      }else{
      if(length(list)==1){
       return make(world,{});
      }else{
        if((primero.x == first(rest(list)).x) && (primero.y == first(rest(list)).y)){
          return alerta(world);
      }else{
        return collisionSnake(primero,rest(list),world);
      }
    }
  }
  }
  /*
Collision2 : world -> world;
Proposito: Diseñar una funcion que reciba mundo y permita determinar las collisiones del objeto "snake"
con los limites internos del mismo. 
/** Para definir funciones de movimiento es necesario primero definir el mundo a trabajar:
 *     processing.draw = function () {
      /**
       *Dibuja el fondo.
      processing.drawGame = function (world) {
      processing.background(10, 200, 50);
      processing.fill(240, 240, 240);
      processing.rect(200, 200, 200, 200);
    }
        };
Ejemplos: 
collision2(world) -> world.
Cuerpo:
*/
function collision2(world){
  if(((first(world.snake).x)>=10 &&  (first(world.snake).y)>=10 && (first(world.snake).y)<=580)){
    if( (isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true)){
      return make(world,{});
    }else{
      return alerta(world);
    }
  }else{
      return make(world, {loser: true});
  }
}
/** Pruebas
 * console.log(collision2(world));
 */

 /** Alerta : world -> world
  * Proposito: Crear una funcion alerta que permita imprimir una alerta en pantalla cuando
  * el jugador cumpla una de las condiciones de perdida, poniendo el juego en pausa hasta que 
  * seleccione una opción.
  * Cuerpo:
  */

 function alerta (world){
   let opcion = confirm("Has muerto.");
   if (opcion == true){
     return make(world, {loser:true});
   }else{
     return make(world, {loser:true});
   }
 }
  
