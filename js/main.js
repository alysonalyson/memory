$(document).ready(() => {
  let moveCounter = 0;

  $('.front').on('click', event => {
    $(event.currentTarget).children('i').toggleClass('hidden');
    $(event.currentTarget).addClass('active');
    moveCounter++;
    $('#move-counter').html(moveCounter);

    window.setTimeout(function () {
      if (moveCounter %2 === 0) {
        $('.active').children('i').toggleClass('hidden');
        $('.active').removeClass('active').addClass('front');
      }
    }, 1800);
  });

  $('.back').on('click', event => {
    $(event.currentTarget).toggleClass('front');
  });

  let tiles = $('.tile');
  for(let i = 0; i < tiles.length; i++) {
    let index1 = Math.floor(Math.random() * tiles.length - 1) + 1;
    let index2 = Math.floor(Math.random() * tiles.length - 1) + 1;
    tiles.eq(index1).before(tiles.eq(index2));
  }

  $('#refresh').on('click', () => {
    window.location.reload(true);
  });
});
