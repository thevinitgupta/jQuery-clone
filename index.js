$(()=> {
    console.log("jQuery online!");
    
    $("h1").css("color","#bbfd24");

    //$(".intro").hide();
    console.log($("ul").html());

    $(".intro").append("<br><span>  I Rock!!</span>");

    $("h1").prepend("<h2>Welcome!!</h2>");

    console.log($("input").val());
    console.log($("input").val("This is new text!"));
    console.log($("ul").text());
    
    $("h1").on("click",function(){
        $(this).css("font-size","3rem")
        console.log("clicked!")
    });
    $("h2").css({
                 color:"blueviolet",
                 fontSize : "1.5rem",
                 fontWeight : "bold"
                });
    console.log($("h2").css("color"))
    $(".btn").on("click",function(){
        if( $(".btn").html()==="Show")
        $(".btn").html("Hide");
        else if ($(".btn").html()==="Hide")
        $(".btn").html("Show");
            $("input").toggle();
    })
   
    $("li").each(function(i,element){
        if(i%2!==0){
            $(this).css({
                color:"blueviolet",
                fontSize : "1.5rem",
                fontWeight : "bold"
            })
        }
    })
})