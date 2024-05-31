$(document).ready(function() {
    $('[data-tmpos]').each(function(){
        var val = $(this).attr("data-tmpos");
        $(this).css({ "position": "absolute", "left": val+'%'});
    });
});