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
      return alerta(world);
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
   let opcion = confirm("You have lost.");
   if (opcion == true){
     return make(world, {loser:true});
   }else{
     return make(world, {loser:true});
   }
 }

  /** colisionbala : object , world -> world
 * Proposito : Si la cabeza de la serpiente esta dentro del obstaculo "bala" perdera,de lo contario retornara el mundo
 * Ejemplo : colisionbala(first(world.snake),world)-> world 
 * Cuerpo:
 */

function colisionbala(primero,world){
  if((isInside({p0:{x:first(world.bala).x+10,y:first(world.bala).y},p1:{x:first(world.bala).x+70,y:first(world.bala).y}},{x:primero.x,y:primero.y})===true) ||( isInside({p0:{x:first(world.bala1).x+10,y:first(world.bala1).y},p1:{x:first(world.bala1).x+70,y:first(world.bala1).y}},{x:primero.x,y:primero.y})===true) || (isInside({p0:{x:first(world.bala2).x+10,y:first(world.bala2).y},p1:{x:first(world.bala2).x+70,y:first(world.bala2).y}},{x:primero.x,y:primero.y})===true) ){
    return alerta(world)
  
  }
  return make(world,{})
}
