const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea')

// localStorage.clear()
const storageKey = "feedback-form-state";

const formData = {
    email: '',
    message: '',
}

form.addEventListener('submit', handleForm);
form.addEventListener('input', handleInputForm);



const valueStorage = localStorage.getItem(storageKey);
const parc = JSON.parse(valueStorage);

if(parc !== null && parc !== undefined){
    input.value = parc.email;
    textArea.value = parc.message;
    formData.email = parc.email;
    formData.message = parc.message;
    
    
}