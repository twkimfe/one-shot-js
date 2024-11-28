// 2.16 배열과 객체 구조 분해 할당
// 구조 분해 할당은 배열이나 객체 요소 및 프로퍼티들을 분해해,
// 그 값들을 각각의 변수에 할당하는 자바스크립트의 표현식

// 배열의 구조 분해 할당
// let c1, c2, c3;
// 선언 분리 할당
// [c1, c2, c3, c4 = "white"] = ["green", "red", "blue"];

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// 구조 분해 할당로 편리하게 두 변수 교환
// let a = 10;
// let b = 20;
// [a, b] = [b, a];

// console.log(a, b);

// 객체의 구조 분해 할당
// let colors = {
//   c1: "red",
//   c2: "green",
//   c3: "blue",
// };

// 객체의 요소 key값 변경
// let { c1: color1, c2: color2, c3: color3 } = colors;
// 객체의 추가 요소 분해 할당
// let { c1, c2, c3, c4 = "black" } = colors;

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// 2.17 spread & rest
// spread 문법 (...arry)
// 특정 배열의 요소나 객체의 프로퍼티를 확산 하는 메서드

// 예시 1
// const toy = {
//   type: "bear",
//   price: 15000,
// };
// const blueToy = {
//   ...toy,
//   color: "blue",
// };
// const yellowToy = {
//   ...toy,
//   color: "yellow",
// };
// console.log(blueToy);
// console.log(yellowToy);

// 예시 2
// const color1 = ["red", "orange", "yellow"];
// const color2 = ["blue", "navy", "purple"];
// const rainbow = [...color1, "green", ...color2];
// console.log(rainbow);

// rest 문법 (...obj)
// 나머지 매개 변수를 하나의 객체나 배열로 묶어주는 문법

// 예시 1
// const blueToy = {
//   type: "bear",
//   price: "1000",
//   color: "blue",
// };
// const { type, ...rest } = blueToy;
// console.log(type);
// console.log(rest);

// rest문법은 순서 상관 없이 맨 뒤에 위치하지 않을 경우 에러 발생함

// 예시 2
// const colors = ["red", "orange", "yellow", "navy"];
// const [c1, c2, ...rest] = colors;
// console.log(c1, c2);
// console.log(rest);

// rest 함수 매개변수에서 사용법
// const print = (a, b, ...rest) => {
//   console.log([a, b, rest]);
// };

// print(1, 2, 3, 4, 5, 6);

// 활용 사례
const print = (...rest) => {
  console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers);
