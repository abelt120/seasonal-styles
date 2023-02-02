
/*$("document").ready(function(){
    let counter = 0;
    $("div#myDiv p").each(function(){
        counter++;
        $(this).prepend(counter + "] ").fadeOut(3000);
    });
  
});*/

/*
$("document").ready(function () {
    //start hidden
    $("div#yetAnotherDiv li").hide();


    //reveal li items
    $("div#yetAnotherDiv")
        .hide()
        .fadeIn(2000, function () {
            $("div#yetAnotherDiv li").each(function () {
                $(this).slideDown(1000);
            });
        });


});*/

$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
            break;
            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color"," #EBA52B");
            break;    
            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
            break;
            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");

            break;

            default:
                alert("No case matches");
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src","images/300x400.png");

        }
    });
});

