//Initialy setting Heights and Widths
$(window).load(function(){
  //Declaring Variables
  var ww = $(window).width();
  var howmany = $('#collection').find('li').length;
  
  //Setting the WIDTH of the li
  $('#collection li').css('width', Math.floor(((ww/30)*10)));
  
  //Setting the HEIGHT of the li
  $('#collection li').css('height', Math.floor(((ww/30)*10)));
  
  //Declaring Variables
  var liW = $('#collection li').width();
  var liH = $('#collection li').height();
  
  //Setting the HEIGHT of the Container
  $('#l-collection').css('height', ((ww/30)*10));
  
  //Setting the size of the #Collection
  $('#collection').width(liW * howmany);
  
  // Adding display block on load to list elements
  $('#collection li').css('display', 'block');
  
});

//Maintaining Heights and Widths on resize
$(window).resize(function(){
  //Declaring Variables
  var ww = $(window).width();
  var howmany = $('#collection').find('li').length;
  
  //Setting the WIDTH of the li
  $('#collection li').css('width', Math.floor(((ww/30)*10)));
  
  //Setting the HEIGHT of the li
  $('#collection li').css('height', Math.floor(((ww/30)*10)));
  
  var liW = $('#collection li').width();
  var liH = $('#collection li').height();
  
  //Setting the HEIGHT of the Container
  $('#l-collection').css('height', ((ww/30)*10));
  
  //Setting the size of the #Collection
  $('#collection').width(liW * howmany);
  
  console.log(ww);
  console.log(liW);
  console.log(liH);
  console.log(howmany);
  
});

		
$('#filter ul li a').click(function(){
		var data = $(this).attr('rel');
		if(data == 'all'){
			$('#collection li').show();
		}
		else {
			$('#collection li').hide();
			$('#collection li'+'.' + data).show();
		}
		return false;
	});
	