hereconst express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


const API_KEY = "ใส่_API_KEY_ตรงนี้";


app.get("/teams", async(req,res)=>{

try{

let data = await axios.get(
"https://v3.football.api-sports.io/teams?league=39&season=2025",
{
headers:{
"x-apisports-key":API_KEY
}
}
);


res.json(data.data);


}catch(error){

res.json({
error:"เชื่อมต่อ API ไม่สำเร็จ"
});

}

});


app.listen(3000,()=>{

console.log("AI FOOTBALL SERVER START");
});
