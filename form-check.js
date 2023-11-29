

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

