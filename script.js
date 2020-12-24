


function signup() {
    let name1 = document.getElementById("name").value;
    let email2 = document.getElementById("email").value.toLowerCase();
    let password3 = document.getElementById("password").value;
    let gender4 = document.getElementById("gender").value;
    let national5 = document.getElementById("national").value;


    user = ({
        UserName: name1,
        UserEmail: email2,
        UserPassword: password3,
        UserGender: gender4,
        UserNationality: national5,
    })
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("age").value = "";
  
    const Http = new XMLHttpRequest();
    const url = 'http://Localhost:3000/signup';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText);
    }








    // console.log(users);

    return false;
}




function login() {

    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
   
    const Http = new XMLHttpRequest();
    const url = 'https://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: uemail, pass: upassword }));
    document.getElementById('uemail').value = "";
    document.getElementById('upassword').value = "";
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        

    }
  return false;
}





// function showData() {
    
//     document.getElementById("new").innerHTML = "Name : " + newUser[cIndex].UserName
//     document.getElementById("new1").innerHTML = "Email : " + newUser[cIndex].UserEmail
//     document.getElementById("new2").innerHTML = "Password : " + newUser[cIndex].UserPassword
//     document.getElementById("new3").innerHTML = "Gender : " + newUser[cIndex].UserGender
//     document.getElementById("new4").innerHTML = "Nationality : " + newUser[cIndex].UserNationality
// }



