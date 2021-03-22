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



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
// fadeEls.갯수만큼 요소 순서대로 실행()
  gsap.to(fadeEl, 1, {
  // gsap.to(요소, 지속시간, 옵션{});
    delay: (index + 1) * .7,
    // 딜레이: 0.7초 마다,
    opacity: 1
    // 투명도: 1
  });
});

new Swiper('.notice-line .swiper-container', {
// 생성자 Swiper(선택자, 옵션)
  direction: 'vertical',
  // 방향: 수직
  autoplay: true,
  // 자동재생: 사용
  loop: true
  // 반복: 사용
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  // 방향: 수평(기본값이므로 추가하지 않아도 된다)
  slidesPerView: 3,
  // 한번에 보여줄 슬라이드 개수: 3
  spaceBetween: 10,
  // 슬라이드 사이의 여백: 10(px)
  centeredSlides: true,
  // 1번 슬라이드가 가운데: 사용
  loop: true,
  // 반복: 사용
  autoplay: {
  // 자동재생: {옵션}
    delay: 5000
    // 딜레이: 5000(ms) 기본값은 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    // 페이지 번호 요소 선택자
    clickable: true,
    // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    // 이전버튼: 선택자
    nextEl: '.promotion .swiper-next'
    // 다음버튼: 선택자
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
// .toggle-promotion.클릭하면 함수실행
  isHidePromotion = !isHidePromotion
  // isHidePromotion이 true이면 false로 할당,false이면 true로 할당 !
  if(isHidePromotion) {
  // isHidePromotion이 true이면
    promotionEl.classList.add('hide');
    // .promotion의.클래스목록에.추가
  } else {
  // 아니라면
    promotionEl.classList.remove('hide');
        // .promotion의.클래스목록에.제거
  }
});
