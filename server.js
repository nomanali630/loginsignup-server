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

    var isfound = false;

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

app.post("/login", function (req, res, next) {
    vEmail = req.body.email
    vPassword = req.body.pass
    isfound = false;
    for (i = 0; i < users.length; i++) {
        if (users[i].UserEmail === vEmail) {
            isfound = i;
           break;
        }
    }
   if (isfound === false){
       res.send("user not found");
     }
     else if (users[isfound].UserPassword === vPassword){
         res.send("login success " +"Name : "+ users[i].UserName+ "Email : "+users[i].UserEmail)
     }
     else{
         res.send("user password invalid")
     }

})

app.listen(3000, function () {
    console.log("server is running");
});