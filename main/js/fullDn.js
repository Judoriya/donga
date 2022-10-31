$( function () {

  var $gnb      = $( '#gnb > li');      //1차메뉴
  var $sub      = $( '.sub_menu' );      //2차메뉴
  var headerMin = $( '#gnb' ).height();      //1차메뉴 높이(30px)
  var headerMax = headerMin + $sub.innerHeight();      //1차+2차메뉴 높이
  var speed     = 200;      //시간(ms)
  var flag      = false;      //메뉴상태

  $sub.hide();

  $gnb.mouseenter ( function () {

    if( !flag ) {
      $('#gnb' ).stop().animate( {
        height: headerMax
      }, speed, function() {
        // $sub.show();
        $sub.stop().fadeIn( speed );
      } );
      flag = true;
    }
    
    // 1차메뉴에 .on 부여
    $( this ).find('#newGbn > li').addClass( 'on' );

    // 2차메뉴에 .on 부여
    $( this ).find('$sub').addClass( 'on' );
  });

  // 1차메뉴에서 마우스 커서가 나가면 풀업
  $gnb.mouseleave( function () {
    
    $( this ).find( '#gnb > li' ).removeClass('on');

    $( this ).find( '$sub' ).removeClass('on');
  });

  $('#gnb').mouseleave( function () {
    $sub.stop().fadeOut( speed, function () {
      $('#gnb').stop().animate( { height: headerMin}, speed);
    });
    flag = false;
  });
});