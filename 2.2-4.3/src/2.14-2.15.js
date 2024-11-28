// 2.14 배열 메서드 - 1
// let arr = [1, 2, 3, 4, 5];

// arr.forEach 메서드
// 메개변수로 배열의 각 요소를 함수로 전달하는 함수
// arr.forEach((elm) => {
//   console.log(elm);
// });

// 메개변수로 배열의 각 요소 순서를 함수로 전달하는 법
// arr.forEach((elm, idx) => {
//   console.log(`${idx}번째 요소는 ${elm}입니다.`);
// });

// 메개변수로 배열 자체를 함수로 전달하는 법
// arr.forEach((elm, idx, array) => {
//   console.log(`${idx}번째 요소는 ${elm}입니다.`);
//   console.log(array);
// });
// forEach는 for문을 대신하여 여러 배열 기능을 수행

// arr.map 메서드
// 배열 안의 모든 요소를 변환하는 메서드
// 전달한 콜백함수의 호출한 결과를 모아서 새로운 배열로 반환해주는 메서드, elm, idx, arr 모드 사용 가능
// let newArray = arr.map((elm) => {
//   return elm * 10;
// });
// console.log(newArray);

// arr.at 메서드
// 배열의 위치한 몇 번째 요소를 값으로 반환
// let colors = ["green", "red", "blue"];
// console.log(colors.at(1));

// arr.includes("elm", n) 메서드
// 배열 요소가 배열에 존재하는지, 배열 순서가 n번째 맞는 지 판단하고, true / false로 반환하는 메서드
// console.log(colors.includes("red", 3));
// console.log(colors.includes("red", 1));

// arr.indexOf("elm", n) 메서드
// 특정 값을 지닌 요소가 배열 몇 번째에 있는지 확인하는 메서드
// console.log(colors.indexOf("red"));
// console.log(colors.indexOf("grey"));
// 없는 값을 입력 시, "-1" 반환

// let colors = [
//   { id: 0, color: "red" },
//   { id: 1, color: "white" },
//   { id: 2, color: "blue" },
//   { id: 3, color: "yellow" },
//   { id: 4, color: "green" },
// ];

// 배열 모든 요소가 객체일 때, 해당 객체를 찾고, idx 값을 반환하는 메서드, 없을 시 -1 반환
// let idx = colors.findIndex((elm) => elm.color === "red");
// 요소, idx, 배열도 반환 가능
// colors.findIndex((elm, idx, array) =>
//   console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color} `)
// );
// colors.findIndex((elm, idx, array) => console.log(array));

// arr.find 메서드
// 배열에서 해당 객체 자체를 배열로 반환하는 메서드, 배열에 없다면 undefined 반환
// let idx = colors.find((elm) => elm.color === "blue");
// let filterArray = colors.filter((elm, idx, array) => elm.id > 0);
// console.log(filterArray);

// arr.slick(x,y) 메서드
// 배열에서 특정 값들만 따로 추출해서 새로운 배열을 생성하는 내장함수
// 원하는 부분만 잘라서 추출 가능
// x, y값은 idx값으로 x부터, y보다 1작은 요소를 추출함

// let sliceArray = colors.slice(1, 3);
// console.log(sliceArray);

// 2.15 배열 메서드 - 2
// arr.concat 메서드
// 두 배열을 한 배열로 만드는 메서드
// let arr1 = ["green", "blue"];
// let arr2 = ["purple", "red"];
// console.log(arr1.concat(arr2));

// arr.join 메서드
// 두 배열을 한 배열로 만들지만, 배열 요소 값들을 문자열로 기존 배열에 연결하고 붙인 후 문자로 반환하는 메서드
// console.log(arr1.join());
// console.log(arr1.join(" "));
// console.log(arr1.join(arr2));

// arr.sort 메서드
// 배열 안 요소를 알파벳 순으로 오름차순으로 정렬하는 메서드
// 숫자일 경우, 사전의 크기순으로 정렬, 숫자의 크기순으로 정렬하지 않음
// let colors = ["green", "red", "blue", {}, []];
// console.log(colors.sort());
// 내림차 순으로 배열할 경우, compare 함수를 따로 선언하고 진행해야 함

// const compare = (a, b) => {
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else return 0;
// };

// console.log(colors.sort(compare));
// const compare = (a, b) => {
//   return a - b;
// };
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);
// console.log(numbers.sort(compare));
// numbers.forEach((elm) => {
//   sum += elm;
// });

// arr.reduce
// 배열 각 요소의 함수를 실행하고, 누적된 값을 출력하는 메서드
console.log(sum);

// arr.isArray 메서드
// 전달된 매개변수가 배열인지 아닌지 판별하는 메서드
let a = Array.isArray([1, 29, 50]);
let b = Array.isArray({ id: 1, color: "red" });
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);
