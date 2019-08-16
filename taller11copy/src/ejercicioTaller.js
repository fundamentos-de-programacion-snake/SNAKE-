const { cons, first, rest, isEmpty, isList } = require('functional-light');

/*
 Contrato: longitud: List -> Number.
 Propósito: Función que retorna la longitud de una lista
 Cuerpo función: const longitud = function(list)
 Ejemplos:
 longitud([1,2,3]) == 3
 longitud([])==0
 longitud([4,2])==2
*/
const longitud = function (list) {
    if (isEmpty(list)) {
        return 0;
    } else {
        return 1 + longitud(rest(list));
    }
}
/*
1. Encuentre el mayor valor de una lista de números
Contrato función mayor: list->number
Propósito: Función que recibe una lista y retorna su número mayor.
Cuerpo función: const mayor = function(list)
Ejemplos:
mayor([1,7,3]) == 7
mayor([4,5,2]) == 4
mayor([-1,0,-4]) == 0
*/
const mayor = function (list) {
    if (longitud(list) == 1) {
        return first(list);
    } else {
        return Math.max(first(list), mayor(rest(list)));
    }
}
//console.log(mayor([1,4,2]))

/*
2. Encuentre el promedio de los valores de la lista.
*/
/*
Contrato función suma: list->number
Propósito: Función que suma los elementos de la lista.
Cuerpo de función: const suma = function(list)
Ejemplos:
suma([1,2,3]) == 6
suma([-1,2,-1]) == 0
suma([4,-1,0]) == 3 
*/
/*
Contrato función dividir: number,number -> number
*/
const suma = function (list) {
    if (isEmpty(list)) {
        return 0;
    } else {
        return first(list) + suma(rest(list));
    }
}


/*
Contrato función min: list->number.
Propósito: función que retorna el número menor de una lista.
Cuerpo función: const min = function(list)
Ejemplos:
min([4,0,-2]) == -2
min([2,0,1]) == 0
min([4,3,-4]) == -4
*/
const min = function (list) {
    if (longitud(list) == 1) {
        return first(list);
    } else {
        return Math.min(first(list), min(rest(list)));
    }
}



/*
3. Invierta una lista.
 Contrato last: list->number.
Propósito: Función que dada una lista retorna el último elemento de ella.
Cuerpo de función: const last = function(list)
*/
const last = function (list) {
    if (longitud(list) == 1) {
        return first(list);
    } else {
        return last(rest(list));
    }
}


/*
Contrato principio: list->list.
Propósito: Función que dada una lista retorna esa misma lista pero sin su último elemento.
Cuerpo de función: const principio = function(list)
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
/*)
Contrato invertir: list->list.
Propósito: Función que dada una lista retorna su lista invertida.
Cuerpo de función: const invertir = function(list)
*/
const invertir = function (list) {
    if (isEmpty(list)) {
        return [];
    } else {
        return cons(last(list), invertir(principio(list)));
    }
}
/*
4. Ordene de manera ascendente una lista.
Contrato listaResto: list->list.
Propósito: Función que borra el menor elemento de una lista dada.
Cuerpo de funcion: ListaResto = function(list)
*/
const listaResto = function (list) {
    if (isEmpty(list)) {
        return [];
    } else {
        if (first(list) == min(list)) {
            return rest(list);
        } else {
            return cons(first(list), listaResto(rest(list)))
        }
    }
}

/*
Contrato función ordenar: list->list
Propósito: Función que dada una lista, la ordena de manera ascendente.
Cuerpo de función: const ordenar = function(list)
*/
const ordenar = function (list) {
    if (isEmpty(list)) {
        return []
    } else {
        return cons(min(list), ordenar(listaResto(list)))
    }
}
const ordenarDes = function(list){
    if(isEmpty(list)){
        return [];
    }else{
        return cons(mayor(list),ordenarDes(listaRestoMayor(list)))
    }
}
/*
Ordenar lista descendente.
*/

/*
5. Genere la lista de los primeros n términos de la serie de Fibonacci.
Contrato Función Fibo: número -> lista
Propósito: Generar la función fibonacci en una lista a partir de un numero n.
*/

