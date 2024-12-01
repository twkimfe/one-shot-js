// 4.2 DOM API-1
// getElementById
// HTML 문서에서 특정 ID를 가진 요소를 찾아 반환하는 DOM API
// let $color = document.getElementById('color')
// console.log($color);

// querySelector
// css 선택자로 요소 노드를 반환하는 DOM API
// 하나 요소만 반환하는 API
// let $animalInfo = document.querySelector("div.animal-info");
// let ageElement = document.querySelector("div#age");

// console.log($animalInfo);
// console.log(ageElement);

// 조건에 만족하는 모든 요소를 반환하는 DOM API
// querySelectorAll, getElementByClassName, getElementByTagName

// document.querySelectorAll
// 전달 받은 class 이름을 갖고 있는 여러 요소들을 전부 찾은 다음 반환하는 DOM API
// let $infoItem = document.querySelectorAll("div.info-item");
// console.log($infoItem);

// document.getElementsByClassName
// let $infoItem = document.getElementsByClassName("info-item");
// console.log($infoItem);

// document.getElementsByTagName
// let $infoItem = document.getElementsByTagName("div");
// console.log($infoItem);

// 요소의 class name 변경하는 법
// let $name = document.getElementById("name");
// $name.className = "dog-name";

// console.log($name);
// console.log($name.className);

// 요소의 id 값 변경하는 법
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.id = "animal";

// console.log($animalInfo);
// console.log($animalInfo.id);

// 요소의 클래스 리스트에 접근하는 법
// let $color = document.getElementById("color");
// classList.add() 메서드
// $color.classList.add("dog-color");

// classList.remove() 메서드
// $color.classList.remove("info-item");
// $color.classList.add("dog-color");

// console.log($color);

// 요소 노드에 접근한 후, 텍스트 노드 값 조작하는 법
// let $age = document.getElementById("age");
// $age.textContent = "5살";

// console.log($age);

// 요소 노드의 스타일이란 프로퍼티를 사용해서 스타일 변경하는 법
// let $color = document.getElementById("color");
// $color.style.color = "blue";
// $color.style.fontSize = "30px";

// 4.3 DOM API-2
// createElement
// 새로운 요소 노드를 생성하는 DOM API
// let $type = document.createElement("div");
// $type.className = "info-item";
// $type.id = "type";
// $type.textContent = "말티즈";

// .createTextNode()
// 텍스트 노드 신규 생성 하는 메서드
// let $typeText = document.createTextNode("말티즈");

// console.log($type);
// console.log($typeText);

// appendChild
// 전달받은 노드를 원하는 요소의 마지막 자식으로 추가하는 DOM API
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);

// 버튼 태그로 이룬 노드를 추가하는 코드
// let $button = document.createElement("button");
// $button.id = "new-button";
// $button.classList.add("new-button");
// $button.textContent = "버튼";

// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($button);

// console.log($animalInfo);

// addEventListener
// 특정 요소에 여러 이벤트를 추가하는 DOM API
// $button.addEventListener("click", () => {
//   window.alert("클릭");
// });

// innerHTML
// 특정 요소 내부에 HTML 요소를 추가하는 innerHTML DOM API
// DOM API 속성 중 하나, 특정 요소의 HTML을 문자열 형태로 읽거나 설정
// innerHTML는 요소 내부 HTML을 나타내는 무자열을 반환, 혹은 설정된 문자열을 요소의 자식으로 해석
let $animalInfo = document.querySelector("div.animal-info");
console.log($animalInfo.innerHTML);

// innerHTML 문자 설정, 수정
// $animalInfo.innerHTML = '<div id="name">고양이</div>';

// console.log($animalInfo);

// innerHTML는 성능, 보안 이슈가 있어서 가능하면,
// createElement, textcontent 같은 DOM API를 사용해야 좋음
