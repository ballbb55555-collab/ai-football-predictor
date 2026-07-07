herefunction analyze(){

let home = document.getElementById("home").value;
let away = document.getElementById("away").value;


if(home=="" || away==""){

document.getElementById("result").innerHTML =
"⚠️ กรุณาใส่ชื่อทีมก่อน";

return;

}


if(home==away){

document.getElementById("result").innerHTML =
"⚠️ กรุณาเลือกคนละทีม";

return;

}


// AI จำลองการวิเคราะห์ V3

let homePower = Math.floor(Math.random()*40)+60;
let awayPower = Math.floor(Math.random()*40)+60;


let homeGoal = Math.floor(Math.random()*3);
let awayGoal = Math.floor(Math.random()*3);


let winner;


if(homePower > awayPower){

winner = home+" มีโอกาสชนะ";

}
else if(awayPower > homePower){

winner = away+" มีโอกาสชนะ";

}
else{

winner = "โอกาสเสมอ";

}



let total = homeGoal + awayGoal;

let over;


if(total>=3){

over="สูง 2.5 มีโอกาส";

}else{

over="ต่ำ 2.5 มีโอกาส";

}



document.getElementById("result").innerHTML =

`
<div class="score">
${homeGoal} - ${awayGoal}
</div>

<p>🏆 ${winner}</p>

<p>📊 ความแข็งแกร่ง</p>

<p>
${home}: ${homePower}%
<br>
${away}: ${awayPower}%
</p>

<p>⚽ ${over}</p>
`;

}
