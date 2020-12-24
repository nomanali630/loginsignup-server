var users = [
    {
        UserName: "azhar",
        UserEmail: "azhar@gmail.com",
        UserPassword: "1234",
        UserGender: "male",
        UserNationality: "Pakistan",
    }
]

var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");


let app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.post("/signup", function (req, res, next) {
    var newEmail = req.body.UserEmail;
    console.log(newEmail);

    isfound = false;

    for (i = 0; i < users.length; i++) {
        if (users[i].UserEmail === newEmail) {
            isfound = true;
            break;
        }


    }
    if (isfound) {
        res.send("email already exists")
    }
    else {
        users.push(req.body);
        res.send("signup successfully")
    }
        console.log(users)
});

app.post("/login",function(req,res,next){
    vEmail = req.body.email
    vPassword = req.body.pass
    isfound = false;
     for (i = 0; i < users.length ; i++){
         if(users[i].UserEmail === vEmail){
             isfound = true;
         }
     }
})

app.listen(3000, function () {
    console.log("server is running");
});