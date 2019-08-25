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
  function isInside(rect, p) {
    if( p.x >= rect.p0.x && p.x <= rect.p1.x &&
      p.y >= rect.p0.y && p.y <= rect.p1.y){
        return true;
    } else {
      return false;
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