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
  
  console.log(ww);
  console.log(liW);
  console.log(liH);
  console.log(howmany);
  
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

//Toggle display function
    function toggle_display(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
