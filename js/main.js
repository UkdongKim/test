window.addEventListener('DOMContentLoaded', function () {

    //header gnb
    let header = document.querySelector('.header')
    let mainMenu = document.querySelector('.main-menu')

    mainMenu.addEventListener('mouseover', active)
    mainMenu.addEventListener('mouseout', unActive)

    function active() {
        header.classList.add('active')
    }

    function unActive() {
        header.classList.remove('active')
    }


//section2 숫자 올라가는 모션

    let item_frames = document.querySelectorAll('.item_frames')
    for (let i = 0; i < item_frames.length; i++) {
        item_frames[i].addEventListener('mouseenter', upper)
    }

    function upper(event) {
        let Class = event.target.className;
        if (Class.indexOf(1) !== -1) {
            count(0, 637, 1, 'km')
        } else if (Class.indexOf(2) !== -1) {
            count(1, 2, 1, '초')
        } else if (Class.indexOf(3) !== -1) {
            count(2, 322, 1, 'km')
        } else {
            count(3, 1020, 0.1, 'hp')
        }
    }

    let number_box = document.querySelectorAll('.number_box')

    function count(nth, end_number, time, ratio) {
        let end = setInterval(counter, time)
        let number = 0
        if (nth === 3) {
            number = 500
        }

        function counter() {
            if (number >= end_number) {
                clearInterval(end)
            } else {
                number++;
                number_box[nth].innerText = `${number}${ratio}`
            }
        }

        number = 0
        if (nth === 3) {
            number = 500
        }
    }


//세부제원 MODELS S(1) vs Plain(2)

    let btn_model_s = document.querySelector('.btn_model_s');
    let btn_plain = document.querySelector('.btn_plain');

    let img_modelS = document.querySelector('.s_img');
    let img_plain = document.querySelector('.plain_img');

    let models_pc = document.querySelector('.modelS_desc');
    let plain_pc = document.querySelector('.desc_plain');
    let models_mobile = document.querySelector('.models_mobile');
    let plain_mobile = document.querySelector('.plain_mobile');

    size_check();
    window.addEventListener('resize', size_check);


    function size_check(){
        if(window.innerWidth > 768){
            web_default()
            btn_model_s.addEventListener('click', function () {
                plain_pc.classList.remove('active');
                img_plain.classList.remove('active');
                models_pc.classList.add('active');
                img_modelS.classList.add('active');
            });
            btn_plain.addEventListener('click', function () {
               models_pc.classList.remove('active');
               img_modelS.classList.remove('active');
                plain_pc.classList.add('active');
                img_plain.classList.add(('active'))


            } );
        } else if (window.innerWidth <= 768){
            mobile_default()
            btn_model_s.addEventListener('click',function () {
                plain_mobile.classList.remove('active');
                img_plain.classList.remove('active');
                models_mobile.classList.add('active');
                img_modelS.classList.add('active');
            });
            btn_plain.addEventListener('click', function () {
                models_mobile.classList.remove('active');
                img_modelS.classList.remove('active');
                plain_mobile.classList.add('active');
                img_plain.classList.add('active');
            });
        }
        return false
    }
    
    function web_default (){
        // 로드되면 기본값으로 models에만 active주기
        img_modelS.classList.add('active');
        models_pc.classList.add('active');
        plain_mobile.classList.remove('active');
        models_mobile.classList.remove('active');

    }
    
    function mobile_default(){
        // 로드되면 기본값으로 models에만 active주기
        img_modelS.classList.add('active');
        models_mobile.classList.add('active');
        plain_pc.classList.remove('active');
        models_pc.classList.remove('active');
    }
    

    
    let btn = document.querySelector('    .img_desc_mobile .btn');
    let img_desc_mobile = document.querySelector('.img_desc_mobile');
    btn.addEventListener('click', function () {
        if(img_desc_mobile.classList.contains('active')){
            img_desc_mobile.classList.remove('active')
        } else {
            img_desc_mobile.classList.add('active');
        }
    })






})
;


