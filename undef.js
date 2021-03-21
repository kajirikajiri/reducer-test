const a = [1, 2, 3, 4].reduce((acc, curent, index) => undefined)
const b = [1, 2, 3, 4].reduce((acc, curent, index) => null)
const c = [1, 2, 3, 4].reduce((acc, curent, index) => {
  console.log(acc, curent, index)
  if (index === 2) {
    return acc
  } else {
    return (acc.push(curent), acc)
  }
}, [])

console.log(a, b, c)

const f= [null,undefined, , 1, false, 0]
f.reduce((a, c, i) => console.log(i, '---', a, c))

// 1 --- null undefined
// 3 --- undefined 1
// 4 --- undefined false
// 5 --- undefined 0

// nullはスルー
// undefinedは入る
// emptyはスルー
// なんでnullが初期値に入ってんだと思ったら、
// callback の最初の呼び出しの最初の引数として使用する値。initialValue が与えられなかった場合、配列の最初の要素がアキュムレーターの初期値として使用され、currentValue としてスキップされます。空の配列に対して reduce() を呼び出した際、initialValue が指定されていないと TypeError が発生します。

// こういうことか。配列の最初の要素がアキュムレータの初期値。そして、currentValueとしてスキップ。なるほどね。つまりnullがスルーされたんじゃない。emptyしかスルーされない。なのでnullの配列ならok

const aaa= [null, null,null]
aaa.reduce((a,c,i) => console.log(a,c,i))

// null null 1
// undefined null 2

// 予想通り。最初は初期値のnullが入って来る。てことは下記は同義。

const aaaa = [1,2,3]

aaa.reduce((a,c,i)=>console.log(a,c,i), [])

const aaaaa = [[],1, 2,3]

aaa.reduce((a,c,i)=>console.log(a,c,i))

// じゃねえな。indexがずれるのか