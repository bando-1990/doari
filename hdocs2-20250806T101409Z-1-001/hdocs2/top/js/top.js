window.onload = function() {
  let spinner = document.getElementById('my-spinner');

  // .box に .loaded を追加してローディング表示を消す
  spinner.classList.add('loaded');
}



$(function () {
  if (window.matchMedia('(max-width: 600px)').matches) {
    $.scrollify({section:"no"});
  } else {
  $.scrollify({section:".snap-area"});
  }
})
