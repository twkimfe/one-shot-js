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
let colors = {
  c1: "red",
  c2: "green",
  c3: "blue",
};

// 객체의 요소 key값 변경
// let { c1: color1, c2: color2, c3: color3 } = colors;
// 객체의 추가 요소 분해 할당
let { c1, c2, c3, c4 = "black" } = colors;

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
