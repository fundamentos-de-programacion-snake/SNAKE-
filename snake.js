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
const probabilidad = 320;
const anchoX=990;
const longitudY=600;
const cols = (anchoX-10)/10;
const rows = (longitudY-20)/10
let actualizar = {
  //color :250,
  snake: [{ x: 100, y: 100 }], ancho: 10, alto: 10,
  ultimaTecla: "derecha", score: 0,
  foodx: (Math.round(Math.random() * 10) / 10) * 800, foody:(Math.round(Math.random() * 10) / 10) * 500, anchof:10, altof:10
  , loser: true,food2x:(Math.round(Math.random() * 10) / 10) * 800, food2y:(Math.round(Math.random() * 10) / 10) * 500, ancho2f:10, alto2f:10,o:0,
  contadorLevel:0, scoreNewFood: 0, level2: false, random: Math.floor(Math.random()*probabilidad),bala: [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}] ,
  bala1: [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}],
  bala2: [{x:990,y:(Math.round(Math.random() * 10) / 10) * 500}],i:0, inicio: false
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
    localStorage.setItem("nombre",prompt("You have beaten the current champion! Please enter your name here: "))
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
   var img4 = processing.loadImage('x.jpg');
   var inicio = processing.loadImage('inicio.jpg');
   var over = processing.loadImage('over.jpg');
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
        ultimaTecla: "", score: 0,
        foodx: (Math.round(Math.random() * 10) / 10) * 800, foody:(Math.round(Math.random() * 10) / 10) * 500, anchof:10, altof:10
        , loser: false,food2x:(Math.round(Math.random() * 10) / 10) * 800, food2y:(Math.round(Math.random() * 10) / 10) * 500, ancho2f:10, alto2f:10,o:0,
        contadorLevel: 0, scoreNewFood:0, level2: false, random: Math.floor(Math.random()*probabilidad),bala: [{x:990,y:100}] ,i:0,
        bala1: [{x:990,y:250}],
        bala2: [{x:990,y:500}], inicio: true, score3: 0
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
      }
      if(world.ultimaTecla==""){
        return make(world,{inicio:false, ultimaTecla: "derecha"})
      }
      if(world.loser == true){
        return make(world,{inicio: false, ultimaTecla: "derecha",loser: false,score3:0});
      }
      return make(world,{})
    }


    /**
    * Actualiza el mundo en cada tic del reloj. Retorna el nuevo stado del mundo
    */
   processing.onTic = function (world) {
     if(world.inicio==false){
    return isItTimeForLevel2(level2(mover2(winOrLose(comer(comer2(condicion(condicion2(condicion3(contador2(aparecer(mover(collision2(OutOfScreenUp(contador(outOfScreenRight(colisionbala(first(world.snake),collisionSnake(first(world.snake),world.snake,world))))))))))))))))));
     }else{
       return make(world,{});
     }
  }


    // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
    processing.drawGame = function (world) {
      /**
       * Contrato: objeto {x,y} => Figura en el canvas.
       * Propósito: función que pinta un objeto con atributos x y y en el canvas.
       * En éste caso, pinta la serpiente en el canvas.
       * Cuerpo: 
       */
      let pintar = function (obj) {
        return processing.rect(obj.x, obj.y, 10, 10) ;
      }
       /**
       * Contrato: objeto {x,y} => Figura en el canvas.
       * Propósito: función que pinta un objeto con atributos x y y en el canvas.
       * En éste caso, pinta los obstaculos "balas" en el canvas.
       * Cuerpo: 
       */
      let pintar2 = function (obj) {
        return processing.image(img4, obj.x, obj.y, 70, 10) ;
      }
      /**
       * Contrato: () => Texto en el canvas.
       * Propósito: Función que pinta el nombre y el puntaje del mejor jugador hasta el momento.
       * También verifica los casos "null" ó "undefined" para no mostrarlos en el texto.
       * Cuerpo:
       */
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
      /**
       * Contrato: variable que contenga una imagen, número, número,número,número
       * Propósito: Función que pinta una imagen en el canvas;
       * en éste caso, el suelo del juego.
       * Cuerpo: 
       */
      let pintarImg = function (imagen, x, y, width, height) {
        return processing.image(imagen, x, y, width, height);
      }
      /**
       * Contrato: () => Texto en el canvas.
       * Propósito: Función que pinta el texto del nivel 2 cuando sea activado y el atributo
       * del mundo "scoreNewFood" sea 0.
       * Cuerpo: 
       */
      let level2  = function(){
        if(world.level2==true && world.scoreNewFood==0){
          return processing.text("Time to get it: "+world.contadorLevel+" Be faster than before.",650,60)
        }
      }
      /**
       * Contrato: número->número
       * Propósito: Función que retorna el número dado en el parámetro de la función.
       * Cuerpo: 
       */
      const color = function (num){
        return num;
      }
      pintarImg(img1, 0, 0, 990, 600);
      
     processing.fill(200,0,0)
     processing.rect(world.foodx,world.foody,10,10)
    
     processing.fill(Math.random()*255,Math.random()*255,Math.random()*255)
     processing.rect(world.food2x,world.food2y,world.ancho2f,world.alto2f)
      

      processing.fill(0, 0, 0);
      processing.textFont(processing.PFont, 20);
      processing.text("Score: " + world.score, 30, 40);
      processing.rect(990, 0, 10, 10);
      processing.fill(0, 0, 0);
      processing.textFont(processing.PFont,20)
      best();
      level2()
      pintarImg(img2, 180, 130, 30, 330);
      pintarImg(img2, 460, 130, 30, 330);
      pintarImg(img2, 740, 130, 30, 330);
      pintarImg(img2, 0, 0, 10, 600);
      pintarImg(img2, 0, 0, 400, 10);
      pintarImg(img2, 450, 0, 550, 10);
      pintarImg(img2, 0, 590, 990, 10);
  
     processing.fill(color(world.num),color(world.num1),color(world.num2))
      mapObj(world.snake, pintar);

      mapObj(world.bala,pintar2)
      mapObj(world.bala1,pintar2)
      mapObj(world.bala2,pintar2)
      //PANTALLA DE INICIO.
      if (world.inicio == true) {
        pintarImg(inicio, 0, 0, 990, 600);
        processing.textFont(processing.PFont, 80);
        processing.text("Welcome!", 340, 70)
        processing.textFont(processing.PFont, 20);
        processing.text("Rules for playing well: ", 100, 90)
        processing.text("1) Get as many pieces of food as you can. ", 30, 110);
        processing.text("2) Do not press two buttons at the same time. ", 30, 130);
        processing.text("3) Be careful when the timer comes out, be fast. ", 30, 150);
        processing.text("4) You will lose whether you hit yourself or any border around the screen.", 30, 170);
        processing.text("5) There is bonus food for you to get a longer snake, try to reach it! ", 30, 190);
        processing.text("6) Try to avoid getting hit by the bullets.", 30, 210);
        processing.text("7) Just enjoy the small game we have made :). ", 30, 230);
        processing.textFont(processing.PFont, 40);
        processing.text("PRESS ANY BUTTON!", 200, 400)
      }
      //PANTALLA CUANDO SE PIERDE.
      if (world.loser == true) {
        pintarImg(over, 0, 0, 990, 600);
        processing.textFont(processing.PFont, 50);
        processing.fill(20, 70, 0);
        processing.text("Oh no! You just lost :( ", 250, 70);
        if(parseInt(localStorage.getItem("puntuacion"))>world.score3){
          processing.textFont(processing.PFont, 25);
          processing.text("You did not beat the current champion, here is your last score: "+world.score3,150,160);
          processing.textFont(processing.PFont,20)
          processing.text("Do not worry about it, just try again by pressing any button :)", 200, 220);
        }else{
          processing.textFont(processing.PFont, 25);
          processing.text("You just beat the current champion! You are oustanding!: "+world.score3,150,160);
          processing.textFont(processing.PFont,20)
          processing.text("Try again by pressing any button :)", 300, 220);
        }
      }
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
     // Borra el mejor score
    processing.borrar = function() {
          localStorage.removeItem("puntuacion")
    }
  }

  

  var canvas = document.getElementById("canvas");

  // Adjuntamos nuestro sketch al framework de processing
  var processingInstance = new Processing(canvas, sketchProc);

