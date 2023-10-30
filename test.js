// function miniMaxSum(arr) {
//     // Write your code here
//     const sorted = arr.sort((a, b) => a - b )
//     const minSum = sorted.slice(0, sorted.length - 1).reduce((a, b) => a + b, 0)
//     const maxSum = sorted.slice(1).reduce((a, b) => a + b, 0)

//     return `${minSum}  ${maxSum}`
// }
// let test = miniMaxSum([1, 2, 3, 4, 5])
// console.log(test)
const arr = [1, 2, 3,4, 2, 4];
function birthdayCakeCandles(candles) {
  // Write your code here

  let max = candles[0],
    count = 0;
  for (let i = 1; i < candles.length; ++i) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }
  for (num of candles) num === max ? count++ : "";
  return count;
}
// console.log(arr.forEach((item,index) => console.log(index, item)))
let test = birthdayCakeCandles(arr);
console.log(test);
