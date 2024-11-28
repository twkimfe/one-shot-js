// 5.3 this와 화살표 함수
// function으로 작성한 일반함수, 화살표 함수의 차이점은 함수 내부의 this가 가리키는 값이 다름

// 화살표 함수 내부의 this가 가리키는 값
// function Counter() {
//   this.count = 0;
//   setInterval(function () {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// setInterval, 맥의 변수로 콜백함수와 딜레이 타임을 전달받는 메서드
// }

// const counter = new Counter();
// 위 함수 실행 시, setInverval 함수에 전달된 콜백함수의 this는 생성자함수를 통해 새로 생성된 카운터 객체를 가리키지 않고 전역객체를 가리키기 때문에 숫자가 1씩 증가하지 않고 NaN이 1씩 증가

// 위 코드를 화살표 함수로 변경하여 출력
// function Counter() {
//   this.count = 0;
//   setInterval(() => {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

// const counter = new Counter();
// 화살표 함수로 변경하여 출력 시, 정상 작동

// 이유
// this.count++의 this는 함수 호출 방식이 아닌 함수가 정의된 시점에서 상위 스코프의 this를 참조하는 특징 때문에 작동됨
// 해당 특징은 JS가 식별자 스코프 결정하는 Lexical Scope와 유사함
// Lexical Scope
// 함수나 변수가 선언된 위치(코드가 작성된 물리적 위치)에 따라 그들의 스코프가 결정되는 것

// 콜백 함수 예제를 화살표 함수로 변경하여 출력
const cafe = {
  brand: "이디야",
  menu: "aa",
  print: () => {
    console.log(this);
  },
};

cafe.print();
// 위 코드 실행 시, 전역 객체 (윈도우 객체) 출력
// 그래서 객체 메서드 작성 시, 화살표 함수 대신 일반 함수 사용
