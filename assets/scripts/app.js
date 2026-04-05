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

/* 함수와 매개변수

// 함수는 function이나 "() =>" 문법으로 생성 가능
function greet() {
    console.log("hello");
}

greet();
    
function greetUser(userName, message){
    console.log(userName);
    console.log(message);
    return "Hi, I am " + userName + ", " + message; // 값을 반환하는 명령어
}

// 순서대로 출력된다. console.log 했을때.
greetUser("Max", "Hello!"); // Max \n  Hello! 로 출력
greetUser("Manuel", "Hello, what's up?"); // Manuel \n  Hello, what's up? 로 출력
greetUser(); // 이렇게 매개변수 값을 안 주면 undefined가 나온다.

function creatGreetUser(userName, message = "Hello!"){
    return "Hi, I am " + userName + ", " + message; // 값을 반환하는 명령어
}

const greeting1 = creatGreetUser("Max")
console.log(greeting1); 
console.log(creatGreetUser("Manuel", "Hello, what's up?"));
// 기본적으로 function에서 값을 읽은 다음 명령어에 대한 값을 읽는 순서로 진행 된다.

*/

/* 객체와 클래스 

let age = 57;

const user = {
    name : 'Max', 
    age : 34,
    greet() { // 함수도 저장 가능하다.
        console.log('hello!');
        console.log(this.age); // this로 인해 user 안에 있는 age(34) 출력
        console.log(age);      // 밖에 정의되어 있는 age(57) 출력
    }
};

console.log(user); // {name: 'Max', age: 34} 출력 
console.log(user.name); // name에 주어진 값만 출력
user.greet(); // user에 있는 greet 함수 실행

class User {    // 클래스는 처음 시작할 때 대문자로 시작
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi");
    }
}

const user1 = new User("Manuel", 35);
console.log(user1); // User {name: 'Manuel', age: 35} 출력
console.log(user1.age); // 35 age만 출력
user1.greet();

*/

/* 배열 및 배열 메소드 (map()과 같은) 

let hobbies = ["Sports", "Cooking", "Reading"];
// 전체를 출력하려면 그냥 배열의 이름만 넣으면 전체 배열 출력. 
console.log(hobbies);    // 그냥 빈 "[]" 넣으면 Uncaught SyntaxError 발생
console.log(hobbies[1]); // 배열 안에 하나의 값만 출력할 때 "[0]" 이런 식으로 넣으며, 0부터 시작한다.

// 배열에 새 원소 추가. 맨 뒤에 추가된다.
hobbies.push("working"); 
console.log(hobbies); 

// 특정 값의 인덱스를 찾을 수 있는 메소드. 함수를 입력받는다.
// let index = hobbies.findIndex((item) => item === 'Sports'); // 이런식으로 작성 가능
let index = hobbies.findIndex((item) => {
    // 배열에 있는 값과 주어진 값과 비교하면서 true인 값의 인덱스를 찾는다.
    return item === 'Sports'; // 모두 fales일 경우 -1 출력
});
console.log(index);

// 어떠한 원소에서 다른 원소로 변환 가능한 점. 스트링에서 자바스크립트 객체로도 변환 가능
// 목록의 내용물을 추가하거나 데이터를 JSX 요소로 매핑하는 등 자주 사용
// 값을 저장하려면 어딘가에 넣어야 한다.
let editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);
console.log(hobbies);

editedHobbies = hobbies.map((item) => ({text: item}));
console.log(editedHobbies);

*/