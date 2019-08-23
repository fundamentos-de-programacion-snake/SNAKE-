 //Vamos a usar http://processingjs.org/

// Importamos las librerias
let { cons, first, isEmpty, isList, length, rest } = functionalLight;

/**
 * l2: Object{x,y}, Object{x,y} => Number
 * Calcula la distancia L2 entre 2 puntos {x,y} 
 */
/*
Funciones mover snake
*/
const anchoX=990;
const longitudY=600;
const cols = (anchoX-10)/10;
const rows = (longitudY-10)/10;
 
/**
 * isInside: Object{p0, p1}, Object{x,y} => boolean
 * Verifica si el punto p se encuentra dentro del rectangulo rect
 * Ejemplo: 
 * isInside({p0: {x: 1, y: 1}, p1: {x: 2, y: 3}}, {x: 0, y: 0}) => false
 * isInside({p0: {x: 1, y: 1}, p1: {x: 2, y: 3}}, {x: 2, y: 2}) => true
 */

function isInside(rect, p) {
  if( p.x >= rect.p0.x && p.x <= rect.p1.x &&
    p.y >= rect.p0.y && p.y <= rect.p1.y){
      return true;
  } else {
    return false;
  }

}
const posFoodX = function(){
  return (Math.round(Math.random() * cols)*10)
}
const posFoodY = function(){
  return (Math.round(Math.random() * rows)*10)
}
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
const last = function(list){
  if(isEmpty(list)){
    return [];
  }else if(longitud(list)==1){
    return first(list);
  }else{
    return last(rest(list));
  }
}
const moveRight = function(world){
   return world.x + 10
}
const moveUp = function(world){
   return world.y - 10

}
const moveDown = function(world){
  return  world.y + 10
}
const moveLeft = function(world){
  return world.x - 10;
}
const mapObjX = function(list,fx){
    return cons({x: fx(first(list)), y:first(list).y},principio(list));
}
const mapObjY = function(list,fx){
  return cons({x: first(list).x, y: fx(first(list))},principio(list));
}
const mapObj = function(list,fx){
  if(isEmpty(list)){
    return [];
  }else{
    return cons(fx(first(list)),mapObj(rest(list),fx));
  }
}


