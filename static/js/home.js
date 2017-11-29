$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 110) {
    $('.bottomMenu').slideDown();
  } else {
    $('.bottomMenu').slideUp();
  }
});
$(document).ready(function(){
    $(".icon-3-point").click(function(){
        $(".social-hide").toggle(400);
    });
});
function myFunction(x) {
    x.classList.toggle("change");
}
