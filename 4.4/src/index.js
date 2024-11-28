// 4.4 여러가지 폼 조작
// 폼 form
// 사용자와 상호작용을 가능하게 하는 HTML 요소
// 자주 사용하는 폼
// <input>, <select>, <textarea>, <button>, <label>

// select 태그 조작 코드
// const $fruitSelect = document.getElementById("fruitSelect");

// $fruitSelect.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// select 요소 호출 후 옵션 태그 특정 값 삭제
// $fruitSelect.remove(1);
// 삭제할 idx값을 인수로 입력 후, 해당 옵션 삭제

// input 태그 조작 코드
// index.html 참조

// input 태그 입력값을 버튼태그로 입력 값을 출력하는 코드
const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

// const $loginBtn = document.querySelector("button");

// $loginBtn.addEventListener("click", () => {
//   console.log($userName.value);
//   console.log($password.value);
// });

// 버튼 사용하지 않고 input 태그 값을 호출하는 코드
$userName.value = "ktw";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
