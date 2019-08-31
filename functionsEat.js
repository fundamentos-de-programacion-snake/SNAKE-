const posFoodX = function(){
  return (Math.round(Math.random() * 10) / 10) * 800
}
const posFoodY = function(){
  return (Math.round(Math.random() * 10) / 10) * 500
}
const addLeft = function(world){
  return make(world,{score: world.score+10,foodx: posFoodX(), foody:posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x + 10,y:last(world.snake).y}])
    ,num : Math.random()*255,num1 : Math.random()*255,num2 : Math.random()*255});
}
const addRight = function(world){
  return make(world,{score: world.score+10,foodx: posFoodX(), foody:posFoodY(),
    snake: append(world.snake, [{ x: last(world.snake).x - 10,y: last(world.snake).y}])
    ,num :Math.random()*255,num1 : Math.random()*255,num2 : Math.random()*255});
}
const addDown = function(world){
return make(world,{score: world.score+10,foodx: posFoodX(), foody: posFoodY(),
  snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y-10}])
  ,num :Math.random()*255,num1 : Math.random()*255,num2 : Math.random()*255});
}
const addUp = function(world){
return make(world,{score: world.score+10,foodx: posFoodX(), foody: posFoodY(),
  snake: append(world.snake, [{ x: last(world.snake).x,y: last(world.snake).y+10}])
  ,num :Math.random()*255 ,num1 : Math.random()*255,num2 : Math.random()*255});
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
 if((isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:world.foodx , y:world.foody}) == true) || (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:world.foodx , y:world.foody}) == true) || (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:world.foodx , y:world.foody}) == true ) ||  (isInside({p0:{x:0,y:0},p1:{x:10,y:600}},{x:world.foodx , y:world.foody}) == true)||  (isInside({p0:{x:0,y:0},p1:{x:400,y:10}},{x:world.foodx , y:world.foody} )== true) ||  (isInside({p0:{x:450,y:0},p1:{x:990,y:10}},{x:world.foodx , y:world.foody}) == true) ||  (isInside({p0:{x:0,y:590},p1:{x:990,y:10}},{x:world.foodx , y:world.foody}) == true)){
    return make(world,{foodx: posFoodX(), foody: posFoodY()})
 }else{
 if(l2({x:world.foodx, y: world.foody},{x:first(world.snake).x,y:first(world.snake).y})==0){
   return takeAdd(world);
 }else{
   return make(world,{});
 }
}
}
