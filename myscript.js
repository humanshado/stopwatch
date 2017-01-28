$(document).ready(function(){

    var count = 0;
    var maxCount = 60;
    var interval;

    $('#start').on('click', function(e){
        e.preventDefault();
        interval = setInterval(function(){
           if (count < maxCount){
                count++;
                $('#stopwatch').html(count);
            }else{
                clearInterval(interval);
                count = 0;
            }
        },250);
    });//start

    $('#pause').on('click', function(e){
        e.preventDefault();
        clearInterval(interval);
        $('#stopwatch').html(count);
    });//pause

    $('#stop').on('click', function(e){
        e.preventDefault();
        clearInterval(interval);
        count = 0;
        $('#stopwatch').html(count);
    });//stop

    $(document).on('mousemove', function(e){
      $('#posX').html(e.screenX);
      $('#posY').html(e.screenY);
    });

    $(document).on('keypress', function(e){
      var keypressed = e.key;
      $('#key-board').html(keypressed);
    });


});//ready
