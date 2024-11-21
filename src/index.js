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
