const a = (function () {
  return [1, 2, 3, 4, 5].reduce((acc, v, index) => (acc[index] = v * 2, acc), [])
})()

// console.log(a)


let x = 0

// これなんなん？
// console.log((x += 1, x += 2, x))

// これかよー
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Comma_Operator
// カンマ演算子なんてしらねー
// まだビット演算子のほうがしってるわ

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators
// 一番下に書いてんじゃねーた

// すげえな


const initialValue = [100, 200]

const b = [1,2,3,4,5].reduce((accumulator, currentValue, index, array) => {
  console.log(currentValue, index, accumulator, array)
  return (accumulator.push(currentValue * 2), accumulator)
}, initialValue)

console.log(b)
