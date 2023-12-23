document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('fname');

    // Add an event listener for the 'blur' event (when the input loses focus)
    inputField.addEventListener('blur', function () {
        // Convert the content to uppercase
        inputField.value = inputField.value.toUpperCase();
    });
});
