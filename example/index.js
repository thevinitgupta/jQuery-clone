$(()=> {
    console.log("jQuery online!");
    
    $("h1").css("color","#bbfd24");

    //$(".intro").hide();
    console.log($("ul").html());

    $(".intro").append("<br><span>  I Rock!!</span>");

    $("h1").prepend("<h2>Welcome!!</h2>");

    console.log($("input").val());

    console.log($("ul").text());
    
    $("h1").on("click",function(){
        $(this).css("font-size","3rem")
        console.log("clicked!")
    });

    $("li").each(function(i,el){
        if(i%2!==0){
            console.log($(this).text())
            $(this).css({
                color:"blueviolet",
                fontSize : "1.5rem",
                fontWeight : "bold"
            })
        }
    })
    console.log($("li").css("color"))
})