$(document).ready(() => {
  let moveCounter = 0;

  let tiles = $('.tile');
  for(let i = 0; i < tiles.length; i++) {
    let index1 = Math.floor(Math.random() * tiles.length - 1) + 1;
    let index2 = Math.floor(Math.random() * tiles.length - 1) + 1;
    tiles.eq(index1).before(tiles.eq(index2));
  };

  $('#refresh').on('click', () => {
    window.location.reload(true);
  });

  $('#reset').on('click', () => {
    window.location.reload(true);
  });

  $('.tile').on('click', event => {
    $(event.currentTarget).children('i').show();
    $(event.currentTarget).addClass('active');
    moveCounter++;
    $('.move-counter').html(moveCounter);

    let target1 = $('.active')[0];
    let target2 = $('.active')[1];
    if (target1.isEqualNode(target2)){
      $('.active').effect('highlight');
      $('.active').addClass('matched').removeClass('active');
    } else {
      if (moveCounter > 0 && moveCounter %2 === 0) {
        $('.active').effect('bounce', 'slow');
        $('.tile').addClass('no-click');
        window.setTimeout(function () {
          $('.active').children('i').hide();
          $('.active').removeClass('active').addClass('front');
          $('.tile').removeClass('no-click');
        }, 800);
      };
    }
    let pairs = $('.matched');
    if(pairs.length == 16) {
      $('#win-pop-up').slideDown();
    }
    console.log(pairs.length);
  });

});
