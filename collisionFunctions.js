function collision2(world){
    if(((first(world.snake).x)>=10 &&  (first(world.snake).y)>=10 && (first(world.snake).y)<=580)){
      if( (isInside({p0:{x:180,y:130},p1:{x:200,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:460,y:130},p1:{x:480,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true) && (isInside({p0:{x:740,y:130},p1:{x:760,y:450}},{x:first(world.snake).x , y:first(world.snake).y}) != true)){
        return make(world,{});
      }else{
        return make(world, {loser: true});
      }
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
          return make(world, {loser: true});
      }else{
        return collisionSnake(primero,rest(list),world);
      }
    }
  }
  }