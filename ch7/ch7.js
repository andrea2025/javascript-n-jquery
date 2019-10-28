
$(document).ready(function () {
    $("div>h1").mouseover(function () { 
        $(this).css("background-color", "violet");
      });
});


$(document).ready(function () {
    $("button").click(function (e) { 
    $(":input").hide();
        
    });
});

//first element

$(document).ready(function () {
   $("").click(function (e) { 
   $(":input").hide();
       
   });
});


//append
$(document).ready(function () {
    $('<div><h1>Welcome on board</h1></div>').appendTo('body');
});

$(document).ready(function () {
   $('button').click(function (e) { 
        $('<b>Yummy</b>').prependTo('li:first-child');
       
   });
});