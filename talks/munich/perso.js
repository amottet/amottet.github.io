$(document).ready(function() {
    $('[data-tmpos]').each(function(){
        var val = $(this).attr("data-tmpos");
        $(this).css({ "position": "absolute", "left": val+'%'});
    });
});

function initializeHighlightConfig() {
    var highlights = []
    $('code').each(function(){
        var numbers = $(this).data("hln");
        var highlight_local = [];
        if(numbers) {
            var arrayOfNumbers = numbers.split(',');
            for (let a in arrayOfNumbers) {
                highlight_local.push({start: arrayOfNumbers[a], end: arrayOfNumbers[a], color:'#555'});
            }
        } 
        highlights.push(highlight_local);
    });
    return highlights;
}

document.addEventListener('keydown', recordKey);

function recordKey(e) {
  if (e.key == "c") {
      $.deck('go','conclusion');
  }
}