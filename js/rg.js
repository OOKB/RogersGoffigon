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
  $('#collection').width((liW * howmany)+(howmany * 10));
  
  // Adding display block on load to list elements
  $('#collection li').css('display', 'block');
  
});
/* 
  function outOf(){
    var howmany = $('#collection').find('li').length;
    var html = '<p>' + howmany + '</p>';
    e.preventDefault();
    $('.pagination').load('<p>' + howmany + '</p>');
  }
  outOf();
*/
  
    //add class to second li
  $('#collection li:nth-child(2)').addClass('current');
  var current = $('#collection li:nth-child(2)');
  var consoleThis = $('li').index(current);
  
  
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
  
});

// Filter Function
  //Toggle active class on clicked
		$("#filter ul li a").click(function () {
      $(this).toggleClass("active");
    });

    $('#filter ul li a').click(function(){
		  var data = $(this).attr('rel');
		  if(data == 'all'){
			   $('#collection li').show();
			   $('.active').removeClass('active');
			 } else if( $(this).hasClass('active') ){
  			 $('#collection li'+'.' + data).show();
			 } else{
  			 $('#collection li').hide();
  		}
  		return false;
	});
/*
  // Filter Function
    //Toggle active class on clicked
		$("#filter ul li a").click(function () {
      $(this).toggleClass("active");
*/
// ============== Carousel Functionality ============//

//(code adapted gracefully from http://web.enavu.com/tutorials/making-a-jquery-infinite-carousel-with-nice-features/)
	 
	 //Slide function
	 function slide(where){
  	 //getting the width
  	 var liW = $('#collection li').width();
  	 
  	 //Using if to check for left or right slide
  	 if (where == 'left'){
    	 //calculate the left indent of the ul for left slide
    	 var left_indent = parseInt($('ul#collection').css('left')) + liW;
  	 } else {
  	   //calculate the left indent of the ul for right slide
    	 var left_indent = parseInt($('ul#collection').css('left')) - liW;
  	 }
  	 
  	 //Animating the sliding effect
  	 $('ul#collection').animate({ left: left_indent },'fast',function()
  	 {  
    	 if (where == 'left'){
    	   $('ul#collection li:first').before($('ul#collection li:last'));
    	 }else{
      	 $('ul#collection li:last').after($('ul#collection li:first'));
    	 }
    	// $('ul#collection').css('left','-'liW);
    	 
  	 });
	 }