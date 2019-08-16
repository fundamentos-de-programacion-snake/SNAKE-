const { cons, first, rest, isEmpty, isList } = require('functional-light');
const {longitud} = require('../src/ejercicioTaller')
const {principio} = require('../framework-canvas-master/ejercicioTaller')
/**
 * l2: Object{x,y}, Object{x,y} => Number
 * Calcula la distancia L2 entre 2 puntos {x,y} 
 */
function l2(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
  /**
   *  function perímetro: list->number
   * Calcula el perímetro de un cuadrado ó rectángulo.
   */
  const perimetro = function(list){
    if(longitud(list)==2){
      return l2(first(list),first(rest(list)));
    }else{
      return l2(first(list),first(rest(list)))+perimetro(rest(list))
    }
  }
  console.log(perimetro([{x:0,y:0},{x:0,y:5},{x:3,y:5},{x:3,y:0},{x:0,y:0}]))

  