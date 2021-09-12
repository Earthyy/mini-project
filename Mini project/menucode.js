$(function() {

    $(".tabC").on ("click", function() {
        if($(".drop").hasClass("active")) {
            $(".drop").removeClass("active");
          $(this).find("a").html("<li class='tabC'></li>");


        } else{
            $(".drop").addClass("active");
           $(this).find(a).html("<li class='tabC'></li>");
        }
    });
   
});