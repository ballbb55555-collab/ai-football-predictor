function saveData(){

const data = {

home: document.getElementById("home").value,
away: document.getElementById("away").value,

logo1: document.getElementById("logo1").value,
logo2: document.getElementById("logo2").value,

rank: document.getElementById("rank").value,

odds: document.getElementById("price").value,

ou: document.getElementById("overunder").value,

btts: document.getElementById("bttsInput").value,

prediction: document.getElementById("prediction").value,

score: document.getElementById("scoreInput").value

};

localStorage.setItem("matchData", JSON.stringify(data));

loadData();

alert("บันทึกข้อมูลเรียบร้อย");
}

function loadData(){

const data = JSON.parse(localStorage.getItem("matchData"));

if(!data) return;

document.getElementById("homeName").innerText = data.home || "ทีมเหย้า";
document.getElementById("awayName").innerText = data.away || "ทีมเยือน";

if(data.logo1)
document.getElementById("homeLogo").src = data.logo1;

if(data.logo2)
document.getElementById("awayLogo").src = data.logo2;

document.getElementById("tableRank").innerHTML = data.rank || "-";

document.getElementById("odds").innerHTML = data.odds || "-";

document.getElementById("ou").innerHTML = data.ou || "-";

document.getElementById("btts").innerHTML = data.btts || "-";

if(data.prediction){

let p = data.prediction.split("-");

if(p.length==3){

document.getElementById("predict").innerHTML =
`เจ้าบ้าน ${p[0]}%<br>
เสมอ ${p[1]}%<br>
ทีมเยือน ${p[2]}%`;

}

}

if(data.score){

document.getElementById("score").innerHTML =
data.score.replace("-"," - ");

}

}

window.onload = loadData;