function collision2(world){
  if(((first(world.snake).x)>=10 &&  (first(world.snake).y)>=10 && (first(world.snake).y)<=580)){
    if( (isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true)){
      return make(world,{});
    }else{
      return alert("Perdiste")
    }
  }else{
    if(first(world.snake).y<10 && first(world.snake).x>=400 && first(world.snake).x <=445 ){
      return make(world,{});
    }else{
      return alert("Perdiste")
    }
  }
} 
const collisionSnake = function(primero,list,world){
    if(isEmpty(list)){
      return make(world,{});
    }else{
    if(length(list)==1){
     return make(world,{});
    }else{
      if((primero.x == first(rest(list)).x) && (primero.y == first(rest(list)).y)){
        return alert("Perdiste");
    }else{
      return collisionSnake(primero,rest(list),world);
    }
  }
}
}
const longitud = function (list) {
  if (isEmpty(list)) {
      return 0;
  } else {
      return 1 + longitud(rest(list));
  }
}

 function l2(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
  function make(data, attribute) {
    return Object.assign({}, data, attribute);
  }
  const addLeft = function(world){
    return make(world,{score: world.score+10,foodx: posFoodX(), foody:posFoodY(),
      snake: append(world.snake, [{ x: last(world.snake).x + 10,y:last(world.snake).y}])
  });
  }
  const addRight = function(world){
    return make(world,{score: world.score+10,foodx: posFoodX(), foody:posFoodY(),
      snake: append(world.snake, [{ x: last(world.snake).x - 10,y: last(world.snake).y}])
  });
}
const addDown = function(world){
  return make(world,{score: world.score+10,foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y-10}])
});
}
const addUp = function(world){
  return make(world,{score: world.score+10,foodx: posFoodX(), foody: posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y+10}])
});
}
const takeAdd = function(world){
  if(l2({x:world.foodx, y: world.foody},{x:first(world.snake).x,y:first(world.snake).y})==0){
    if(world.ultimaTecla==="izquierda"){
      return addLeft(world);
    }else if(world.ultimaTecla=="derecha"){
      return addRight(world);
    }else if(world.ultimaTecla=="abajo"){
      return addDown(world);
    }else if(world.ultimaTecla=="arriba"){
      return addUp(world);
    }else{
      return make(world,{});
    }
  }else{
    return make(world,{});
  }

}
 const comer = function(world){
   if((isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:world.foodx , y:world.foody}) == true) || (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:world.foodx , y:world.foody}) == true) || (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:world.foodx , y:world.foody}) == true)){
      return make(world,{foodx: posFoodX(), foody: posFoodY()})
   }else{
   if(l2({x:world.foodx, y: world.foody},{x:first(world.snake).x,y:first(world.snake).y})==0){
     return takeAdd(world);
   }else{
     return make(world,{});
   }
  }
 }
  function obj(x, y) {
    return { x, y }
  }
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


  function f(world) {
    return make(world, { TC: true })
  }
  function sketchProc(processing) {
   var img2 = processing.loadImage('onix.jpg')
    /**
     * Esto se llama antes de iniciar el juego
     */
    processing.setup = function () {
      processing.frameRate(10);
      processing.size(anchoX,longitudY);
      processing.background(10,200,50);
      processing.state = {
        snake: [{ x: 100, y: 100 }], ancho: 10, alto: 10,
        ultimaTecla: "derecha", score: 0,
        Obstable1x: 180, Obstacle1y:130, ancho1Obstable: 30, alto1Obstacle: 330,
        Obstable2x: 460, Obstacle2y:130, ancho2Obstable: 30, alto2Obstacle: 330,
        Obstable3x: 740, Obstacle3y:130, ancho3Obstable: 30, alto3Obstacle: 330,
        borde1x: 0,borde1y : 0,borde1ancho : 10,bordealto1 : 600,
        borde3x: 0,borde3y : 0,borde3ancho : 400,bordealto3 : 10,
        borde4x: 450,borde4y : 0,borde4ancho : 550,bordealto4 : 10,
        borde5x: 0,borde5y : 590,borde5ancho : 990,bordealto5 : 10,
        cuadro1x : 400,cuadro1y :0,cuadro1ancho : 10,cuadro1alto : 10,
        cuadro2x : 445,cuadro2y :0,cuadro2ancho : 10,cuadro2alto : 10,
        foodx: (Math.round(Math.random() * cols)*10), foody: (Math.round(Math.random() * rows)*10) 
        , TC: false
      };
    }

    /**
    * Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
    */
    processing.onKeyEvent = function (world, keyCode) {
      if(keyCode == processing.UP && world.ultimaTecla != "abajo"){
        return make(world,{ultimaTecla: "arriba"})
      }else if(keyCode == processing.DOWN && world.ultimaTecla != "arriba"){
        return make(world,{ultimaTecla: "abajo"})
      }else if(keyCode == processing.RIGHT && world.ultimaTecla != "izquierda"){
        return make(world,{ultimaTecla: "derecha"})
      }else if(keyCode == processing.LEFT && world.ultimaTecla != "derecha"){
        return make(world,{ultimaTecla: "izquierda"})
      }else{
        return make(world,{});
      }
    }


    const mover = function (world) {
      if (world.ultimaTecla === "derecha") {
        return make(world, { snake: mapObjX(world.snake,moveRight) });
      }
      if (world.ultimaTecla === "arriba") {
        return make(world, { snake: mapObjY(world.snake,moveUp) });
      }
      if (world.ultimaTecla === "abajo") {
        return make(world, { snake: mapObjY(world.snake,moveDown) });
      }
      if (world.ultimaTecla === "izquierda") {
        return make(world, { snake: mapObjX(world.snake,moveLeft) });
      }
    }

    /**
    * Actualiza el mundo en cada tic del reloj. Retorna el nuevo stado del mundo
    */
    processing.onTic = function (world) {
      console.log("x: ",first(world.snake).x, " y: ",first(world.snake).y)
      return comer(mover(collision2(collisionSnake(first(world.snake),world.snake,world))));
    }




    // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
    processing.drawGame = function (world) {
      let pintar = function(obj){
        return processing.rect(obj.x,obj.y,10,10);
      }
      let pintarImg = function(imagen,x,y,width,height){
        return processing.image(imagen, x, y, width, height);
      }
      
      processing.background(10,200,50);
      processing.fill(200, 0, 0);
      //pintarImg(img2,0,0,990,600);
      processing.rect(world.foodx, world.foody, world.ancho, world.alto)
      processing.fill(40, 140, 200);
      processing.rect(first(world.snake).x, first(world.snake).y, world.ancho, world.alto);
      processing.fill(0, 0, 0);
      processing.textFont(processing.PFont, 20);
      processing.text("Score: " + world.score, 30, 40);
      processing.rect(990,0,10,10);
      processing.fill(20, 70, 0);
      processing.rect(world.Obstable1x, world.Obstacle1y, world.ancho1Obstable, world.alto1Obstacle);
      processing.fill(20, 70, 0);
      processing.rect(world.Obstable2x, world.Obstacle2y, world.ancho2Obstable, world.alto2Obstacle);
      processing.fill(20, 70, 0);
      processing.rect(world.Obstable3x, world.Obstacle3y, world.ancho3Obstable, world.alto3Obstacle);
      processing.fill(20, 70, 0);
      processing.rect(world.borde1x,world.borde1y,world.borde1ancho,world.bordealto1);
      processing.fill(20, 70, 0);
      processing.rect(world.borde3x,world.borde3y,world.borde3ancho,world.bordealto3);
      processing.fill(20, 70, 0);
      processing.rect(world.borde4x,world.borde4y,world.borde4ancho,world.bordealto4);
      processing.fill(20, 70, 0);
      processing.rect(world.borde5x,world.borde5y,world.borde5ancho,world.bordealto5);
      processing.fill(240, 240, 240);
      processing.rect(world.cuadro1x,world.cuadro1y,world.cuadro1ancho,world.cuadro1alto);
      processing.fill(240, 240, 240);
      processing.rect(world.cuadro2x,world.cuadro2y,world.cuadro2ancho,world.cuadro2alto);
      processing.fill(240, 240, 240);
      mapObj(world.snake,pintar);
      
      
    }



    // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
    // No cambie esta función. Su código debe ir en drawGame
    processing.draw = function () {
      processing.drawGame(processing.state);
      processing.state = processing.onTic(processing.state);
    };

    // Esta función se ejecuta cada vez que presionamos una tecla. 
    // No cambie esta función. Su código debe ir en onKeyEvent
    processing.keyPressed = function () {
      processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
    }
  }



  var canvas = document.getElementById("canvas");

  // Adjuntamos nuestro sketch al framework de processing
  var processingInstance = new Processing(canvas, sketchProc);
