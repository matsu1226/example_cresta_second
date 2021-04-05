$(function(){
    let $win = $(window);
    let $hbgToggle = function(){
        $('.hbg-btn').toggleClass('close');
        $('.header-nav').fadeToggle(500);
        $('body').toggleClass('noscroll');
    }

    $('.hbg-btn').click($hbgToggle);

    if($win.width() < 768){
    $('.nav-item a[href]').click($hbgToggle);
    }else{    
        // 何もしない
    };


    // 追尾ヘッダー
    let hvHeight = $('.fv').outerHeight(); 

    $win.on('load scroll',function(){
        let nowHeight = $(this).scrollTop();
        if($win.width() > 768){
            if(nowHeight > hvHeight){
                $('header').addClass('fixed');
            }else{
                $('header').removeClass('fixed');
            };
        };
    });

});

    //スライダー 
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase:"linear"
    });
