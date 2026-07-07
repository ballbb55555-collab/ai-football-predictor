const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
res.send("AI FOOTBALL API SERVER RUNNING");
});


app.get("/teams",(req,res)=>{

// จุดนี้ไว้เชื่อม Football API จริง

res.json({
message:"พร้อมเชื่อมฐานข้อมูลฟุตบอล"
});

});


app.listen(3000,()=>{

console.log("Server running on port 3000");

});
