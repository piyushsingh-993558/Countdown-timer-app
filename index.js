const endDate=new Date("2january  ,2026 00:37:08").getTime();
const startDate =new Date().getTime();

 let x= setInterval(function updateTimer(){
    const now=new Date().getTime();
    const distanceCovered=now-startDate;
    // time->milliseconds
    const distancePending=endDate-now;
    // calculate days/hrs/minutes/seconds
    // 1day=24*60*60*1000ms
    const days=Math.floor(distancePending/(24*60*60*1000));
  const hrs=Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
  const mins=Math.floor((distancePending%(60*60*1000))/(60*1000));
  const secs=Math.floor((distancePending%(60*1000))/(1000));

// populate in upi
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hrs;
document.getElementById("minutes").innerHTML=mins;
document.getElementById("seconds").innerHTML=secs;

// calculate width percentage for progress bar

const totalDistance=endDate-startDate;
const percentageDistance=(distanceCovered/totalDistance)*100;
// set width for progress-bar
document.getElementById("progress-bar").style.width=percentageDistance+"%";
if(distancePending<0){
  clearInterval(x);
  document.getElementById("Countdown").innerHTML="EXPIRED";
  document.getElementById("progress-bar").style.width="100%";

}





} ,1000);
