// 3.2 프로미스 객체
// 프로미스 객체 생성 및 사용법 예시
// const executor = (resolve, reject=> {
// executor-> 실행 함수를 의미
// 코드 입력
// };
// const promise = new Promise(executor)
// console.log(promise);

// 비동기 처리는 작업 처리의 성공 여부의 따라 호출 함수가 다름.
// 작업 처리 성공 시 resolve, 실패 시 reject 함수를 호출
// 프로미스 객체 예시
// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve("성공");
//     reject("실패");
//   }, 2000);
// };

// const promise = new Promise(executor);
// promise.then() 메서드
// Promise가 성공적으로 완료됐을 때 실행될 콜백 함수를 등록하는 메서드
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (reject) => {
//     console.log(error);
//   };
// );

// promise.then().catch() 메서드
// Promise에서 발생한 에러를 처리하는 메서드
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((reject) => {
//     console.log(error);
//   });

// 콜백 지옥 예시
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };
// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };
// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 7000);
// };

// // 콜백 지옥
// workA(10, (resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

// 프로미스를 응용한 콜백 지옥 방지 코드
const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 3000);
  });
  return promise;
};
const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 2000);
  });
  return promise;
};
const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 5000);
  });
  return promise;
};

// 콜백 지옥을 개선한 프로미스 체이닝 예시
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });

// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });
