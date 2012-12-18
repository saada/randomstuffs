$(function() {
    console.log("DOM READY...");
    $('.input-file').button();
    $('.input-file').click(function() {
        $(this).button('loading');
        setTimeout(function(){$('.input-file').button('reset');},1500);
    });
});
