var userArray=[];
var passwordArray=[];

function checkRegister(){
    event.preventDefault();

    var user = document.getElementById("useridRe").value;
    var password = document.getElementById("pwdRe").value;
    var passwordRetype = document.getElementById("confirmpassword").value;
    if (user == ""){
        alert("UserID required.");
        return false;
    }
    else if (password == ""){
        alert("Password required.");
        return false;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return false;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return false;
    }
    if(userArray.indexOf(user) == -1){
        userArray.push(user);
        passwordArray.push(password);
        console.log(userArray)
        console.log(passwordArray)
        alert(user + "  Thanks for registration. \nTry to login Now");

        document.getElementById("useridRe").value ="";
        document.getElementById("pwdRe").value="";
        document.getElementById("confirmpassword").value="";
        document.getElementById("email").value="";
        login();
        return true;
        
    }
    else{
        alert(user + " is already register.");
        return false;
    }
}

function checkLogin(){
    event.preventDefault();

    var user = document.getElementById("useridLog").value;
    var password = document.getElementById("pwdLog").value;
    console.log(userArray)
    console.log(passwordArray)
    var i = userArray.indexOf(user)
    if(userArray.indexOf(user) == -1){
        if (user == ""){
            alert("User required.");
            return ;
        }
        alert("User does not exist.");
        return false;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return false;
        }
        alert("Password does not match.");
        return false;
    }
    else {
        alert(user + " yor are login Now \n welcome to our website.");
        document.getElementById("useridLog").value ="";
        document.getElementById("pwdLog").value="";
        return true;
    }
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

