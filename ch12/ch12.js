$(document).ready(function(){

    $("#divClick").click(function () {
		
	$('div').css('background-color', 'tan');
		
	$("div").filter("#div1").css('background-color', 'blue');
			
    });
	
    $("#divClick2").click(function () {
		
	$('div').css('background-color', 'teal');
			
	$('div').filter(function(index) {
		if(index==2 || index==3){ 
			return true;
		}
	}).css('background-color', 'blue');
		
    });
	
    $("#divClick3").click(function () {
		
	$('div').css('background-color', 'salmon');
		
	$('div').filter(function(index) {
		return $("b", this).length == 1;
	}).css('background-color', 'blue');
			
    });
	
  });