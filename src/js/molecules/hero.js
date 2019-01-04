/**
 * Init hero video.
 *
 * @module hero
 * @example
 * // import it in your Javascript file
 * import "path/to/hero.js"
 * */

export default (({
  videoId,
  videoContainer
}) => {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;

  window.onYouTubeIframeAPIReady = function () {
    let height = window.innerHeight;
    let width = window.innerHeight * 16 / 9;

    if (width < window.innerWidth) {
      width = window.innerWidth;
      height = window.innerWidth * 9 / 16
    }

    player = new YT.Player(videoContainer, {
      width,
      height,
      videoId: videoId,
      playerVars: {
        rel: 0,
        controls: 0,
        showinfo: 0,
        iv_load_policy: 3,
        vq: 'hd1080',
        cc_load_policy: 1,
        autoplay: 1,
        loop: 1,
        mute: 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      player.seekTo(0);
      player.playVideo();
    }
  }

})({
  videoId: '1_SQUOyGLyk',
  videoContainer: 'youtube-hero'
});
