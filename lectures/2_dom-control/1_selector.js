// console.log('Hello Javascript!');
let title = document.getElementById('title');
// document에서 해당 id 가진 요소를 찾고 그요소를 리턴
console.log(title);
title.textContent = '가습기담당 김현우';

let items = document.getElementsByClassName('item');
/* document 안에 있는 class 속성을 사용하여 접근 
 컬렉션 객체를 반환*/

console.log(items);
console.log('커피포트: ', items[0]);
console.log('가습기: ', items[1]);
console.log('쓰레기투척: ', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

//2] html 요소 쿼리
let h2 = document.querySelector('#title');
// css의 선택자(id)를 넣어 주면 된다. _ #title 에 있는 값을 가져옴
let item = document.querySelector('.item');
//

let itemall = document.querySelectorAll('.item');
console.log('itemall: ', itemall);
console.log('itemall[0]:', itemall[0]);

//h2.textContent = '<span>운동!!</span>';
// 이 자체는 string 값

//document.querySelector('body').innerHTML = '<string>운동</string>';
//body에 직접 html 강제 삽입

let input = document.querySelector('input');

input.setAttribute('placeholder', '오늘의 업무를 입력하세요');
//input 안에 워터마크 표시 속성 'placeholder'
input.removeAttribute('placeholder');
//input 안에
input.setAttribute('required', '');
//필수값 속성

let helloitem = document.querySelector('.hello');
console.log('helloItem:', helloitem);
// helloitem.style.color = blue;
// helloitem.style.backgroundColor = 'black';
// css 설정 변경 할수 있음

helloitem.classList.add('dark one');
helloitem.classList.remove('dark');
// java script에서 html 동적제어
