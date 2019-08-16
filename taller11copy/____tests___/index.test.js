const { last, mayor, principio, invertir, listaResto, ordenar, fibLista, fib, eliminar,
    añadir, longitud, posicion, posicionDes, desordenar, aplicar, buscarElemento, borrarElemento,
    mayorQue,par, condicionPar,map,min
} = require('../src/ejercicioTaller');
test('mayor[1,4,2] => 4', () => {
    expect(mayor([1, 4, 2])).toBe(4);
});
test('last[2,4,0,-1] => -1 ', () => {
    expect(last([2, 4, 0, -1])).toBe(-1)
});
test('principio[4,2,7,6] => [4,2,7]', () => {
    expect(principio([4, 2, 7, 6])).toStrictEqual([4, 2, 7])
});
test('invertir([7,3,9,1]) => [1,9,3,7]', () => {
    expect(invertir([7, 3, 9, 1])).toStrictEqual([1, 9, 3, 7])
});
test('listaResto([4,9,-2,1,2]) => [4,9,1,2]', () => {
    expect(listaResto([4, 9, -2, 1, 2])).toStrictEqual([4, 9, 1, 2])
});
test('ordenar([4,6,0,7]) => [0,4,6,7]', () => {
    expect(ordenar([4, 6, 0, 7])).toStrictEqual([0, 4, 6, 7])
});
test('fibLista(4) => [5,3,2,1,1]', () => {
    expect(fibLista(4)).toStrictEqual([5, 3, 2, 1, 1]);
});
test('fib(4) => 5', () => {
    expect(fib(4)).toBe(5);
});
test('eliminar([hola,2,s,4,l,p]) => [2,4]', () => {
    expect(eliminar(['hola', 2, 's', 4, 'l', 'p'])).toStrictEqual([2, 4])
});
test('longitud([4,9,3,6]) => 4', () => {
    expect(longitud([4, 9, 3, 6])).toBe(4);
});

test('añadir(4,2,[4,3,0,7]) => [4,3,4,0,7]', () => {
    expect(añadir(4, 2, [4, 3, 0, 7])).toStrictEqual([4, 3, 4, 0, 7]);
});
test('posicion([2,3,4,8],4) => 2 ', () => {
    expect(posicion([2, 3, 4, 8], 4)).toBe(2);
});
test('posicionDes([7,6,4,2],3) => 3', () => {
    expect(posicionDes([7, 6, 4, 2], 3)).toBe(3)
});
test('desordenar([1,7],[5,0]) => [1,7,5,0]', () => {
    expect(desordenar([1, 7], [5, 0])).toStrictEqual([1, 7, 5, 0])
})
test('aplicar([4,7], x => x + 1) => [5,8]', () => {
    expect(aplicar([4, 7], x => x + 1)).toStrictEqual[5, 8]
})
test('buscarElemento([5,6,2],2) => true', () => {
    expect(buscarElemento([5, 6, 2], 2)).toBe(true)
})
test('borrarElemento([4,3,7,0],7) => [4,3,0]', () => {
    expect(borrarElemento([4, 3, 7, 0], 7)).toStrictEqual([4, 3, 0])
})
test('mayorQue([4,0,4,2,3],2) => [4,4,3]', () => {
    expect(mayorQue([4, 0, 4, 2, 3], 2)).toStrictEqual([4, 4, 3])
})
test('par(5) => false ', () => {
    expect(par(5)).toBe(false)
})
test('condicionPar([4, 3, 7, 8, 6],par) => [4, 8, 6]',() => {
    expect(condicionPar([4, 3, 7, 8, 6],par)).toStrictEqual([4, 8, 6])
})
test('map([4,3,2],suma1) => [5,4,3]', () =>{
    expect(map([4, 3, 2],x => x + 1)).toStrictEqual([5, 4, 3])
})
test('min([4,6,0,-8,-10]) => -10', () => {
    expect(min([4, 6, 0, -8, -10])).toBe(-10)
})