// scroll event
$(function () {

    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        const sec3YOffset = $('.section3').offset().top;
        const sec3TitleOffset = $('.section3_title').offset().top;
        const section5Y = $('.section5').offset().top;

        let currentOffset;
        const pos = $('.pos');


        if (scrollTop >= sec3YOffset && scrollTop < section5Y) {
            $('.section3-fix-video').addClass('fixed')

        } else {
            $('.section3-fix-video').removeClass('fixed')

        }

        if (sec3YOffset - (outerHeight / 5) <= scrollTop && sec3YOffset + (outerHeight / 5) >= scrollTop) {
            $('.section3_subtitle').css('opacity', '1');

        } else {
            $('.section3_subtitle').css('opacity', '0');
        }


        //메인섹션 사진 애니메이션
        let currentYOffset;
        let opacity_index = (scrollTop / 1000) - 1;
        let translate_index = (scrollTop * 0.175);


        for (let i = 1; i <= 4; i++) {

            if (scrollTop >= $('.s' + i).offset().top - innerHeight && scrollTop < $('.s' + i).offset().top) {

                //나타난다
                $('.s' + i).css({
                    'opacity': `${opacity_index}`,
                    'transform': `translateY(-${translate_index}px)`
                });
            } else if (scrollTop >= ($('.s' + i + ' .item').offset().top) - 100 && scrollTop < $('.s' + i + ' .item').offset().top + 100) {
                //사라진다
                $('.s' + i).css({
                    'opacity': '0',
                    // 'transform': `translateY(-${translate_index}px)`
                });
            }
        }


        //메인섹션 비디오 애니메이션
        let scale_index = 0;
        let scale_size = 1.4;
        let opacity_index2;

        for (let i = 5; i <= 8; i++) {
            //점점 커지기
            if (scrollTop >= $('.s' + i).offset().top - 750 && scrollTop < $('.s' + i).offset().top) {

                scale_index = (1000 + (scrollTop - $('.s' + i).offset().top)) * 0.001;
                if (scale_index >= scale_size) {
                    scale_index = scale_size;
                }
                $('.s' + i + ' .item_img').css({
                    'transform': `scale(${scale_index})`,

                });

                //점점 사라지기
            }else if (scrollTop >= $('.s' + i + ' .item_img').offset().top - 100 && scrollTop < $('.s' + i + ' .item_img').offset().top + 300) {
                opacity_index2 = (500 - (scrollTop - $('.s' + i).offset().top)) * 0.01;
                // pos.text(opacity_index2);
                $('.s' + i).css({
                    'opacity': `${opacity_index2}`
                });
            }

        }

        //setion2 효과
        let section2 = $('.section2').offset().top;
        if (scrollTop >= section2 * 0.5 && scrollTop < section2 + (outerHeight / 4)) {
            $('.section2_wrap').addClass('active')
        } else {
            $('.section2_wrap').removeClass('active')

        }


        //세부제원 리스트 나오는 효과
        if (scrollTop >= section5Y - (outerHeight / 5) && scrollTop <= section5Y + (outerHeight / 5)) {
            $('.category_items .img_desc ul li').addClass('active');
        } else {
            $('.category_items .img_desc ul li').removeClass('active');
        }

        //    마지막 섹션, 뉴스 및 공지사항

        if (scrollTop >= ($('.section7').offset().top - (outerHeight / 3))) {
            $('.section7').addClass('active');
        } else {
            $('.section7').removeClass('active');
        }


        // 현재 스크롤 위치에 따라서 index box list에 active 주기
        let previous_index;

        if (scrollTop < $('.section2').offset().top) {
            $('.index_box li').removeClass('active')
            $('.index_box li:nth-of-type(1)').addClass('active')
        }

        if (scrollTop >= $('.section2').offset().top && scrollTop <= $('.section3').offset().top) {
            $('.index_box li').removeClass('active')
            $('.index_box li:nth-of-type(2)').addClass('active')
        }

        if (scrollTop >= $('.section3').offset().top && scrollTop <= $('.section5').offset().top) {
            $('.index_box li').removeClass('active')
            $('.index_box li:nth-of-type(3)').addClass('active')
        }

        if (scrollTop >= $('.section5').offset().top && scrollTop <= $('.section6').offset().top) {
            $('.index_box li').removeClass('active')
            $('.index_box li:nth-of-type(4)').addClass('active')
        }

        if (scrollTop > ($('.section7').offset().top) * 0.95) {
            $('.index_box li').removeClass('active')
            $('.index_box li:nth-of-type(5)').addClass('active')
        }

    });


    // left-nav-bar 및 to top 클릭시 해당 섹션으로 이동.
    $('.left-nav-bar li a, .toTop a').click(function () {
        let leftNavBar = $(this).attr('href');
        let sectionOffset = $(leftNavBar).offset().top;
        $("html, body").stop().animate({scrollTop: sectionOffset}, 1200, "easeInOutQuart");
        return false;
    });

});


