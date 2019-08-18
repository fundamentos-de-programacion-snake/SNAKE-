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

const collision = function(world){
  if(isEmpty(world.snake) || longitud(world.snake)==1){
    return make(world,{});
  }else if((first(world.snake).x)==(first(rest(world.snake)).x) || ((first(world.snake).y)==(first(rest(world.snake)).y))){
    return alert("Has perdido.");
  }else{
    return collision(rest(world.snake));
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
    return make(world,{score: world.score+1,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x + 10,y:last(world.snake).y}])
  });
  }
  const addRight = function(world){
    return make(world,{score: world.score+1,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x - 10,y: last(world.snake).y}])
  });
}
const addDown = function(world){
  return make(world,{score: world.score+1,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
    snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y-10}])
});
}
const addUp = function(world){
  return make(world,{score: world.score+1,foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
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
   if(l2({x:world.foodx, y: world.foody},{x:first(world.snake).x,y:first(world.snake).y})==0){
     return takeAdd(world);
   }else{
     return make(world,{});
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


    /**
     * Esto se llama antes de iniciar el juego
     */
    processing.setup = function () {
      processing.frameRate(10);
      processing.size(1000, 600);
      processing.background(10, 200, 50);
      processing.state = {
        snake: [{ x: 100, y: 100 }], ancho: 10, alto: 10,
        ultimaTecla: "derecha", score: 0,
        foodx: (Math.round(Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500 
        , TC: false
      };
    }

    /**
    * Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
    */
    processing.onKeyEvent = function (world, keyCode) {
      console.log(world.snake)
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
      console.log(world.snake)
      return comer(mover(world));
    }




    // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
    processing.drawGame = function (world) {
      let pintar = function(obj){
        return processing.rect(obj.x,obj.y,10,10);
      }
      processing.background(10, 200, 50);
      processing.fill(0, 0, 0)
      processing.rect(world.foodx, world.foody, world.ancho, world.alto)
      processing.fill(240, 240, 240);
      processing.rect(first(world.snake).x, first(world.snake).y, world.ancho, world.alto);
      processing.textFont(processing.PFont, 18);
      processing.text("Score: " + world.score, 30, 40);
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