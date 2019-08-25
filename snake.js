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


const winOrLose = function(world){
  if(world.loser == true){
    return alert("Perdiste");
  }else{
    return make(world,{});
  }
}
  function sketchProc(processing) {
   var img1 = processing.loadImage('pisito.png');
   var img2 = processing.loadImage('maderita.jpg');
   var img3 = processing.loadImage('zidra.png');
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
        foodx: (Math.round(Math.random() * 10) / 10) * 800, foody:(Math.round(Math.random() * 10) / 10) * 500, anchof:25, altof:23
        , loser: false
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
      return winOrLose(comer(mover(collision2(OutOfScreenUp(outOfScreenRight(collisionSnake(first(world.snake),world.snake,world)))))));
    }




    // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
    processing.drawGame = function (world) {
      let pintar = function(obj){
        return processing.rect(obj.x,obj.y,10,10);
      }
      let pintarImg= function(imagen,x,y,width,height){
        return processing.image(imagen, x, y, width, height);
      }
      
      processing.background(10,200,50);
      processing.fill(200, 0, 0);
      pintarImg(img1,0,0,990,600);
      processing.image(img3,world.foodx, world.foody, world.anchof, world.altof)
      processing.fill(40, 140, 200);
      processing.rect(first(world.snake).x, first(world.snake).y, world.ancho, world.alto);
      //processing.rect(980,280,10,10);
      //processing.rect(422,0,10,10)
      processing.fill(0, 0, 0);
      processing.textFont(processing.PFont, 20);
      processing.text("Score: " + world.score, 30, 40);
      processing.rect(990,0,10,10);
      processing.fill(20, 70, 0);
      processing.rect(world.Obstable1x, world.Obstacle1y, world.ancho1Obstable, world.alto1Obstacle);
      processing.fill(20, 70, 0);
      pintarImg(img2,180,130,30,330);
      processing.rect(world.Obstable2x, world.Obstacle2y, world.ancho2Obstable, world.alto2Obstacle);
      processing.fill(20, 70, 0);
      pintarImg(img2,460,130,30,330);
      processing.rect(world.Obstable3x, world.Obstacle3y, world.ancho3Obstable, world.alto3Obstacle);
      processing.fill(20, 70, 0);
      pintarImg(img2,740,130,30,330);
      processing.rect(world.borde1x,world.borde1y,world.borde1ancho,world.bordealto1);
      processing.fill(20, 70, 0);
      pintarImg(img2,0,0,10,600);
      processing.rect(world.borde3x,world.borde3y,world.borde3ancho,world.bordealto3);
      processing.fill(20, 70, 0);
      pintarImg(img2,0,0,400,10);
      processing.rect(world.borde4x,world.borde4y,world.borde4ancho,world.bordealto4);
      processing.fill(20, 70, 0);
      pintarImg(img2,450,0,550,10);
      processing.rect(world.borde5x,world.borde5y,world.borde5ancho,world.bordealto5);
      processing.fill(240, 240, 240);
      pintarImg(img2,0,590,990,10);
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
