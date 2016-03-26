// slider:
$(function(){
    $('.image-slider img:gt(0)').hide();
    setInterval(function(){
      $('.image-slider :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.image-slider');
    }, 5000);
});
