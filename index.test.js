
const { mayor,longitud } = require("../src/index")
test("mayor to [1,2,3] gives 3",() => {
  expect (mayor([1,2,3])).toBe(3)
})

const { promedio,suma } = require("../src/index")
test("promedio to [1,2,3] gives 2",() => {
  expect (promedio([1,2,3])).toBe(2)
})

const { concatenar } = require("../src/index")
test("concatenar to ([1,2,3],[4,5,6]) gives [1,2,3,4,5,6]",() => {
  expect (concatenar([1,2,3],[4,5,6])).toStrictEqual([1,2,3,4,5,6])
})

const { ultimo,elPrincipio,invertir } = require("../src/index")
test("invertir to [1,2,3] gives [3,2,1]",() => {
  expect (invertir([1,2,3])).toStrictEqual([3,2,1])
})

const { menor,borrarmenor,ascendente } = require("../src/index")
test("ascendente to [4,9,1,7,2] gives [1,2,4,7,9]",() => {
  expect (ascendente([4,9,1,7,2])).toStrictEqual([1,2,4,7,9])
})

const { fibo,listafibo,invertirfibo } = require("../src/index")
test("invertirfibo to (5) gives [1,1,2,3,5,8]",() => {
  expect (invertirfibo(5)).toStrictEqual([ 1, 1, 2, 3, 5, 8 ])
})

const { solonum} = require("../src/index")
test("solonum to ([5,6,j,8]) gives [ 5, 6, 8 ]",() => {
  expect (solonum([5,6,"j",8])).toStrictEqual([ 5, 6, 8 ])
})

const { agregarx } = require("../src/index")
test("agregarx to (10,[5,6,8],2) gives [ 5, 6, 10, 8 ]",() => {
  expect (agregarx(10,[5,6,8],2)).toStrictEqual([ 5, 6, 10, 8 ])
})

const { liascendente,lidescendiente,indice } = require("../src/index")
test("indice to (10,[9,8,7]) gives 0",() => {
  expect (indice(10,[9,8,7])).toBe(0)
})

const { agregarordenar,descen,borrarmayor} = require("../src/index")
test("agregarordenar to ([10,11],[3,2,1]) gives [11,10,3,2,1]",() => {
  expect (agregarordenar([10,11],[3,2,1])).toStrictEqual([11,10,3,2,1])
})

const { buscarx} = require("../src/index")
test("buscarx to (5,[1,2,5]) gives true",() => {
  expect (buscarx(5,[1,2,5])).toBe(true)
})

const { borrarn } = require("../src/index")
test("borrarn to (5,[1,2,5]) gives [1,2]",() => {
  expect (borrarn(5,[1,2,5])).toStrictEqual([1,2])
})

const { mayores } = require("../src/index")
test("mayores to (2,[4,7,1,0]) gives [4,7]",() => {
  expect (mayores(2,[4,7,1,0])).toStrictEqual([4,7])
})

const { pares,condicion } = require("../src/index")
test("condicion to ([1,2,3,4,5,6],pares) gives [2,4,6]",() => {
  expect (condicion([1,2,3,4,5,6],pares)).toStrictEqual([2,4,6])
})

const { mapeo} = require("../src/index")
test("mapeo to ([1,2,3],(x)=>{return x*x}) gives [ 1, 4, 9 ]",() => {
  expect (mapeo([1,2,3],(x)=>{return x*x})).toStrictEqual([ 1, 4, 9 ])
})

const { busquedaCancion,musica } = require("../src/index")
test("busquedaCancion  to (musica,Sagan) gives Sagan",() => {
  expect (busquedaCancion (musica,"Sagan")).toStrictEqual("Sagan")
})

const { busquedaArtista} = require("../src/index")
test("busquedaArtista  to (musica,Nightwish) gives [ 'Bye bye beautiful', 'Sagan' ]",() => {
  expect (busquedaArtista (musica,"Nightwish")).toStrictEqual([ 'Bye bye beautiful', 'Sagan' ])
})

const { sumaDuracion,convertirHoras,convertirMinutos,convertirSegundos,unirFormato } = require("../src/index")
test("unirFormato  to (musica) gives 0 h : 45 m : 10 s",() => {
  expect (unirFormato (musica)).toStrictEqual("0 h : 45 m : 10 s")
})

const { Menos2Estrellas } = require("../src/index")
test("Menos2Estrellas to (musica) gives [ 'Boris', 'Happy' ]",() => {
  expect (Menos2Estrellas (musica)).toStrictEqual([ 'Boris', 'Happy' ])
})

