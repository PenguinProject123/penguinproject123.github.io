
		
$(document).scroll(function() {
   var y = $(this).scrollTop();
	
  if (y > 100) {
    $('#hiddennav').fadeIn();
  } else {
    $('#hiddennav').fadeOut();
  }
});
		