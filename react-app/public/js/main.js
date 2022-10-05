$(function () {
    $('.faq .items .item .btn-show, .faq .items .item .btn-hide, .faq .items .item .question').click(function () {

        var $items = $(this).parents('.items');
        var $item = $(this).parents('.item');

        if (!$item.hasClass('active'))
            $items.find('.item').removeClass('active');

        if ($item.hasClass('active'))
            $item.removeClass('active');
        else
            $item.addClass('active');
    });

    //Custom file input için tetikleme event'ı
    $('body').on('click', '*[handle-file-element]', function () {
        var selector = $(this).attr("handle-file-element");
        $(selector).click();
        return false;
    });

    //
    $('body').on('change', '.popup-upload-img input', function () {

        if (this.files && this.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('.modal-1 >.inner >.m-right >img').attr('src', e.target.result);

                $('.popup-upload-img .bg-upload').addClass('selected');
                $('.popup-upload-img .bg-upload img').attr('src', e.target.result);
            };
    
            reader.readAsDataURL(this.files[0]);
        }
    });

    $('body').on('change', '.upload-logo input', function () {

        if (this.files && this.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('.modal-3 > .inner > img').attr('src', e.target.result);

                $('.upload-logo .bg-upload').addClass('selected');
                $('.upload-logo .bg-upload img').attr('src', e.target.result);
            };
    
            reader.readAsDataURL(this.files[0]);
        }
    });
    
});