const fibLista = function (n) {
    if (n == 0) {
        return [1];
    }
    if (n == 1) {
        return [1, 1];
    } else {
        return cons(fib(n), fibLista(n - 1));
    }
}
/*
Contrato función fib: number -> list.
Propósito: Función que dado un número el número n de la lista Fibonacci.
Cuerpo de función: const fib = function(n)
*/
const fib = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
/*
6. Dada una lista, eliminar todos los elementos que no sean números.
Contrato eliminar: list->list
Propósito: Función que recibe una lista y devuelve una lista con sólo los datos númericos
que ya estaban en ella.
Cuerpo de función: const eliminar = function(list)
*/
const eliminar = function (list) {
    if (isEmpty(list)) {
        return [];
    }
    if (typeof (first(list)) == 'string') {
        return eliminar(rest(list));
    }
    else {
        return cons(first(list), eliminar(rest(list)));
    }
}


/*
7. Implemente una función que inserta un elemento x en la posición n de la lista, 
si n está entre 0 y la longitud lista. No hace nada en caso contrario.
Contrato añadir: number,number,list,number->list
Propósito: función que añade un número a la lista dada.
Cuerpo de función: const añadir = function(number,pos,list)
*/
const añadir = function (number, pos, list) {
    if (pos > longitud(list)) {
        return list;
    }
    if (isEmpty(list)) {
        return [];
    } else if (pos == 0) {
        return cons(number, list);
    } else {
        return cons(first(list), añadir(number, pos - 1, rest(list)))
    }
}
/*
8. Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra
un número x dado, si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para
mantener la lista ordenada.
Contrato posicion: list,number->number.
Propósito: función que dice en  qué posición se debería agregar un número para que ésta
siga ordenada. *Si y sólo si la lista está ordenada ascendentemente.*
Cuerpo función: const posicion = function(list,number)
*/
const posicion = function (list, number) {
    if (isEmpty(list)) {
        return 0;
    }

    if (first(list) >= number) {
        return 0;
    } else {
        return 1 + posicion(rest(list), number);
    }

}
/*
Contrato posicion: list,number->number.
Propósito: Función que retorna la posición del número n en la lista o si no está, retorna
la posición en la que debería estar para que la lista siga ordenada. *Si y sólo si la lista está ordenada
descendentemente*
Cuerpo de función: const posicionDes = function(list, number)
*/
const posicionDes = function (list, number) {
    if (isEmpty(list)) {
        return 0;
    }
    if (first(list) > number) {
        return 1 + posicionDes(rest(list), number);
    } else {
        return 0;
    }

}

/*
Contrato buscarPos = list,number,number->number.
Propósito: función que recibe una lista y devuelve el índice del número buscado en
la lista ó en que posición debería estar ese número para que la lista esté ordenada. *Ya sea que la lista esté ordenada
ascendentemente ó descendentemente*
*/
const buscarPos = function (list, number) {
    if (first(list) > first(rest(list))) {
        return posicionDes(list, number);
    } else {
        return posicion(list, number);
    }
}
/*
9. Implemente una función que inserta datos en una lista que siempre está ordenada.
Contrato desordenar: list.list->list
Propósito: Juntar los elementos de dos listas desordenadamente.
Cuerpo de función: const desordenar = function(list1, list2)
*/
const desordenar = function (list1, list2) {
    if (isEmpty(list1)) {
        return list2;
    } else {
        return cons(first(list1), desordenar(rest(list1), list2));
    }
}
/*
Contrato aplicar: list, fx -> list
Propósito: Función que aplica una función a una lista dada.
Cuerpo de función: const aplicar = function(list,fx) 
*/ 
const aplicar = function(list,fx){
    return fx(list);
}

/*
10. Implemente una función que busca un elemento en una lista desordenada.
Contrato buscarElemento: list,number->boolean
Propósito: Función que devuelve true si el número digitado está en la lista ó false
si no está en ella.
Cuerpo de función: const buscarElemento = function(list,number)
*/

