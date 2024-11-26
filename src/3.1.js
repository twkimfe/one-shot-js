// 3.1 비동기 처리
// 비동기 콜백 함수 적용 예시
// const work = (callback) => {
//   setTimeout(() => {
//     console.log("비동기");
//     callback();
//   }, 3000);
// };

// work(() => {
//   console.log("종료");
// });

// 비동기 함수 A,B,C와 동기 함수 D와 차이점 예시
const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};
const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};
const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 7000);
};
const workD = () => {
  console.log("workD");
};
// 동기 처리 함수 workD
workA();
workB();
workC();
workD();

// JS에서는 setTimeout() 내장 함수로 함수의 비동기 작업을 수행토록 한다.

// 3.2 프로미스 객체
