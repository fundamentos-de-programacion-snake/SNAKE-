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
    return make(world,{foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x + 10,y:last(world.snake).y}])
  });
  }
  const addRight = function(world){
    return make(world,{foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
      snake: append(world.snake, [{ x: last(world.snake).x - 10,y: last(world.snake).y}])
  });
}
const addDown = function(world){
  return make(world,{foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
    snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y-10}])
});
}
const addUp = function(world){
  return make(world,{foodx: Math.round((Math.random() * 10) / 10) * 800, foody: (Math.round(Math.random() * 10) / 10) * 500,
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
      switch (keyCode) {
        case processing.UP:
          return make(world, { ultimaTecla: "arriba" });
          break;
        case processing.DOWN:
          return make(world, { ultimaTecla: "abajo" });
          break;
        case processing.LEFT:
          return make(world, { ultimaTecla: "izquierda" });
          break;
        case processing.RIGHT:
          return make(world, { ultimaTecla: "derecha" });
          break;
        case 75:
          return make(world, { snake: append(world.snake, [obj({ x: first(world.snake).x - 10, y: first(world.snake).y })]) });
          break;
        default:
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









      // creacion de funciones auxiliares para mas adelante

      /* longitud: list -> number
          calcular la cantidad de elementos que contiene una lista "x" 
      
          ejemplos:
          console.log(longitud([1,2,3,4,8])) // 5 
          console.log(longitud([5,1,3])) // 3
          console.log(longitud([true,false,"hola","mundo"])) // 4
          console.log(longitud([])) // 0
      */
      function longitud(x) {
        if (isEmpty(x)) {
          return 0
        } else {
          return 1 + longitud(rest(x))
        }
      }


      /* remove:any,List->List
          Eliminar un elemento "item" de una lista  "l" y retornar la lista restante
          Ejemplos:
      
          console.log(remove(2,[1,4,2,5,6])) // [1,4,5,6]
          console.log(remove(true,[false,true,"hola","mundo"])) // [false,"hola","mundo"]
          console.log(remove(2,[4,5,6,7,8])) // [4,5,6,7,8]
      
      */

      function remove(item, l) {
        if (isEmpty(l)) {
          return [];
        } else if (first(l) === item) {
          return rest(l);
        } else {
          return cons(first(l), remove(item, rest(l)));
        }
      }


      // 1. Encuentre el mayor valor de una lista de números

      /* mayor:list->number
          Encontrar el elemento con mayor valor dentro de una lista "x" de números
          Ejemplos:
          console.log(mayor([1,2,11,4,8])) // 11
          console.log(mayor([5,90,12,7])) // 90
          console.log(mayor([-3,-7,-10,0])) // 0
      */

      function mayor(x) {
        if (longitud(x) == 1) {
          return first(x)
        } else {
          return Math.max(first(x), mayor(rest(x)))
        }
      }


      // 2. Encuentre el promedio de los valores de la lista

      /* sumaL:List->Number
          Calcular la suma de todos los elementos de una lista "x" de numeros
          Ejemplos:
          console.log(sumaL([1,2,3])) //6
          console.log(sumaL([1,4,5])) //10
          console.log(sumaL([1,2.5,3])) //6.5
          console.log(sumaL([-10,2])) //-8
      */
      function sumaL(x) {
        if (isEmpty(x)) {
          return 0
        } else {
          return first(x) + sumaL(rest(x))
        }
      }


      /* promedio:list->Number
          Calcular el promedio de todos los elementos en una lista "x" de numeros
          Ejemplos:
          console.log(promedio([3,3,3]))// 3 
          console.log(promedio([5,5,5]))// 5
          console.log(promedio([10,30,50]))// 30
          console.log(promedio([12,25,82]))// 39,66666666666664
      */

      function promedio(x) {
        if (longitud(x) == 1) {
          return first(x)
        }
        if (longitud(x) == 0) {
          return 0
        }
        return sumaL(x) / (longitud(x))

      }


      // 3. cree una funcion que concatene 2 listas 
      /*append:List,List->List
      Concatenar una lista x con otra lista y
      Ejemplos:
      p(append([1,2,3],[4,5])) // [1,2,3,4,5]
      p(append([true,false],[4,8,5])) // [true,false,4,8,5]
      p(append([],[])) // []
      p(append([],[1,4,5])) // [1,4,5]
      p(append([1,2],[])) // [1,2]
      */


      function append(x, y) {
        if (isEmpty(x)) {
          return y
        }
        if (longitud(x) == 1) {
          return cons(first(x), y)
        } else {
          return cons(first(x), append(rest(x), y))
        }
      }

      // 4. Invierta el orden de una lista

      /* invertir:list->list
          recibir una lista "x" y retornar otra lista con los mismos elementos de "x" pero en orden inverso
          Ejemplos:
          console.log(invertir([4,3,2,1])) // [1,2,3,4]
          console.log(invertir([false,true])) // [true,false]
          console.log(invertir([1,-2,5])) // [5,-2,1]
          console.log(invertir(["hello","world"])) // ["world","hello"]
      */

      function invertir(x) {
        if (isEmpty(x)) {
          return []
        }
        if (longitud(x) == 1) {
          return x
        }
        else {
          return cons(x[longitud(x) - 1], invertir(remove(x[longitud(x) - 1], x)))
        }
      }



      // 5. Ordene de manera ascendente una lista

      /* menor:list->number
          Encontrar el elemento con menor valor dentro de una lista "x" de números
      */

      function menor(x) {
        if (longitud(x) == 1) {
          return first(x)
        } else {
          return Math.min(first(x), menor(rest(x)))
        }
      }

      /* Ordenar:List->List
          ordenar de manera ascendente los elementos de una lista "x"
          Ejemplos:
          Ordenar([5,24,2]) //[2,5,24]
          Ordenar([-1,-10,44,0,2]) //[-10,-1,0,2,44]
          Ordenar([5,4,3,2]) //[2,3,4,5]
      */

      function Ordenar(x) {
        if (longitud(x) == 1) {
          return x
        }
        if (isEmpty(x)) {
          return []
        } else {
          return cons(menor(x), Ordenar(remove(menor(x), x)))
        }
      }




      // 6. Genere la lista de los primeros n términos de la serie de Fibonacci

      /*Fibonacci: Number->Number
          Simular la serie Fibonacci
          Ejemplos:
          console.log(Fibonacci(0)) // 1
          console.log(Fibonacci(1)) // 1
          console.log(Fibonacci(2)) // 2
          console.log(Fibonacci(3)) // 3
          console.log(Fibonacci(4)) // 5
          console.log(Fibonacci(5)) // 8
      */
      function Fibonacci(x) {
        if (x == 0 || x == 1) { return 1 }
        else { return Fibonacci(x - 1) + Fibonacci(x - 2) }

      }


      /* serieF:Number->List
          Crear una lista de los primeros "n" términos de la serie de Fibonacci
          Ejemplos:
          console.log(serieF(2)) // [1,1]
          console.log(serieF(6)) // [1,1,2,3,5,8]
          console.log(serieF(1)) // [1]
      */

      function serieF(n) {
        if (n <= 0) {
          return []
        } else {
          return Ordenar(cons(Fibonacci(n - 1), serieF(n - 1)))
        }
      }


      // 7. Dada una lista, eliminar todos los elementos que no sean números

      /*soloNumeros:List->List
          Eliminar todos los elementos de una lista "x" que no sean numeros
          Ejemplos:
          console.log(soloNumeros([1,2,3,true]))  // [1,2,3]
          console.log(soloNumeros(["hola",2,"world",3,4]))  // [2,3,4]
      */

      function soloNumeros(x) {
        if (isEmpty(x)) {
          return [];
        } else if (typeof (first(x)) != "number") {
          return soloNumeros(rest(x));
        } else {
          return cons(first(x), soloNumeros(rest(x)));
        }
      }


      // 8.   Implemente una función que inserta un elemento x en la posición n de la lista, 
      //      si n está entre 0 y el (longitud lista). No hace nada en caso contrario.

      /*insertar:any,number,list->List
          Agregar un elemento "any" en la posicion "n" de una lista "list"
          Ejemplos:
          insertar("hola",2,[1,2,3]) // [1,2,"hola",3]
          insertar("hola",3,[1,2,3]) // [1,2,3,"hola"]
      */

      function insertar(any, n, list) {
        if (n >= 0 && n <= longitud(list)) {
          if (longitud(list) == 1) {
            return cons(any, list)
          }
          if (isEmpty(list)) {
            return cons(any, [])
          }
          if (n === 0) {
            return cons(any, list)

          }
          if (n == longitud(list)) {
            return invertir(cons(any, invertir(list)))
          }
          if (longitud(rest(list)) != (longitud(list) - n)) {
            return cons(first(list), insertar(any, n - 1, rest(list)))
          }
          if (longitud(rest(list)) == (longitud(list) - n)) {
            return cons(first(list), cons(any, rest(list)))

          }
        } else { return list }
      }


      // 9. Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra un número x dado,
      //  si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para mantener la lista ordenada.

      /*indiceDe:any,List->Number
          Determinar  si un parametro "x" se encuentra dentro de una lista "list", y si es el caso, retornar el indice donde 
          se encuentra x
          Ejemplos:
          console.log(indiceDe(2,[1,2,3])) // 1
          console.log(indiceDe(1,[1,2,3])) // 0
          console.log(indiceDe(4,[1,2,3])) // "no está"
      */

      function indiceDe(x, list) {
        if (search(x, list) === false) {
          return -(indiceDe(x, Ordenar(insertar(x, 0, list))))
        }
        if (list[longitud(list) - 1] === x) {
          return (longitud(list) - 1)
        } else {
          return indiceDe(x, remove(list[longitud(list) - 1], list))
        }
      }


      // 10. Implemente una función que inserta datos en una lista que siempre está ordenada.

      /*agregar:Any,List->List
      Agregar un elemento "n" a una lista "l" que siempre está ordenada 
      Ejemplos:
      p(agregar(1,[4,5,6,7])) // [1,4,5,6,7]
      p(agregar(1,[-1,-2,-3,-4])) // [-4,-3,-2,-1,1]
      */

      function agregar(n, l) {
        return Ordenar(cons(n, l))
      }

      // 11. Implemente una función que busca un elemento en una lista desordenada.
      /*search:any,List->Boolean
      Verifica si un item se encuentra como elemento dentro de una lista l
      */

      function search(item, l) {
        if (isEmpty(l)) {
          return false;
        } else if (first(l) === item) {
          return true
        } else {
          return search(item, rest(l))
        }
      }

      // 12. Implemente una funcion que elimina el elemento n de una lista

      /*removerI:Number,List
      Eliminar el elemento del indice n en una lista x
      Ejemplos:
      p(removerI(0,[1,2,3])) //[2,3]
      p(removerI(1,[1,2,3])) //[1,3]
      p(removerI(2,[1,2,3])) //[1,2]
      */
      function removerI(n, x) {
        if (n >= 0 || n <= longitud(x)) {
          if (isEmpty(x)) {
            return [];
          } else {
            return remove(x[n], x)
          }
        }
      }


      // 13. Implemente una funcion que busca todos los elementos de un cieto valor x. la funcion debe retornar
      //      Todos 
      /*mayorQue:Number,List->List
      Encontrar todos los numeros mayores que n en una lista x
      p(mayorQue(2,[1,2,3,4])) // [3,4]
      p(mayorQue(5,[1,2,3,4,5])) // []
      p(mayorQue(-1,[-10,-1,0,1,10])) // [0,1,10]
      */
      function mayorQue(n, x) {
        if (isEmpty(x)) {
          return [];
        } else if (first(x) <= n) {
          return mayorQue(n, rest(x));
        } else {
          return cons(first(x), mayorQue(n, rest(x)));
        }
      }

      //14. Implemente una funcion que busca todos los elementos de una lista que cumplen una cierta condición
      /*isEven:Number->Boolean
      Verifica si un numero x es par
      */
      function isEven(x) {
        if (x % 2 == 0) {
          return true
        } else {
          return false
        }
      }

      /*cumple: funcion,list->List
      Eliminar todos los elementos de una lista x que no cumplan con una condición planteada en una funcion fx
      Ejemplos: 
      p(cumple(isEven,[1,2,3,4,5,6])) // [2,4,6]
      */

      function cumple(fx, x) {
        if (isEmpty(x)) {
          return []
        }
        if (fx(first(x)) === true) {
          return cons(first(x), cumple(fx, rest(x)))
        } else if (fx(first(x)) === false) {
          return cumple(fx, rest(x))
        }
      }

      // 15.  implemente una funcion que aplica una funcion dada a todos los elementos de una lista map

      /*cuadradp:Number->Number
      Eleva al cuadrado a un numero x y retorna su resultado
      */
      function cuadrado(x) {
        return Math.pow(x, 2)
      }

      /*sum:Number->Number
      Le suma 1 a un numero x
      */
      function sum(x) {
        return x + 1
      }


      /*aplicar: function, list -> list
      Aplicar una funcion a cada parametro de una lista x
      Ejemplos:
      p(aplicar(cuadrado, [1, 2, 3, 4, 7])) // [1,4,9,16,49]
      p(aplicar(sum, [1, 2, 3, 4, 5, 6, 7])) // [2,3,4,5,6,7,8]
      
      */

      function aplicar(funcion, x) {
        if (isEmpty(x)) {
          return []
        }
        else {
          return cons(funcion(first(x)), aplicar(funcion, rest(x)))
        };
      }



    }
  }



  var canvas = document.getElementById("canvas");

  // Adjuntamos nuestro sketch al framework de processing
  var processingInstance = new Processing(canvas, sketchProc);