const { Estrellas5 } = require("../src/index")
test("Estrellas5 to (musica) gives [ 'Wish you were gay', 'Bye bye beautiful', 'Ride', 'Sagan' ]",() => {
  expect (Estrellas5(musica)).toStrictEqual([ 'Wish you were gay', 'Bye bye beautiful', 'Ride', 'Sagan' ])
})

const { TituloDuracion} = require("../src/index")
test("TituloDuracio to (musica) gives [ { nombre: 'Wish you were gay', duracion: 240 },{ nombre: 'Bye bye beautiful', duracion: 250 },{ nombre: 'Ride', duracion: 280 },{ nombre: 'Jungle', duracion: 350 },{ nombre: 'Boris', duracion: 220 },{ nombre: 'Happy', duracion: 240 },{ nombre: 'Come out and play', duracion: 250 },{ nombre: 'Feel good', duracion: 350 },{ nombre: 'Eastside', duracion: 180 },{ nombre: 'Sagan', duracion: 350 ] ",() => {
  expect (TituloDuracion(musica)).toStrictEqual([
    { nombre: 'Wish you were gay', duracion: 240 },
    { nombre: 'Bye bye beautiful', duracion: 250 },
    { nombre: 'Ride', duracion: 280 },
    { nombre: 'Jungle', duracion: 350 },
    { nombre: 'Boris', duracion: 220 },
    { nombre: 'Happy', duracion: 240 },
    { nombre: 'Come out and play', duracion: 250 },
    { nombre: 'Feel good', duracion: 350 },
    { nombre: 'Eastside', duracion: 180 },
    { nombre: 'Sagan', duracion: 350 }
  ])
})

const { mayorObj,nombre,borrarmayorlist,descenlist } = require("../src/index")
test("descenlist to (musica) gives [{nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',artista: 'Nightwish',duracion: 250,estrellas: 5}, {nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},{nombre: 'Sagan', album: 'Fly',artista: 'Nightwish',duracion: 350,estrellas: 5},{nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,estrellas: 4}, {nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,estrellas: 4},{nombre: 'Eastside',album: 'Eastside',artista: 'Halsey',duracion: 180,estrellas: 4},{nombre: 'Come out and play',album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},{ nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',duracion: 220, estrellas: 2},{ nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,estrellas: 1 }]",() => {
  expect (descenlist(musica)).toStrictEqual([
    {nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',
      artista: 'Nightwish',duracion: 250,estrellas: 5}, {nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},
    {nombre: 'Sagan', album: 'Fly',artista: 'Nightwish',duracion: 350,estrellas: 5},{nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,
      estrellas: 4}, {nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,estrellas: 4},{nombre: 'Eastside',album: 'Eastside',
      artista: 'Halsey',duracion: 180,estrellas: 4},{nombre: 'Come out and play',album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},
    { nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',duracion: 220, estrellas: 2},{ nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,
      estrellas: 1 }
  ])
})

const { borrarObj} = require("../src/index")
test("borrarObjto (musica,9) gives [{nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',artista: 'Nightwish',duracion: 250,estrellas: 5},{nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},{nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,estrellas: 4},{nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',duracion: 220,estrellas: 2},{nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,estrellas: 1},{nombre: 'Come out and play',album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},{nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,estrellas: 4},{nombre: 'Eastside',album: 'Eastside',artista: 'Halsey',duracion: 180, estrellas: 4}]",() => {
  expect (borrarObj(musica,9)).toStrictEqual([
    {nombre: 'Wish you were gay',album: 'When we fall asleep',artista: 'Billie',duracion: 240,estrellas: 5},{nombre: 'Bye bye beautiful',album: 'Fly',
      artista: 'Nightwish',duracion: 250,estrellas: 5},{nombre: 'Ride',album: 'Born to Die',artista: 'Lana del Rey',duracion: 280,estrellas: 5},
    {nombre: 'Jungle',album: 'Forest',artista: 'Tash Sultana',duracion: 350,estrellas: 4},{nombre: 'Boris',album: 'Mutual Friends',artista: 'Boy',
      duracion: 220,estrellas: 2},{nombre: 'Happy',album: 'Happy',artista: 'Pharrell Williams',duracion: 240,estrellas: 1},{nombre: 'Come out and play',
      album: 'Come out and play',artista: 'Billie',duracion: 250,estrellas: 3},{nombre: 'Feel good',album: 'Chill out',artista: 'Gorillaz',duracion: 350,
      estrellas: 4},{nombre: 'Eastside',album: 'Eastside',artista: 'Halsey',duracion: 180, estrellas: 4}
  ])
})