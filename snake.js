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
const rows = (longitudY-20)/10
let actualizar = {
  //color :250,
  snake: [{ x: 100, y: 100 }], ancho: 10, alto: 10,
  ultimaTecla: "derecha", score: 0,
  foodx: (Math.round(Math.random() * 10) / 10) * 800, foody:(Math.round(Math.random() * 10) / 10) * 500, anchof:10, altof:10
  , loser: false,food2x:(Math.round(Math.random() * 10) / 10) * 800, food2y:(Math.round(Math.random() * 10) / 10) * 500, ancho2f:10, alto2f:10,o:0
  
};
 
 /**
  * Destaca las puntuaciones más altas en el juego. Se refresca cada vez que inicia el juego y
  * por defecto inicia en cero.
  * @param {world} World - El mundo en que se mueve snake.
  * Cuerpo:
  */
const isBest = function(world){
  if(parseInt(localStorage.getItem("puntuacion"))>=world.score){
    return make(world,actualizar);
  }else{
    localStorage.setItem("nombre",prompt("Digite su nombre: "))
    localStorage.setItem("puntuacion",world.score)
    return make(world,actualizar);
  }
}
/**
 * WinOrLose: Funcion que determina si determinado score al termino del juego, es mayor al anterior.
 * @param {world} world - El mundo donde se mueve snake.
 */
const winOrLose = function(world){
  if(world.loser == true){
    return isBest(world)
  }else{
    return make(world,{});
  }
}
  function sketchProc(processing) {
   var img1 = processing.loadImage('pisito.png');
   var img2 = processing.loadImage('maderita.jpg');
   var img3 = processing.loadImage('manzanag.png');
    /**
     * Esto se llama antes de iniciar el juego
     */
    processing.setup = function () {
      processing.frameRate(16);
      processing.size(anchoX,longitudY);

      processing.state = {
       num :120,
       num1: 0,
       num2 : 50,
        snake: [{ x: 100, y: 100 }], ancho: 10, alto: 10,
        ultimaTecla: "derecha", score: 0,
        foodx: (Math.round(Math.random() * 10) / 10) * 800, foody:(Math.round(Math.random() * 10) / 10) * 500, anchof:10, altof:10
        , loser: false,food2x:(Math.round(Math.random() * 10) / 10) * 800, food2y:(Math.round(Math.random() * 10) / 10) * 500, ancho2f:10, alto2f:10,o:0
      };
    }
    /**
    * Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
    */
    processing.onKeyEvent = function (world, keyCode) {
      if(keyCode === processing.UP && world.ultimaTecla !== 'abajo'){
        return make(world,{ultimaTecla: 'arriba'})
      }
      if(keyCode === processing.DOWN && world.ultimaTecla !== "arriba"){
        return make(world,{ultimaTecla: 'abajo'})
      }
       if(keyCode === processing.RIGHT && world.ultimaTecla !== "izquierda"){
        return make(world,{ultimaTecla: "derecha"})
      }
       if(keyCode === processing.LEFT && world.ultimaTecla !==  "derecha"){
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
      return make(world,{});
    }

    /**
    * Actualiza el mundo en cada tic del reloj. Retorna el nuevo stado del mundo
    */
   processing.onTic = function (world) {
    return winOrLose(comer(comer2(mover(collision2(OutOfScreenUp(contador(outOfScreenRight(collisionSnake(first(world.snake),world.snake,world)))))))));
  }
  const contador = function (world){
    if(world.o>60){
      return make(world,{food2x:(Math.round(Math.random() * 10) / 10) * 800 , food2y:(Math.round(Math.random() * 10) / 10) * 500,o:0})
    }else{
      return make(world,{o:world.o+1})
    }
  }


    // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
    processing.drawGame = function (world) {
      let pintar = function (obj) {
        return processing.rect(obj.x, obj.y, 10, 10) ;
      }
      let best = function(){
        if(isNaN(parseInt(localStorage.getItem("puntuacion")))){
          if(localStorage.getItem("nombre")==""){
            return processing.text("Name: "+ "" +"      Best score: "+0,30,60)
          }
          return processing.text("Best score: "+0,30,60)
        }else{
          if(localStorage.getItem("nombre")==""){
            return processing.text("Name:  "+ "" +"     Best score: "+parseInt(localStorage.getItem("puntuacion")),30,60)
          }
          return processing.text("Name:  "+localStorage.getItem("nombre")+"     Best score: "+parseInt(localStorage.getItem("puntuacion")),30,60)
        }
      }
      let pintarImg = function (imagen, x, y, width, height) {
        return processing.image(imagen, x, y, width, height);
      }
      pintarImg(img1, 0, 0, 990, 600);

     // processing.fill(250, 10, 10);
      processing.image(img3,world.foodx, world.foody, 13, 13)

     processing.fill(Math.random()*255,Math.random()*255,Math.random()*255)
     processing.rect(world.food2x,world.food2y,world.ancho2f,world.alto2f)
      

      processing.fill(0, 0, 0);
      processing.textFont(processing.PFont, 20);
      processing.text("Score: " + world.score, 30, 40);
      processing.rect(990, 0, 10, 10);
      processing.fill(20, 70, 0);
      processing.textFont(processing.PFont,20)
      best();

      pintarImg(img2, 180, 130, 30, 330);
      pintarImg(img2, 460, 130, 30, 330);
      pintarImg(img2, 740, 130, 30, 330);
      pintarImg(img2, 0, 0, 10, 600);
      pintarImg(img2, 0, 0, 400, 10);
      pintarImg(img2, 450, 0, 550, 10);
      pintarImg(img2, 0, 590, 990, 10);
  
     processing.fill(color(world.num),color(world.num1),color(world.num2))
      mapObj(world.snake, pintar);
    }
    
    const color = function (num){
      return num
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



