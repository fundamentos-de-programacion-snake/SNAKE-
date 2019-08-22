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
  if(((first(world.snake).x)>=0 && (first(world.snake).x)<=980) && ((first(world.snake).y)>=0 && (first(world.snake).y)<=590)){
    if( (isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true)){
      return make(world,{});
    }
  }else{
    return console.log("Has perdido x: ", first(world.snake).x, " y: ",first(world.snake).y);
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
        return console.log("Has perdido x: ",primero.x, " y: ",primero.y," x2: ",first(rest(list)).x, " y2: ",first(rest(list)).y);
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
    return make(world,{score: world.score+10,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x + 10,y:last(world.snake).y}])
  });
  }
  const addRight = function(world){
    return make(world,{score: world.score+10,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x - 10,y: last(world.snake).y}])
  });
}
const addDown = function(world){
  return make(world,{score: world.score+10,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
    snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y-10}])
});
}
const addUp = function(world){
  return make(world,{score: world.score+10,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
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
      return make(world,{foodx: (Math.round(Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500})
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
        foodx: (Math.round(Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500 
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
      pintarImg(img2,0,0,990,600);
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
