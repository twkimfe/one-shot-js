// 2.6 함수
// Early return pattern
// function compare(num) {
//   if (num === 0) {
//     return "num의 값이 0입니다.";
//   }
//   if (num < 0) {
//     return "num의 값이 0보다 작습니다.";
//   }
//   if (num >= 10) {
//     return "num의 값이 10보다 크거나 같습니다.";
//   }
//   return "num의 값이 0보다 크고 10보다 작습니다.";
// }

// console.log(compare(15));

// 2.7 스코프 Scope
// 변수와 함수가 영향을 미치는 범위
// 전역, 지역
// let globalNum = 100;
// 전역 변수

// function testFunc() {
//   let innerNum = 50;
//   지역 변수
//   console.log(globalNum);
//   console.log(innerNum);
// }
// testFunc();
// console.log(globalNum);
// console.log(innerNum);

// 함수 스코프, 블록 스코프
// let선언: 블록 스코프
// var선언: 함수 스코프

// 2.8 호이스팅
// 함수 호이스팅
// 함수가 가진 스코프를 가장 위쪽으로 끌어올려서 해석하는 자바스크립트의 작동방식

// 변수 호이스팅
// case1 let, const 변수 선언
// console.log(num1);
// let num1 = 123;
// -> 에러 반환 (변수 선언 안됨)
// let, const 선언은 변수의 초기화가 완료될 때까지 TDZ (Temporal Dead Zone, 일시적 사각지대, 변수 사용을 허용하지 않는 공간)에 배정됨

// case2 var 변수 선언
// console.log(num2);
// var num2 = 123;
// -> undefined 반환 (var num, 선언문만 먼저 실행, num = 123, 초기값 미실행)

// var는 변수가 생성되면 바로 메모리에 변수 공간을 할당,
// 하지만 let, const는 변수가 초기화 될 때까지 메모리 공간이 확보되지 않음

// 2.9 함수 표현식과 화살표 함수
// 화살표  함수
// ES6 이후 생긴 문법, 기존 함수 선언방식보다 훨씬 간결함

// 함수 선언식과 함수 표현식
// 함수 선언식
// function 키워드 옆에 함수의 이름 작성

// 함수 표현식 (화살표 함수도 함수 표현식 중 일종)
// 변수에 함수를 마치 하나의 값처럼 할당

// 함수 선언식 & 함수 표현식 차이점
// 1. 호이스팅 차이
// 둘의 가장 큰 차이는 호이스팅 차이
// 함수 선언식은 함수의 위치랑 상관없이 자동으로 호이스팅이 되어 에러 발생 안 함
// 함수 표현식은 변수 호이스팅처럼 변수의 선언 부분만 호이스팅이 되어서 에러 발생

// 2. 함수 이름
// 함수 선언식은 함수 이름을 선언,
// 하지만 함수 표현식은 익명 함수를 선언하고 해당 함수를 변수처럼 할당함
// 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(10, 20));

// 콜백 함수
// // 아래 함수에서 매개로 전달된 함수는 콜백함수
// const testFunc = (callback) => {
//   callback();
// };

// testFunc(() => {
//   console.log("콜백 함수 테스트");
// });