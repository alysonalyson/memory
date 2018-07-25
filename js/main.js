$(document).ready(() => {
  //initiate move tracker
  let moveCounter = 0;
  //timer function
  let countUp = new Date(); localStorage.setItem('startDate', countUp);
  let timer = setInterval(function() {
    //Start timer at page load
    let start = new Date().getTime();
    // Calculate difference between now and start
    let diff = start - countUp.getTime();
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  //Add leading zero for single digit seconds
  if (seconds <10) {
    seconds = '0'+ seconds;
  }
    $('.timer').html(minutes + ':' + seconds);
}, 1000);

//randomize tile placement
  let tiles = $('.tile');
  for(let i = 0; i < tiles.length; i++) {
    let index1 = Math.floor(Math.random() * tiles.length - 1) + 1;
    let index2 = Math.floor(Math.random() * tiles.length - 1) + 1;
    tiles.eq(index1).before(tiles.eq(index2));
  };
//refresh & reset buttons
  $('#refresh').on('click', () => {
    window.location.reload(true);
  });
  $('#reset').on('click', () => {
    window.location.reload(true);
  });

//flip tiles
  $('.tile').on('click', event => {
    $(event.currentTarget).children('i').show();
    $(event.currentTarget).addClass('active');
    //count moves
    moveCounter++;
    $('.move-counter').html(moveCounter);
   // keep track of moves to change star rating
    if (moveCounter === 30) {
      $('.s4').hide();
    } else if (moveCounter === 40) {
      $('.s4').hide();
      $('.s3').hide();
    } else if (moveCounter === 50) {
      $('.s4').hide();
      $('.s3').hide();
      $('.s2').hide();
    }
    //check for matches
    let pair = $('.active');
    let target1 = pair[0];
    let target2 = pair[1];

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
    //end the game when all tiles are matched
    let pairs = $('.matched');
    if(pairs.length == 16) {
      clearInterval(timer);
      $('#win-pop-up').slideDown();
    }

  });
});
