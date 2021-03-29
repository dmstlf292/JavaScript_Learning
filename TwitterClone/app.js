const express = require('express');
const app = express();
const port = 3003;

const server = app.listen(port, ()=>{//callback 함수 
    console.log("Server listening on port" + port);
});

//서버에 알려주기
app.set("view engine", "pug");
app.set("views", "views");



app.get("/", (req, res, next)=>{

    var payload ={
        pageTitle :"Home"
    }
    res.status(200).render("home",payload);
})