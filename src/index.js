// 3.4 API 호출
// JSON (Javascript Object Notation, 자바스크립트 객체 표기법)

let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log(response);
