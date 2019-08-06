function useClock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = " AM";
    if(parseInt(hours) > 12){
        hours = "0" + (parseInt(hours) -12).toString();
        ampm =" PM";
    }else if(parseInt(hours) == 12){
        hours = "00";
    }
    
    if(parseInt(minutes) < 10){
        minutes = "0"+minutes;
    }

    var date1 = hours+':'+minutes + ampm;
    var date2 = today.getHours()+':'+minutes+":"+today.getSeconds() + ampm;
    document.getElementById("clock").innerHTML = date1;
    
}
