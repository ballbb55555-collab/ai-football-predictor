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

}async function loadTeams(){

let league = document.getElementById("league").value;

if(league==""){
return;
}


let response = await fetch(
"http://localhost:3000/teams?league="+league
);

let data = await response.json();


let home = document.getElementById("home");
let away = document.getElementById("away");


home.innerHTML = "<option>เลือกทีมเหย้า</option>";
away.innerHTML = "<option>เลือกทีมเยือน</option>";


data.response.forEach(item=>{


let h = document.createElement("option");
h.value = item.team.name;
h.textContent = item.team.name;
h.dataset.logo = item.team.logo;

let a = document.createElement("option");
a.value = item.team.name;
a.textContent = item.team.name;
a.dataset.logo = item.team.logo;

home.appendChild(h);
away.appendChild(a);


});


}
