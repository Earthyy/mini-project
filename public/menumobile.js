$(function() {

     $(".bars").on ("click", function() {
         if($(".tabC").hasClass("active")) {
             $(".tabC").removeClass("active");
           $(this).find("a").html("<i class='fas fa-bars'></i>");


         } else{
             $(".tabC").addClass("active");
            $(this).find(a).html("<i class='fas fa-times'</i>");
         }
     });
    
 });
