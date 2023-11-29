window.addEventListener("DOMContentLoaded", () => {
    let form_errors = ["Test Value"]
    let errors_output = document.getElementById("form-errors");
    let name_box = document.getElementById("name");
    let email_box = document.getElementById("email");
    let message_box = document.getElementById("message-box");
    let form = document.querySelector("form");
    errors_output.value = JSON.stringify(form_errors);

    form.addEventListener("submit", (e) => {
        
        if (errors_output.value != null) {
            let form_errors = JSON.parse(errors_output.value);
        }

        if (!email_box.validity.valid) {
            form_errors.push("Invalid email!");
            errors_output.value = JSON.stringify(form_errors);
            event.preventDefault();
        }
        if (!name_box.validity.valid) {
            form_errors.push("Invalid name, somehow!");
            errors_output.value = JSON.stringify(form_errors);
            event.preventDefault();
        }
        if (!message_box.validity.valid) {
            form_errors.push("Too many characters!");
            errors_output.value = JSON.stringify(form_errors);
            event.preventDefault();
        }
        console.log(form_errors);
        
    });
});

function updateCharCount() {
    var message_box = document.querySelector("#message-box");
    var message_char = document.getElementById("message-info");

    let char_count = message_box.value.length
    message_char.innerHTML = `${250 - char_count}`

    if (char_count > 225) {
        message_char.style = 'color: red';
    } else if (char_count > 150) {
        message_char.style = 'color: orange';
    } else {
        message_char.style = 'color: black';
    }
};

