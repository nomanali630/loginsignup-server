


function signup() {
    let name1 = document.getElementById("name").value;
    let email2 = document.getElementById("email").value.toLowerCase();
    let password3 = document.getElementById("password").value;
    let gender4 = document.getElementById("gender").value;
    let national5 = document.getElementById("national").value;


    user = {
        UserName: name1,
        UserEmail: email2,
        UserPassword: password3,
        UserGender: gender4,
        UserNationality: national5,
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("age").value = "";
  
    const Http = new XMLHttpRequest();
    const url = 'http://Localhost:3000/signup';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = () => {
        console.log(Http.responseText)
        document.getElementById("abc").innerHTML= Http.responseText ;
    }
    return false;
}




function login() {

    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upassword').value;
   
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: uemail, pass: upassword }));
    document.getElementById('uemail').value = "";
    document.getElementById('upassword').value = "";
    Http.onreadystatechange = () => {
        console.log(Http.responseText)
        document.getElementById("abc2").innerHTML= Http.responseText ;
        

    }
  return false;
}








