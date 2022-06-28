var passwordText=document.getElementById("password");
const btn = document.getElementById('ojo');

btn.addEventListener('click',() =>{
    if (btn.classList.contains('closed')){
        passwordText.type="text";
        btn.classList.add('open')
        btn.classList.remove('closed')
    }
    else{
        passwordText.type="password";
        btn.classList.remove('open')
        btn.classList.add('closed')
    }
})
