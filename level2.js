/**
 * Contrato: world->world
 *  Propósito: Función que desarrolla el código de acuerdo al nivel dos.
 * El cual consiste en que el jugador debe tomar la comida bonus en un intervalo
 * de 20 segundos.
 * Si no lo consigue, inmediatamente perderá.
 * De lo contrario, seguirá jugando normalmente.
 * Ésta función depende de otra función llamada "isItTimeForLevel2".
 * Cuerpo: 
 */


const level2 = function(world){
    if(world.level2==true){
        if(world.contadorLevel>400){
            if(world.scoreNewFood==1){
             return make(world,{scoreNewFood:0, contadorLevel:0,random: Math.floor(Math.random()*probabilidad),level2:false});   
            }else{
             return make(world,{loser: true}); 
            }
        }else{
            if(world.scoreNewFood==1){
                return make(world,{scoreNewFood:0, contadorLevel:0,random: Math.floor(Math.random()*probabilidad),level2:false});   
            }else{
                return make(world,{contadorLevel: world.contadorLevel+1, random: Math.floor(Math.random()*probabilidad),scoreNewFood:0});
            }
        }
    }else{
        return make(world,{scoreNewFood:0});
    }
}
/**
 * Contrato: world => world.
 * Propósito: Función que determina en qué momento debe ejecutarse la función "level2".
 * Esto lo hace tomando en cuenta el puntaje actual y un atributo del mundo llamado "random"
 * que toma su valor de Math.random()
 */
const isItTimeForLevel2 = function(world){
    if(world.score>=90 && world.random == 20){
        return make(world,{level2:true})
    }else{
        return make(world,{random: Math.floor(Math.random()*probabilidad)})
    }
}