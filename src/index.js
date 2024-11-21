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
// let num = "100";
// console.log(typeof num);
// num 자료형이 알아서 string으로 변환
// num = 100;
// console.log(typeof num);
// 자료형이 자동으로 number로 변환

// 묵시적 형변환
// let num1 = "15";
// let num2 = 5;
// console.log(num1 / num2);
// 자동으로 num1을 string에서 number로 변환 후 연산

// 명시적 형변환
// - , * , / 연산자는 string-> number로 변환
// + 연산자는 number-> string으로 변환
// parseInt() -> 문자열을 숫자로 변환하는 함수

// 2.4 연산자
// 산술 연산자
// let num1 = 10;
// let num2 = 5;

// console.log(num1 % 2);
// console.log(num2 % 2);
// num1 % 2 -> 0 반환
// num2 % 2 -> 1 반환

// ++ , --
// let num1 = 10;

// console.log(num1++); 후위 연산자
// console.log(num1);
// console.log(++num1); 전위 연산자
// num1++ -> 10
// num1 -> 11
// ++num1 -> 12

// 대입 연산자
// =

// 복합 대입 연산자
// += , -=, *=, /=, %=

// 비교 연산자
// 일치 비교
// === , ==

// 불일치 비교
// !== , !=

// 대소 비교
// < , > , <= , >=

// 연결 연산자
//  + (문자열끼리 사용 시 연결 연산자로 작용)

// 논리 연산자
// true , false 값 반환
// NOT OR AND 연산자 3가지 있음

// NOT 연산자 !
// false-> true, true-> false
// let isClicked = true;
// console.log(!isClicked);

// OR 연산자 ||
// 1. console.log(true || true);
// 2. console.log(true || false);
// 3. console.log(false || true);
// 4. console.log(false || false);

// 1 -> true
// 2 -> true
// 3 -> true
// 4 -> false

// AND 연산자 &&
// 1. console.log(true && true);
// 2. console.log(true && false);
// 3. console.log(false && true);
// 4. console.log(false && false);

// 1 -> true
// 2 -> false
// 3 -> false
// 4 -> false

// Null 병합 연산자 ??
// A ?? B
// let num1;
// let num2 = 10;

// console.log(num1 ?? 20);
// console.log(num2 ?? 20);

// num1 ?? 20 -> 20 반환
// num2 ?? 20 -> 10 반환
// 기본 값 할당을 원할 때 사용

// 삼항 연산자
// A ? B : C

// 2.5 조건문
// if문
// let num = 50;

// if (num < 10) {
//   console.log("num은 10보다 작습니다.");
// } else if (num > 10) {
//   console.log("num은 10보다 큽니다.");
// } else {
//   console.log("num은 10입니다.");
// }

// switch case문
// let fruit = "apple";

// switch (fruit) {
//   case "banana":
//     console.log("바나나");
//     break;
//   case "apple":
//     console.log("사과");
//     break;
//   case "orange":
//     console.log("오렌지");
//     break;
//   case "grape":
//     console.log("포도");
//     break;
//   default:
//     console.log("다른 과일");
// }

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
