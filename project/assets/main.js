var username =document.querySelector('#username')
var email =document.querySelector('#email')
var password =document.querySelector('#password')
var confirmPassword =document.querySelector('#conform-password')
var form = document.querySelector('form')


function showError(input){
    let parent=input.parentElement ;
    let small=parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent=input.parentElement ;
    let small=parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput){
    let isEmptyError=false;
    listInput.forEach(input => {
        input.value= input.value.trim()

        if(!input.value){
            isEmptyError=true;
            showError(input,'Khong duoc bo trong')
        }
        else{
            showSuccess(input)
        }
    });
     return isEmptyError
}

function checkEmail(){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    input.value=input.value.trim()
    let isEmailError=!regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email Invalid')
    }
    return isEmailError
}

function checkLengthError(input, min, max){
    input.value=input.value.trim()

    if(input.value.length < min){
        showError(input, 'Phai co it nhat ${min} ky tu')
        return true
    }
    if(input.value.length > max){
        showError(input, 'Khong duoc qua ${max} ky tu')
        return true
    }
    else{
        showSuccess(input)
        return false
    }
}

function checkMatchPassword(passwordInput, cfPasswordInput){
    if(passwordInput.value!=cfPasswordInput.value){
        showError(cfPasswordInput,'Mat khau khong trung khop')
        return true
    }
    return false
}

form.addEventListener('submit', function (e){
    e.preventDefault()

    let isEmptyError=checkEmptyError(username, email, password, confirmPassword)
    let isEmailError=checkEmail(email)
    let userNameLengthError=checkLengthError(username, 3, 15)
    let isPasswordLengthError=checkLengthError(password, 6, 25)
    let ischeckErrorPass=checkMatchError(password, confirmPassword)
})