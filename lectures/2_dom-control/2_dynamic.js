let addBtn = document.getElementById('button');
addBtn.addEventListener('click', function () {
  alert('hello');
  let li = document.createElement('li');
  // 지정한 tagName의 HTML 요소를 생성
  let ul = document.querySelector('ul');
  li.textContent = '청소추가';
  ul.appendChild(li);
  // 항상 마지막 자식요소로 추가
});
dd;
xcxc;
