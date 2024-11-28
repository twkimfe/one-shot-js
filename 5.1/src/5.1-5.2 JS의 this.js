// 5.1 JS의 this-1
// this
// 자신이 속한 객체를 가르킴, JS의 함수와 관련됨

// JS의 함수 호출 방식
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. 콜백 함수 호출

// 전역공간
// console.log(this);
// window 객체
// 웹 브라우저의 전역 객체, 전역 공간에 항상 존재하는 객체
// 노드 환경에서 this값 호출 시 노드 환경의 전역 객체인 global 객체가 출력됨

// 1. 일반 함수 호출
// function func() {
//   console.log(this);
// }

// func();
// 함수 호출 시 this를 포함하고 있는 function함수를 호출한 윈도우 객체가 this에 바인딩 됨
// 바인딩 (binding)
// 식별자(변수, 함수 등)가 어떤 값이나 메모리 공간과 연결되는 과정

// 2. 메서드 호출
// 메서드-> 객체 프로퍼티 함수
// const cafe = {
//   brand: "이디야",
//   menu: "aa",
//   print: function () {
//     console.log(this);
//   },
// };

// cafe.print();
// 함수를 메서드로써 호출 시, 메서드를 포함하고 있는 객체 자체가 출력됨
// 메서드 호출문 점 바로 앞의 객체가 출력됨

// 메서드 안 this가 자신 포함 객체 출력 상황 테스트
// const cafe = {
//   brand: "이디야",
//   menu: "aa",

//   newCafe: {
//     brand: "이디야",
//     menu: "latte",
//     print: function () {
//       console.log(this);
//     },
//   },
// };

// cafe.newCafe.print();
// this가 포함된 print 메서드를 갖는 newCafe 객체 프로퍼티가 출력됨

// 변수에 메서드 할당 후, 변수 자체 호출
// const cafe = {
//   brand: "이디야",
//   menu: "aa",
//   print: function () {
//     console.log(this);
//   },
// };

// const myCafe = cafe.print;
// myCafe();
// 이 때 전역 객체 윈도우 객체가 출력됨
// this는 자신이 속한 객체를 가리키는 키워드
// 자신을 포함하는 함수가 어떻게 호출되냐 따라 가리키는 값이 다른 키워드
// 현재 this를 포함하는 print함수는 메서드로 호출된 게 아니라
// 전역 공간에서 일반 함수로서 호출됨
// 고로 myCafe 함수를 호출한 객체, 즉 전역 객체 (윈도우 객체)가 출력됨

// this는 선언 위치, 방법에 영향을 받지 않고,
// 무조건 함수가 호출된 방법에 따라 가리키는 값이 다름

// 5.2 JS의 this-2
// 3. 생성자 함수 호출
// 생성자 -> 새로운 객체 생성, new 키워드 사용
// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }

// let myCafe = new Cafe("latte");
// console.log(myCafe);
// function Cafe(menu) {} 안 this값은 생성자 함수로 생성한 카페 객체 출력
// myCafe값은 메뉴에 latte값이 들어간 카페 객체 출력
// 생성자 함수 내부 this는 생성자 함수가 새로 생성할 새 객체,인스턴스를 가리킴
// new Cafe() 중, new를 삭제 시, this값은 전역 객체, 윈도우 객체 출력,
// myCafe값은 undefined가 출력
// 해당 Cafe()함수는 return문이 없어서 반환값이 존재하지 않는
// undefined를 반환, Cafe()함수 내부 this는 함수가 일반 함수로 호출 되어서 전역 객체인 윈도우 객체가 출력

// 4. 콜백 함수 호출
const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu("핫초코", cafe.setMenu);

console.log(cafe);

// 코드 예상 로직
// 1. getMenu 함수가 호출, 인수로 핫초코, 객체의 setMenu 메서드를 전달
// 2. getMenu 함수에서 두 가지 매개변수를 받아서 카페 객체의 setMenu 메서드를 호출, 메뉴로는 핫초코를 전달
// 3. setMenu 메서드에는 전달받은 핫초코를 카페 객체의 프로퍼티에 menu값을 할당

// 실제 실행 결과
// menu에 핫초코 값이 할당 안됨

// 이유
// 현재 setMenu 메서드의 this는 getMenu라는 함수 내부에서 메서드로 호출이 아닌 일반 함수로 호출됨
// 고로 this는 전역 객체인 윈도우 객체 출력
// 웹 브라우저 console에서 window.menu 호출 시,
// 핫초코라는 값이 반환됨

// 함수가 콜백 함수로 호출되면, 콜백 함수의 this는 this값의 전역 객체 (윈도우 객체)가 바인딩 됨

// 정리
// JS의 this는 함수 호출 방식에 의해 값이 동적으로 바인딩
// 함수가 일반함수, 콜백함수로 호출될 때 this는 전역 객체를 가리킴
// 함수가 메서드로 호출될 때 this는 메서드를 포함한 개체를 가리킴
// 함수가 생성자 함수로 호출될 때 this는 생성자 함수가 새로 생성할 새 객체를 가리킴
// 함수가 콜백함수로 호출될 때 this는 this값의 전역 객체가 바인딩됨
