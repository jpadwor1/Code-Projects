const birthday = new Date("October 13, 2023 12:00:00").getTime();


const countdown = setInterval(function(){
    const today = new Date().getTime();
    //difference is milliseconds so we divide by 1000 to get seconds
    const difference = (birthday - today); 

    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor((difference / (1000 * 60 * 60 * 24)));
    
    document.getElementById("secs").innerHTML = seconds;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("days").innerHTML = days;


    if (difference < 0){
        clearInterval(countdown);
        document.getElementById("#title").innerHTML = "Yay you are 31!";
    }
},1000)