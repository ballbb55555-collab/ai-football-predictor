const teams = [

{
name:"Manchester City",
logo:"https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
},

{
name:"Liverpool",
logo:"https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
},

{
name:"Arsenal",
logo:"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
},

{
name:"Chelsea",
logo:"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
},

{
name:"Manchester United",
logo:"https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
},

{
name:"Tottenham",
logo:"https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
}

];


const homeSelect = document.getElementById("home");
const awaySelect = document.getElementById("away");


teams.forEach(team=>{

let h=document.createElement("option");
h.value=team.name;
h.textContent=team.name;
homeSelect.appendChild(h);


let a=document.createElement("option");
a.value=team.name;
a.textContent=team.name;
awaySelect.appendChild(a);

});



homeSelect.addEventListener("change",()=>{

let team=teams.find(t=>t.name==homeSelect.value);

if(team){

document.getElementById("homeLogo").src=team.logo;
document.getElementById("homeName").textContent=team.name;

}

});



awaySelect.addEventListener("change",()=>{

let team=teams.find(t=>t.name==awaySelect.value);

if(team){

document.getElementById("awayLogo").src=team.logo;
document.getElementById("awayName").textContent=team.name;

}

});
