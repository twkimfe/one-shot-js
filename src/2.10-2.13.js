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
