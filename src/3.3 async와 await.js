// 3.3 async와 await
// 기존 프로미스 방식으로 비동기 작업 예시
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3초가 지났습니다");
//     }, ms);
//   });
// };
// const start = () => {
//   delay(1500).then((res) => {
//     console.log(res);
//   });
// };

// start();

// async, await 활용 예시
// async 메서드는 비동기 작업을 포함해서 프로미스 객체를 반환하는 함수에 작성하는 코드
// 함수에 async 키워드 입력 시, 자동으로 프로미스 객체를 반환
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3초가 지났습니다");
//     }, ms);
//   });
// };
// const start = async () => {
//   let result = await delay(3000);
//   console.log(result);
// };

// start();

// await 키워드는 async 키워드를 작성한 함수 내부에 작성하는 키워드, Promise가 처리(resolve)될 때까지 함수의 실행을 일시 중지하고 Promise의 결과값을 반환하는 연산자

// try, catch 문
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3초가 지났습니다");
//     }, ms);
//   });
// };
// const start = async () => {
//   try {
//     let result = await delay(3000);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// await 키워드로 함수 실행, await 특징으로 실행 속도 느림
// const workA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("workA");
//     }, 2000);
//   });
// };
// const workB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("workB");
//     }, 1000);
//   });
// };
// const workC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("workC");
//     }, 3000);
//   });
// };

// const start = async () => {
//   try {
//     let resultA = await workA();
//     let resultB = await workB();
//     let resultC = await workC();
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

// promise.all로 함수 개선
const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 2000);
  });
};
const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 1000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 3000);
  });
};

const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

start();
