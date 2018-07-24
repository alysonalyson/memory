$(document).ready(() => {
  let moveCounter = 0;
  let timer = 0;

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

    if (moveCounter === 24) {
      $('.s4').hide();
    } else if (moveCounter === 34) {
      $('.s4').hide();
      $('.s3').hide();
    } else if (moveCounter === 44) {
      $('.s4').hide();
      $('.s3').hide();
      $('.s2').hide();
    }

    let pair = $('.active');
    let target1 = pair[0];
    let target2 = pair[1];

    console.log(pair);

    if (target1.isEqualNode(target2)){
      console.log(target1);
      console.log(target2);
      console.log('it\'s a match!');
      $('.active').effect('highlight');
      $('.active').addClass('matched').removeClass('active');
    } else if (moveCounter > 0 && moveCounter %2 === 0) {
        console.log(target1);
        console.log(target2);
        $('.tile').addClass('no-click');
        $('.active').effect('bounce', {times:2});
        window.setTimeout(function () {
          $('.tile').removeClass('no-click');
          $('.active').children('i').hide();
          $('.active').removeClass('active').addClass('front');
        }, 400);
    }

    let pairs = $('.matched');
    if(pairs.length == 16) {
      $('#win-pop-up').slideDown();
    }

  });
});
