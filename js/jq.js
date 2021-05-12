$(document).ready(function () {


    $(".all-wrap .header-wrap .left-img-box img").ready(function () {
        $(".all-wrap .header-wrap .left-img-box img").addClass("active");
    });
    $(".all-wrap .header-wrap .natural-t").ready(function () {
        $(".all-wrap .header-wrap .natural-t").addClass("active1");
    });
    $(".all-wrap .header-wrap .bene-t img").ready(function () {
        $(".all-wrap .header-wrap .bene-t img").addClass("active2");
    });



    $('.all-wrap .container .best-item .best-slide-wrap .best-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 30000,

        prevArrow: $(".slick-btn-left"),
        nextArrow: $(".slick-btn-right"),


        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1023, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 450, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]

    });




    $(".up-btn").click(function () {

        $("html , body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {

        var $scrollTop = $(this).scrollTop();

        console.log($scrollTop);

        if ($scrollTop > 1000) {
            $(".up-btn").css({
                opacity: 1,
                visibility: "visible",
            })
        } else {
            $(".up-btn").css({
                opacity: 0,
                visibility: "hidden",
            })
        }
    });





    $(".all-wrap .ham-menu-wrap .ham-menu").click(function () {
        $(".all-wrap .ham-list").toggleClass("active10");
        $(".ham-menu").toggleClass("active9");
    });


    $(".all-wrap .ham-list .list-box ul li").click(function () {

        if ($(this).hasClass("active10")) {
            $(this).removeClass("active10");
        } else {
            $(".all-wrap .ham-list .list-box ul li").removeClass("active10");
            $(this).addClass("active10");
        }
    });


    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".all-wrap .ham-menu-wrap .ham-menu").click(function () {
            $(".all-wrap .ham-menu-wrap .logo-box").toggleClass("active99");
        });
    }


});
