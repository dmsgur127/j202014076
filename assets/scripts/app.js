/* import와 export

// import를 사용할 때 변수명의 대소문자 구분 잘 해야하며,
// 파일 위치를 적을 때 자바스크립트는 확장자까지 작성해야 하며, 리액트는 확장자를 적을 피요가 없다
import  apikey from "./util.js";

// default를 사용할 때 {abc}를 안 할 경우 에러는 발생 X, 그냥 {} 없으면 default로 취급하는 것 같다.
// default가 없을 때 {}를 사용 안하면 에러 발생
// {}를 사용할 때 ','를 통해 한번에 여러개 import 가능 
// 이름 뒤에 as를 붙여서 다른 별칭 지정 가능
import {abc, def as content } from "./util.js"; 

// export default를 사용했을 때 이런식으로 사용하며, 이름은 반드시 부여해야 한다.
// 물론 default에서 {} 추가 가능하며(x/직접 해본 결과 SyntaxError 발생), 
// {}는 여러개 넣을 때 한번에 import 가능하다.
// import apikey from "./util.js"

console.log(apikey); // 브라우저 콘솔 창에 로그를 남기는 명령어
console.log(abc);
console.log(content);

*/

/* --------------------------------------------------- */

/* 변수와 값

// 하이픈, 공백 없어야함. 처음 소문자 그다음 단어부터 앞글자에 대문자 넣는다.
// !, ? 안 된다. 맨 앞에 숫자를 넣을 수 없다. 사용 가능한 특수 문자 : $, _
let userMessage = 'hello world!';
const userMessage2 = "hello world!!!";

userMessage = 'hello world!!!!!';
// userMessage2 = "hie hello world" // 상수(const)는 한 번 지정 후 변경 불가

// 문자열 ", ' 모두 사용가능. 안하면 Uncaught SyntaxError 발생 
//console.log('hello world!');  
console.log(userMessage);
console.log(userMessage2);
console.log(1569);

*/

/* 연산자

console.log("10 + 5"); // 결과값 출력. 그냥 "10 + 5"를 출력하려면 끝에 "" 붙이기
console.log("hello" + "world"); // 문자열에 +를 사용해 이어 붙이기 가능하다.

// 비교 연산. 같으면 true, 틀리면 false
console.log(10 === 10); 
console.log(10 > 10);

// if문 () 안의 조건이 일치하면 해당 명령어 실행
if(10 === 10) {
    console.log("works");
}

*/