// 7.2 모듈 시스템
// JS에서 모듈 내부 식별자들은 각자 자신만의 스코프를 가져서 기본적으로 다른 파일에서 사용할 수 없음
// 일반적인 JS파일에 변수나 함수를 선언하면 다른 파일에 있는 식별자들의 접근이 가능해서 다음 같은 동일 이름 식별자를 중복 선언할 경우,
// 이미 선언되어 있다는 오류가 발생

// 일반 JS파일 모듈화 하는 법
// 1. <script></script>에서 <script type="module "></script>로 변경
// 2. xxx.js 파일을 xxx.mjs로 변경
// 해당 절차 실행 후 재실행하면 오류 해결, 정상 작동

// JS파일을 모듈로 사용하면, 모듈 내부 식별자들은 자신의 스코프를 갖게 되서, 기본적으로 다른 파일에서 다른 모듈 내부 식별자에 접근할 수 없음
// 고로 중복 선언 오류가 발생 안 함

// export, import 사용하면 모듈 내부 값을 사용
// export
// export const num = 35;
// 위 같이 함수나 변수 선언 시, 맨 앞에 export 입력하여 모듈 값 도출

// export { num, add, User };
// 여러 식별자를 한 번에 도출을 원할 경우, 해당 JS파일 마지막 줄에 위 코드 입력하여 실행

// export default User;
// 내보낼 값이 하나 일 경우, 위 같은 코드 입력하여 도출 실행
// import testModule from "./test.mjs";
// console.log(new testModule("ktw"));
// 도출 후 import, 도입값 사용법은 위 코드 입력하여 실행
// 하지만 default 사용 시, const, let, var는 사용할 수 없음

// import
// import { num, add, User } from "./test.mjs";
// 위 같이 도입할 변수, 함수를 경로와 함께 import하여 도입
// as
// 여러 식별자를 한 번에 import 하는 법
// import * as testModule from "./test.mjs";
// 위 같이 * as 모듈명 from 경로
// 로 입력하고
// console.log(testModule.num);
// 해당 변수를 위 같이 호출하면 실행 가능

// JS 모듈
// .mjs 파일을 모듈로 사용하면, index.mjs 파일만 스크립트 태그로 로드하면, 남은 모듈을 따로 입력할 필요 없이 다 사용 가능
// 기타 .mjs 파일은 이미 index.mjs 파일에 로드했기 때문
