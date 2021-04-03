document.getElementById("profile").onclick = function(){
     $(document).ready(function(){
            $(".resumeContet").fadeOut(500,function(){
                $(".portfolioContet").fadeOut(100)
                $(".contactContet").fadeOut(100,function(){
                $("#profile").css("color","#fdc750")
                $("#portfolio").css("color","#fdc750")
                $("#resume").css("color","#fdc750")
                $("#contact").css("color","#fdc750")
                    $(".pearnt").fadeIn(1000)
                })
            });    
        })
}

document.getElementById("resume").onclick = function(){
    $(document).ready(function(){
        $(".pearnt").fadeOut(500,function(){
            $(".portfolioContet").fadeOut(100)
            $(".contactContet").fadeOut(100,function(){
                 $("#profile").css("color","#b9b9b9")
                $("#portfolio").css("color","#b9b9b9")
                $("#resume").css("color","#fdc750")
                $("#contact").css("color","#b9b9b9")

                $(".resumeContet").fadeIn(1000)
            })
        });    
    })
}

document.getElementById("portfolio").onclick = function(){
   $(document).ready(function(){
        $(".pearnt").fadeOut(500,function(){
            $(".resumeContet").fadeOut(100)
            $(".contactContet").fadeOut(100,function(){
                 $("#profile").css("color","#b9b9b9")
                $("#portfolio").css("color","#fdc750")
                $("#resume").css("color","#b9b9b9")
                $("#contact").css("color","#b9b9b9")
                $(".portfolioContet").fadeIn(1000)
            })
        });    
    })
}

document.getElementById("contact").onclick = function(){
   $(document).ready(function(){
        $(".pearnt").fadeOut(500,function(){
            $(".portfolioContet").fadeOut(100)
            $(".resumeContet").fadeOut(100,function(){
                $("#profile").css("color","#b9b9b9")
                $("#portfolio").css("color","#b9b9b9")
                $("#resume").css("color","#b9b9b9")
                $("#contact").css("color","#fdc750")
                $(".contactContet").fadeIn(1000)
            })
        });    
    })
}




$(window).on("load", function () { 
    "use strict";
    $("body").css("overflow", "auto");
    $(".spinner").fadeOut(5000, function () {
        $(this).parent().fadeOut(2000);
    });       
});