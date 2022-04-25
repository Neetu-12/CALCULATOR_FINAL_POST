const express=require("express")
var app=express()
const path=require("path")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const tempelate_path=path.join(__dirname,"../client")
app.set("view engine","hbs")

app.set("views",tempelate_path)

app.get("/calculator",(req,res)=>{
    res.render("index")
})

app.post("/calculator",(req,res)=>{ 
    console.log(req.body.v1);
    res.send(String(Number(req.body.v1)+Number(req.body.v2)))

})

.listen(8000,()=>{
    console.log("Listen at 8000 port");
})

