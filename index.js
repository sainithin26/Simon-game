var gameArray =[];

var colors=["red","blue","green","yellow"];

var level=0;

var userClickedArray=[];

$(document).keydown(function(){
    nextSequnce();
});

$(".btn").click(function(){

    var buttonClicked=$(this).attr('id');
    userClickedArray.push(buttonClicked);

    animate(buttonClicked);
    checkArray(userClickedArray.length-1);
});

function nextSequnce()
{
    userClickedArray=[];

    var randomNum=Math.floor(Math.random()*4);
    var randomChosenColor=colors[randomNum];
    gameArray.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio=new Audio(randomChosenColor+".mp3");
    audio.play();

    $('h1').text("level "+(level++));
}

function animate(currentKey){

    $("#"+currentKey).addClass("pressed");

    var audio=new Audio(currentKey+".mp3");
    audio.play();

    setTimeout(function(){
        $("#"+currentKey).removeClass("pressed");
    },100);
}

function checkArray(currentIndex){

    if(userClickedArray[currentIndex]===gameArray[currentIndex]){
        if(userClickedArray.length===gameArray.length)
        {
            setTimeout(function(){
                nextSequnce();
            },1000);
        } 
    }
    else{

        var audio=new Audio("wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        $("h1").text("Game Over! Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
}

function startOver(){
    level=0;
    gameArray=[];
}