let countMs = 0;
let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;

$("#start").click(function(){
    function milliseconds(){
        $(".time").html(countHours + ":" + countMinutes + ":" + countSeconds + ":" + countMs);
        if (countMs <= 8){
            countMs += 1;
            console.log(countMs);
        }else{
            countMs = 0;
            console.log(0);
        }
    }

    sessionMs = setInterval(milliseconds, 100);

    function seconds(){
        if (countSeconds <= 58){
            countSeconds += 1;
            console.log(countSeconds);
        }else{
            countSeconds = 0;
            console.log(0);
        }
    }

    sessionSeconds = setInterval(seconds, 1000);

    function minutes(){
        if (countMinutes <= 58){
            countMinutes += 1;
            console.log(countMinutes);
        }else{
            countMinutes = 0;
            console.log(0);
        }
    }
    
    sessionMinutes = setInterval(minutes, 60000);

    function hours(){
        if (countHours <= 58){
            countHours += 1;
            console.log(countHours);
        }else{
            countHours = 0;
            console.log(0);
        }
    }

    sessionHours = setInterval(hours, 3600000);
    
    document.getElementById("start").disabled = true;
});


$("#reset").click(function(){
    $(".time").html(0 + ":" + 0 + ":" + 0 + ":" + 0);
    countMs = 0;
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
});


$("#stop").click(function(){
    clearInterval(sessionMs);
    clearInterval(sessionSeconds);
    clearInterval(sessionMinutes);
    clearInterval(sessionHours);
    document.getElementById("start").disabled = false;
});
