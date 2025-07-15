let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userRepass = document.getElementById("userRepass");
let userPhone = document.getElementById("userPhone");
let btn = document.querySelector(".btn");



btn.addEventListener("click", function(){
    let userData = {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
        rePassword:userRepass.value,
        phone:userPhone.value
    }
    console.log(userData);
    signUp(userData);

});

async function signUp(data){
    let res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    );
    let result = await res.json();
    console.log(result);

}

btn.addEventListener("click", () => {

    window.location.href = "https://ma7moud-elsakkar.github.io/PhotoFilters/";

});
