const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
        if (userEmail !== "" && userPassword !== "") {
           const data = {
            email: userEmail,
            password: userPassword,
        };
            console.log(data);
            form.reset();
            return;
    }
     alert("Please, fill in all the fields");
    
    }
    
