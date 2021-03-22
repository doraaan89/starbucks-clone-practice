// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
// HTML에.요소생성

tag.src = "https://www.youtube.com/iframe_api";
// 생성한요소.src
var firstScriptTag = document.getElementsByTagName('script')[0];
// HTML.태그이름('script')[첫번째요소]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 요소.부모요소.앞에삽입(삽입할요소, 삽입할요소의 기준)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    // 재생할 youtubeID:
    playerVars: {
    // 영상을 재생하기위한 변수
      autoplay: true,
      // 자동재생: 사용
      loop: true,
      // 반복재생: 사용
      playlist: 'An6LvWQuj_8',
      // 반복재생할 youtubeID 목록
    },
    events: {
      onReady: function(event) {
        event.target.mute()
        // 지금 실행되고 있는 비디오를 뮤트
      }
    }
  });
}