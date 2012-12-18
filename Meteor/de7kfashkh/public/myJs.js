console.log((typeof jQuery!="undefined")?"jQuery":"NO jQuery");

$(function() {
    console.log("DOM READY...");
    $('#button').button();
    $('div').click(function() {
        console.log('clickkkk!');
    });
    $('#button').click(function() {
        $(this).button('loading');
        console.log("button clicked!");
    });

});