const buscarElemento = function (list, number) {
    if (isEmpty(list)) {
        return false;
    } else if (number == first(list)) {
        return true;
    } else {
        return buscarElemento(rest(list), number)
    }
}
/*
11. Implemente una función que elimina el elemento n de la lista
 Contrato borrarElemento: list,number->list
 Propósito: Función que borrar el elemento n de una lista.
*/
const borrarElemento = function (list, number) {
    if (isEmpty(list)) {
        return [];
    } else if (number == first(list)) {
        return rest(list);
    } else {
        return cons(first(list), borrarElemento(rest(list), number))
    }
}


/*
13. Implemente una función que busca todos los números mayores que un cierto valor x. 
La función debe retornar una lista con los elementos encontrados.

Contrato función mayorQue = list,number->list.
Propósito: función que recibe una lista y número y devuelve los elementos de esa lista que son mayores
a ese número.
Cuerpo: const mayorQue = function(list,number)
Ejemplos: mayorQue([1,4,9,0],2) == [4,9]
mayorQue([0,1],2) == [];
mayorQue([2],2) == [];
*/
const mayorQue = function (list, number) {
    if (isEmpty(list)) {
        return [];
    }
    if (first(list) > number) {
        return cons(first(list), mayorQue(rest(list), number));
    } else {
        return mayorQue(rest(list), number);
    }
}


/*
14. Implemente una función que busca todos los números mayores que un cierto valor x. 
La función debe retornar una lista con los elementos encontrados
Contrato funcion par: número->valor booleano.
Propósito: función que dado un número retorne true si es par o false si no.
Cuerpo función: const par = function(n)
Ejemplos: par(2) == true
par(5) == false
par(7) == false
par(4) == true
par(-4) == true
*/
const par = function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
/*
Contrato función condicionPar: lista,función->lista.
Propósito: Función que dada una lista retorna una lista con sus elementos pares.
Cuerpo función: const condicionPar = function(list)
Ejemplos: condicionPar([4,5,6,8],par) == [4,6,8]
condicionPar([3,10,18],par) == [10,18]
condicionPar([4,2,3],par) == [4,2]
*/

const condicionPar = function (list, fx) {
    if (isEmpty(list)) {
        return [];
    }
    if (fx(first(list)) == true) {
        return cons(first(list), condicionPar(rest(list), fx));
    } else {
        return condicionPar(rest(list), fx);
    }
}
/*
15. Implemente una función que aplica una función data a todos los elementos de una lista(map). 
Contrato funcion map: lista,función -> list
Cuerpo de función: const map = function(list,fx)
Ejemplos:
map([4,5,6],sumar1) == [5,6,7]
map([2,4,3],sumar1) == [3,5,4]
*/
const map = function (list, fx) {
    if (isEmpty(list)) {
        return [];
    } else {
        return cons(fx(first(list)), map(rest(list), fx));
    }
}
module.exports = {
    last, mayor, principio, invertir, listaResto, ordenar, fibLista, fib, eliminar,
    añadir, longitud, posicion, posicionDes,buscarPos,desordenar,aplicar,buscarElemento,borrarElemento,mayorQue,
    par, condicionPar,map,min
}

//////////////////////////////////////// Parte II ///////////////////////////////////////////
//Instancias de las canciones.
const musica = [{nombre: "Wish you were gay" , album: "When we fall asleep" , artista: "Billie" , duracion: 240 , estrellas: 5 },
{nombre: "Bye bye beautiful" , album: "Fly" , artista: "Nightwish" , duracion: 250 , estrellas: 5},
{nombre: "Ride" , album:"Born to Die" , artista: "Lana del Rey" , duracion: 280 , estrellas: 5},
{nombre: "Jungle" , album: "Forest" , artista: "Tash Sultana" , duracion: 350 , estrellas: 4},
{nombre: "Boris" , album: "Mutual Friends" , artista: "Boy" , duracion: 220 , estrellas: 2},
{nombre: "Happy" , album: "Happy" , artista: "Pharrell Williams" , duracion: 240 , estrellas: 1},
{nombre: "Come out and play" , album: "Come out and play" , artista: "Billie" , duracion: 250 , estrellas: 3},
{nombre: "Feel good" , album: "Chill out" , artista: "Gorillaz" , duracion:  350 , estrellas: 4},
{nombre: "Eastside" , album: "Eastside" , artista: "Halsey" , duracion: 180 , estrellas: 4},
{nombre: "Sagan" , album: "Fly" , artista: "Nightwish" , duracion: 350 , estrellas: 5}
]

