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

window.addEventListener('scroll', _.throttle(function() {
// 브라우저창.(스크롤되면, lodash쓰로틀링(메소드 실행))
// _.throttle(함수. 시간)
  console.log(window.scrollY);
  if (window.scrollY > 500) {
  // window.scrollY 값이 500보다 커지면
    gsap.to(badgeEl, .6, {
    // gsap.to(요소, 지속시간, 옵션{});
      opacity: 0,
      // 투명도: 0
      display: 'none'
      // 화면표시: 사용하지 않음 숫자는 따옴표가 필요 없다
    });
  } else {
    gsap.to(badgeEl, .6, {
    // gsap.to(요소, 지속시간, 옵션{});
      opacity: 1,
      // 투명도: 1
      display: 'block'
      // 화면표시: 블록요소
    });
  }
}, 300));
// 300ms에 한번