document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            alert("Name is required");
        } 
        if (emailInput.value.trim() === "") {
            alert("Email is required");
        } 
        if (isValid) {
            alert("Form submitted successfully!");
        } else {
            e.preventDefault(); 
        }
    });
});
