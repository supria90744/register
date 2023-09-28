const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();

    }
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success=true
    if(usernameVal===''){
        success=false;
        setError(username,'Username is Required')
    }
    else{
        setSuccess(username)
    }
    if(emailVal===''){
        success=false;
        setError(email,'Email is requires')
    }
    else if(!validateEmail(emailVal)){
        success=false;
    setError(email,'Email is invalid')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        success=false;
        setError(password,'Password is Required')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'Password must be atleast 8 charaters long')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'Password is Required')
    }
    else if(cpasswordVal!=passwordVal){
        success=false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;
}
function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');
    errorElement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}
function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');
    errorElement.innerText='';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    );
};