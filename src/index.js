// 2.2 변수와 상수
let useInfo;
const EMAIL_ADDRESS = "123@gmail.com";

// 2.3 자료형과 형 변환
// typeof 연산자
// let num = 10;
// console.log(typeof num);
// -> number 반환

// 숫자형 number
// let num1 = 123;
// let num2 = 100 / 0;
// console.log(num2);
// -> Infinity 반환

// NaN (Not a Number)
// 숫자가 아닌 부정확한 값

// BigInt
// 2^53-1 보다 크거나 -(2^53-1) 보다 작은 값

// 문자형 string
let name = "hyobin";
let intro = `제 이름은 ${name} 입니다`;
// -> 템플릿 리터럴 형식

// boolean형
// true / false로 나뉜 연산자
// let isClicked = false;

// if (isClicked) {
//   console.log("o");
// } else {
//   console.log("x");
// }
// -> x 반환

// Null 자료형
// 존재 X, 알 수 없는 값이라는 뜻

// Undefined 자료형
// 값이 할당되지 않은 상태

// 형 변환
// 자바스크립트의 변수 선언
// 동적 타입 언어
let num = "100";
console.log(typeof num);
// num 자료형이 알아서 string으로 변환
num = 100;
console.log(typeof num);
// 자료형이 자동으로 number로 변환

// 묵시적 형변환
let num1 = "15";
let num2 = 5;
console.log(num1 / num2);
// 자동으로 num1을 string에서 number로 변환 후 연산

// 명시적 형변환
// - , * , / 연산자는 string-> number로 변환
// + 연산자는 number-> string으로 변환
// parseInt() -> 문자열을 숫자로 변환하는 함수
