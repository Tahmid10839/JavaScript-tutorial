const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validname = false;
let validemail = false;
let validphone = false;

$('#success').hide();
$('#failure').hide();

username.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z][0-9a-zA-Z_]{2,9}$/;
    let str = username.value;
    if(str!=""){
        if(regex.test(str)){
            console.log("Matched");
            username.classList.remove("is-invalid");
            validname = true;
        }
        else{
            console.log("Did not match");
            username.classList.add("is-invalid");
            validname = false;
        }
    } 
})
email.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z]+[_\-0-9a-zA-Z]+[^_\-]+@[a-zA-Z]+[\.a-zA-Z]+\.[a-zA-Z]{2,7}$/;
    let str = email.value;
    if(str!=""){
        if(regex.test(str)){
            console.log("Matched");
            email.classList.remove("is-invalid");
            validemail = true;
        }
        else{
            console.log("Did not match");
            email.classList.add("is-invalid");
            validemail = false;
        }
    } 
})
phone.addEventListener('blur',()=>{
    let regex = /^[0][0-9]{10}$/;
    let str = phone.value;
    if(str!=""){
        if(regex.test(str)){
            console.log("Matched");
            phone.classList.remove("is-invalid");
            validphone = true;
        }
        else{
            console.log("Did not match");
            phone.classList.add("is-invalid");
            validphone = false;
        }
    } 
})

let submit = document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let success = document.getElementById("success");
    let failure = document.getElementById('failure');
    if(validname && validemail && validphone){
        success.classList.add("show");
        // failure.classList.remove("show");
        $('#success').show();
        $('#failure').hide();
    }
    else{
        failure.classList.add("show");
        // success.classList.remove("show");
        $('#failure').show();
        $('#success').hide();
    }
    
})