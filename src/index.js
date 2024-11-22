// 2.2 변수와 상수
// let useInfo;
// const EMAIL_ADDRESS = "123@gmail.com";

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
// let name = "hyobin";
// let intro = `제 이름은 ${name} 입니다`;
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

// 2.10 객체 Object
// 비원시 타입 자료형, 한번에 여러 개의 자료를 저장할 수 있는 자료형

// 객체 생성법
// 생성자 함수, 객체 리터럴 두 가지로 생성
// 생성자 함수
// -> let obj = new Object();
// 객체 리터럴
// -> let obj = {};

// 객체 프로퍼티
// key value 쌍으로 이룬 데이터
// let book = {
//   title: "JS 첫걸음",
//   author: "ktw",
//   category: "JS",
//   year: undefined,
//   color: function () {
//     console.log("red");
//   },
// };

// 객체 프로퍼티 사용법
// 점 표기법 & 괄호 표기법
// 점 표기법
// console.log(book.title);
// console.log(book.year);

// 괄호 표기법
// console.log(book.color);
// console.log(book["author"]);

// 보통 점 표기법 사용, 객체 키 값이 고정적이지 않고,
// 특정 함수의 매개 변수에 따라 키 값을 계속 변경해야 할 때
// 괄호 표기법을 사용
// const getValue = (key) => {
//   console.log(book[key]);
// };

// getValue("color");

// 프로퍼티 수정 & 삭제
// 수정은 따로 점 표기법, 괄호 표기법으로 수정 가능
// 삭제법
// delete book.title;
// delete book["color"];

// console.log(book);

// 2.11 배열 Array
// 순서가 있는 요소들의 집합, 여러 개의 데이터가 모여 있는 리스트
// 배열 생성법
// 생성자 함수, 객체 리터럴 두 가지로 생성
// 생성자 함수
// -> let arr = new Array();
// 객체 리터럴
// -> let arr = [];
// 배열 내부에는 모든 요소를 넣을 수 있음
// null, undefined, 함수, 객체, 배열을 넣어도 됨

// 배열 요소 추가법
// push(), unshift()
// push - 배열 맨 뒤에 요소 추가
// unshift - 배열 맨 앞에 요소 추가

// 배열 요소 수정법
// let으로 선언된 배열은 배열 직접 수정 가능
// const로 선언된 배열은 배열 직접 수정 불가
// const 선언 배열 내부를 수정하기 위해
// arry[n] 형식으로 특정 위치 요소를 수정하여 수정 가능

// 배열 요소 삭제법
// pop(), shift(), splice()
// pop - 배열의 마지막 요소 삭제
// shift - 배열의 첫 번째 요소 삭제
// splice - 배열의 특정 인덱스 요소 삭제
// splice-> arry(startNum, endNum)
// arry(1,3)-> 2번째 요소부터 4번째 요소까지 3개 요소 삭제
// arry.length -> 배열의 길이를 숫자로 보여줌

// 2.12 생성자 함수
// 동일한 구조를 갖는 여러 개 객체를 쉽게 생성하는 아래 같은 함수
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayHi = function () {
//     console.log("hi, " + this.name + "입니다.");
//   };
// }

// const person1 = new Person("ktw", 30, "FE");
// const person2 = new Person("hgd", 22, "BE");

// console.log(person1.job);
// console.log(person2.age);
// person1.sayHi();
// person2.sayHi();

// 생성자 함수 장점
// 1. 동일한 구조의 객체 쉽게 생성
// 2. 코드의 재사용성 높아짐
// 3. 반복되는 코드 작성 감소

// 2.13 반복문
// 특정 작업을 반복적으로 수행할 때 사용
// for문, while문
// for문
// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// while문
// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// 예시1
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 객체를 배열로 변경하는 법
// let person = {
//   name: "hgd",
//   age: 22,
//   height: 177,
// };

// let newArray = Object.keys(person);
// for (let i = 0; i < newArray.length; i++) {
//   let nowKey = newArray[i];
// key
//   console.log(`key: ${nowKey},value: ${person[nowKey]}`);
// }

// Object.key -> 객체의 키 값만 배열로 저장하는 메서드
// console.log(Object.keys(person));
// let newArray = Object.values(person);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(`value: ${newArray[i]}`);
// }
// Object.value -> 객체의 value 값만 배열로 저장하는 메서드
// console.log(Object.values(person));

// Object.entries -> 객체의 키와 밸류 쌍으로 배열에 담아 새로운 배열로 반환하는 메서드
// let newArray = Object.entries(person);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
// }
// console.log(Object.entries(person));

// for of문
// 배열의 모든 요소에 접근이 가능한 문구
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//   console.log(i);
// }

// for in문
// 객체 변환 없이 한번에 모든 객체의 프로퍼티를 반환하는 문구
// let person = {
//   name: "hgd",
//   age: 22,
//   height: 177,
// };

// for (let key in person) {
//   console.log(`key ${key}, value ${person[key]}`);
// }
