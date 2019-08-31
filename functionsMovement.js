const movementOutScreenUp = function(world){
    return make(world, {snake: cons({x: 980 , y: 280 },principio(world.snake)),ultimaTecla: "izquierda"})
  }
  
  const movementOutScreenRight = function(world){
    return make(world, {snake: cons({x: 420, y: 10},principio(world.snake)), ultimaTecla: "abajo"})
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
 const outOfScreenRight = function(world){
    if(first(world.snake).x >= 980 && world.ultimaTecla == "derecha"){
      return movementOutScreenRight(world);
    }else{
      return make(world,{});
    }
  }
  
  const OutOfScreenUp = function(world){
    if(first(world.snake).y<10 && first(world.snake).x>=400 && first(world.snake).x <=445 ){
      return movementOutScreenUp(world);
    }else{
      return make(world,{});  
    }
  }
