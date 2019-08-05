function useClock(){
    var today = new Date();

    var hours = today.getHours();
    var ampm = " AM";
    if(parseInt(hours) > 12){
        hours = (parseInt(hours) -12).toString();
        ampm
 =" PM";
    }

    var date1 = hours+':'+today.getMinutes() + ampm;
    var date2 = today.getHours()+':'+today.getMinutes()+":"+today.getSeconds() + ampm;
    document.getElementById("clock").innerHTML = date1;
    
}
