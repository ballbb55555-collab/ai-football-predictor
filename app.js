herefunction predict(){

let home = document.getElementById("home").value;
let away = document.getElementById("away").value;


if(home=="" || away==""){

alert("กรุณาเลือกทีมก่อน");
return;

}


if(home==away){

alert("กรุณาเลือกคนละทีม");
return;

}


// AI จำลองการวิเคราะห์

let homeScore = Math.floor(Math.random()*3)+1;
let awayScore = Math.floor(Math.random()*3);


let result = "";

if(homeScore > awayScore){

result = "เจ้าบ้านมีโอกาสชนะ";

}
else if(homeScore < awayScore){

result = "ทีมเยือนมีโอกาสชนะ";

}
else{

result = "มีโอกาสเสมอ";

}



let total = homeScore + awayScore;

let over = "";

if(total >=3){

over = "คาดการณ์: สูง 2.5 มีโอกาส";

}
else{

over = "คาดการณ์: ต่ำ 2.5 มีโอกาส";

}



document.getElementById("score").innerHTML =
homeScore+" - "+awayScore;


document.getElementById("win").innerHTML =
"📊 "+result;


document.getElementById("over").innerHTML =
"⚽ "+over;


}
