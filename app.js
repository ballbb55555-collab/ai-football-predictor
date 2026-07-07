// AI FOOTBALL ENGINE V3

function AIAnalyze(home, away){

    let formDiff = home.form - away.form;

    let win = 50 + (formDiff * 6);
    
    if(win > 80) win = 80;
    if(win < 20) win = 20;


    let draw = 30 - Math.abs(formDiff * 3);

    if(draw < 10) draw = 10;


    let lose = 100 - win - draw;


    let totalGoal = home.goal + away.goal;

    let over = totalGoal >= 2.5 ? 65 : 42;

    let btts = (home.goal >= 1 && away.goal >= 1) ? 68 : 45;


    let score;

    if(home.goal > away.goal){
        score = "2 - 1";
    }
    else if(home.goal < away.goal){
        score = "1 - 2";
    }
    else{
        score = "1 - 1";
    }


    return {
        homeWin: Math.round(win),
        draw: Math.round(draw),
        awayWin: Math.round(lose),
        over: over,
        btts: btts,
        score: score
    };
}


// ตัวอย่างข้อมูลทีม

let teamA = {
    name:"Liverpool",
    form:4,
    goal:2
};


let teamB = {
    name:"Arsenal",
    form:3,
    goal:1.8
};


// แสดงผล AI

console.log(
    AIAnalyze(teamA,teamB)
);
