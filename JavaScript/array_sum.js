const numbers = [1, -1, 2, 3];

// 첫 번째 방법: reduce 사용
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

// 두 번째 방법: for-of 루프 사용 (변수명을 sum2 등으로 변경해야 함)
let sum2 = 0;
for (let n of numbers)
    sum2 += n;

console.log(sum);
console.log(sum2);