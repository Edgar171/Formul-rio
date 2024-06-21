function ValidateForm(){
        var fname = document.getElementById('fname').ariaValueMax.trim();
        var email = document.getElementById('email').ariaValueMax.trim();
        var message = document.getElementById('message').ariaValueMax.trim();

    if(fname === ''){
        alert('Preencha o campo nome!');
        return false;
   }

   if(email === ''){
    alert('Preencha o campo email!');
    return false;
}

if(message === ''){
    alert('Preencha o campo message!');
    return false;
}

   return true;



}