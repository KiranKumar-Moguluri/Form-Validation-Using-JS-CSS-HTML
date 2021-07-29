const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isvalid = false;
let passwordsMatch = false;

function validateform(){
    // using constraint API
   isvalid = form.checkValidity();
   if(!isvalid)
   {
       
   message.textContent = 'Please fill out the fields';
   message.style.color = 'red';
   messageContainer.style.bordercolor = 'red';
    return;
   }

   if(password1.value === password2.value)
   {
       passwordsMatch = true;
       password1.style.borderColor = 'green';
       password2.style.borderColor = 'green';
   }
   else{
    passwordsMatch = false;
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';

    message.textContent = 'please match the passwords';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;

   }

   if(isvalid && passwordsMatch){
       message.textContent = 'Successfully registered...!';
       message.style.color = 'green';
       messageContainer.style.borderColor = 'green';
   }
}

function storedata(){
    const userDetails={
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    console.log(userDetails);
}

function processformdata(e){
  e.preventDefault();
    validateform();

    // submit if data is valid
    if(isvalid && passwordsMatch)
    {
        storedata();
    }

}

form.addEventListener('submit', processformdata);

