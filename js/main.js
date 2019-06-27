$(document).ready(function () {
    $('.next').on('click', function (e) {
        e.preventDefault();
        let $currentImg = $('.img.curry');
        let $currentImgIndex = $('.img.curry').index();
        let $nextImgIndex = $currentImgIndex + 1;
        let $nextImg = $('.img').eq($nextImgIndex);
        $currentImg.fadeOut(1000);
        $currentImg.removeClass('curry');
        
        if ( $nextImgIndex === ($('.img:last').index() + 1) ) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
            $nextImg.fadeIn(1000);
            $nextImg.addClass('curry');
        }
    });

    $('.prev').on('click', function (e) {
        e.preventDefault();
        let $currentImg = $('.img.curry');
        let $currentImgIndex = $('.img.curry').index();
        let $prevImgIndex = $currentImgIndex - 1;
        let $prevImg = $('.img').eq($prevImgIndex);
        $currentImg.fadeOut(1000);
        $currentImg.removeClass('curry');
        $prevImg.fadeIn(1000);
        $prevImg.removeClass('curry');

        if ( $prevImgIndex === ($('.img:last').index() + 1) ) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
            $prevImg.fadeIn(1000);
            $prevImg.addClass('curry');
        }
    });
});