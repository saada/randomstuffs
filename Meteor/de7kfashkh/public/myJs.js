$(function() {
    console.log("DOM READY...");
    $('.btn-primary').button();
    $('.btn-primary').click(function() {
        $(this).button('loading');
        setTimeout(function(){$('.btn-primary').button('reset');},1500);
    });
});