/*
1. . Búsqueda de canción por nombre de canción. Debe retornar una canción o
vacío en caso de no encontrarla.
*/
const busquedaCancion = function(list,nombre){
    if(isEmpty(list)){
        return [];
    }else if((first(list).nombre)===nombre){
        return first(list).nombre;
    }else{
        return busquedaCancion(rest(list),nombre);
    }
}

/*
2. Búsqueda de canciones por artista. Debe retornar una lista de canciones o
empty
*/
const busquedaArtista = function(list,artist){
    if(isEmpty(list)){
        return [];
    }else if((first(list).artista)===artist){
        return cons(first(list),busquedaArtista(rest(list),artist));
    }else{
        return busquedaArtista(rest(list),artist);
    }
}

/*
3. Duración de la lista de reproducción en el formato “horas:minutos:segundos”
*/
const sumaDuracion = function(list){
    if(isEmpty(list)){
        return 0;
    }else{
        return first(list).duracion+sumaDuracion(rest(list));
    }
}
const convertirHoras = function(list){
    return Math.floor(sumaDuracion(list)/3600);
}

const convertirMinutos = function(list){
    return (sumaDuracion(list)-(convertirHoras(list)*3600))/60;
}

const convertirSegundos = function(list){
    return Math.round((convertirMinutos(list)-Math.floor(convertirMinutos(list)))*60);
}

const unirFormato = function(list){
    return convertirHoras(list)+' h : '+Math.floor(convertirMinutos(list))+' m : '+convertirSegundos(list)+' s'
}

/*
4. Todas las canciones con al menos menos de 2 estrellas
*/
const Menos2Estrellas = function(list){
    if(isEmpty(list)){
        return [];
    }else if((first(list).estrellas)<=2){
        return cons(first(list).nombre,Menos2Estrellas(rest(list)));
    }else{
        return Menos2Estrellas(rest(list));
    }
}
/*
5.  Todas las canciones con 5 estrellas
*/
const Estrellas5 = function(list){
    if(isEmpty(list)){
        return [];
    }else if((first(list).estrellas)===5){
        return cons(first(list).nombre,Estrellas5(rest(list)));
    }else{
        return Estrellas5(rest(list));
    }
}
/*
6. Imprima los títulos de las canciones y su duración.
*/
const TituloDuracion = function(list){
    if(isEmpty(list)){
        return [];
    }else{
        return desordenar([{nombre: first(list).nombre , duracion: first(list).duracion }],TituloDuracion(rest(list)));
    }
}
/*
7. Crear la lista de mejor a peor canción
*/
const mayorObj = function (list) {
    if (longitud(list) == 1) {
        return first(list).estrellas;
    } else {
        return Math.max(first(list).estrellas, mayorObj(rest(list)));
    }
}

const nombre = function(list){
    if(isEmpty(list)){
        return [];
    }else if(mayorObj(list)==(first(list).estrellas)){
        return first(list);
    }else{
        return nombre(rest(list));
    }
}
function borrarmayor(list){
    if(isEmpty(list)){
      return [];
    } else if(first(list).estrellas==mayorObj(list)){
      return rest(list);
    }   else {
      return cons(first(list),borrarmayor(rest(list)));
    }
  }
  function descen(list){
    if(isEmpty(list)){
      return [];
    } else {
      return cons(nombre(list),descen(borrarmayor(list)));
    }
  }
  /*
 8.  Eliminar la n-ésima canción
  */

  const borrarObj = function(list,n){
      if(isEmpty(list)){
          return [];
      }else if(n==0){
        return rest(list);
      }else{
          return cons(first(list),borrarObj(rest(list),n-1));
      }
  }

  console.log(borrarObj(musica,9));


