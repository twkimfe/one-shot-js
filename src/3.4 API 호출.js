// 3.4 API 호출
// API (Application Programming Interface)
// 서로 다른 소프트웨어나 서비스들이 서로 통신하고 데이터를 주고받을 수 있게 해주는 규칙과 도구들의 집합
// JSON (Javascript Object Notation, 자바스크립트 객체 표기법)
// let response = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// console.log(response);

// async, await 형식으로 코드 수정
// const getData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
// responce.json() 메서드로 fetch한 데이터를 js가 활용할 수 있는 객체 형식으로 변환
//   console.log(data);
// };

// getData();
// API 호출은 필요한 데이터를 전달받기 위해 데이터를 요청하는 작업
// API 호출은 성공, 혹은 실패할 수 있는 비동기 작업은 에러를 처리할 수 있는 코드를 작성해야 함

// try, catch 문구로 코드 개선
const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
