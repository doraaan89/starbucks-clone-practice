const searchEl = document.querySelector('.search');
// document = HTML 자체
const searchInputEl = searchEl.querySelector('input');
// searchEl = .search부터

searchEl.addEventListener('click', function() {
// searchEl.(클릭하면, 익명함수 실행)
  searchInputEl.focus()
  // searchInputEl.포커스를 한다
});

searchInputEl.addEventListener('focus', function() {
// searchInputEl.(포커스되면, 익명함수 실행)
  searchEl.classList.add('focused');
  // searchEl.클래스목록.추가()
  searchInputEl.setAttribute('placeholder', '통합검색')
  // .html의 속성을 지정한다(속성, 값)
});

searchInputEl.addEventListener('blur', function() {
// searchInputEl.(포커스해제되면, 익명함수 실행)
  searchEl.classList.remove('focused');
  // searchEl.클래스목록.제거()
  searchInputEl.setAttribute('placeholder', '')
  // .html의 속성을 지정한다(속성, 값)
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function() {
// 브라우저창.(스크롤되면, 메소드 실행)
  console.log
});