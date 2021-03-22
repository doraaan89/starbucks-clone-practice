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
const toTopEl = document.querySelector('#to-top');

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
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
    // gsap.to(요소, 지속시간, 옵션{});
      opacity: 1,
      // 투명도: 1
      display: 'block'
      // 화면표시: 블록요소
    });
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// 300ms에 한번

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});


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
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    // 이전버튼: 선택자
    nextEl: '.awards .swiper-next'
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


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
  // gsap.to(요소, 지속시간, 옵션{});
    y: size,
    // y축: 20
    repeat: -1,
    // 반복: 무한대
    yoyo: true,
    // 위아래 반복: 사용
    ease: Power1.easeInOut,
    // easing
    delay: random(0, delay)
    // 지연: 1초이후에 실행
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5 ,15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
      // viewport의 어느부분을 지나갈때 실행할것인지 지정 top:0 bottom:1
    })
    .setClassToggle(spyEl, 'show')
    // (클래스를 추가할 요소, 추가할 클래스)
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// .글자삽입 = 생성자 Date().
