$(function(){

 $(".scrl_btn").click(function(){
     $("html,body").animate({
         scrollTop:0,
     },2000);
 });
 $(window).scroll(function(){
    var abc= $(this).scrollTop();



    if(abc>300){
        $(".scrl_btn").fadeIn();
       }
       
   else{
        $(".scrl_btn").fadeOut();      
     }
 });




  
  $('.slide_kora').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left prev_arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right next_arrow"></i>',
    dots:true,
  });


 








});