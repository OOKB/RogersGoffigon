// ACCORDIAN FUNCTIONALITY
var allPanels = $('.big-list > dd').hide();
    
$('.big-list > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
});

// CAROUSEL FUNCTIONALITY

