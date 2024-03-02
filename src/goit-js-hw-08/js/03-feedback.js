// Importăm biblioteca lodash.throttle
import throttle from 'lodash.throttle';

const saveFormState = throttle(() => {
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

document.querySelector('.feedback-form').addEventListener('input', saveFormState);

window.addEventListener('load', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const formData = JSON.parse(savedState);
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
});


document.querySelector('.feedback-form').addEventListener('submit', event => {
    event.preventDefault(); 

    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log('Form data submitted:', formData);

    localStorage.removeItem('feedback-form-state');
    document.querySelector('.feedback-form').reset();
});
