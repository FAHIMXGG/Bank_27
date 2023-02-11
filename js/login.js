// s1 add click submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2 get email
    const emailField = document.getElementById('email');
    const email = emailField.value
    
    // set 3 get pass
    const passField = document.getElementById('password');
    const password = passField.value
    //console.log(email, password)
    //step 4 verify pass
    if (email === 'hoga@x.com' && password === 'hoga') {
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})