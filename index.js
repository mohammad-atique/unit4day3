const express = require("express");

const app = express();


app.get("/books",allBooks, (req,res)=>{
    return res.send([{name: "GameOfThrones"},{name: "HarryPotter"}])
});


app.get("/book/:name",singleBook,(req,res)=>{
    return res.send([{bookName:req.name}])
});


function singleBook(req,res,next){
 
    req.name = req.params.name;
        
    console.log("fetching One book")
    next();
}


function allBooks(req,res,next){
    console.log("Fetching all Books");
    next();
};








app.listen(5000,()=>{
    console.log("listening to 5000")
})