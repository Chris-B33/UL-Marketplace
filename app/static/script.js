console.log("Script loaded.")

document.addEventListener("DOMContentLoaded", () => {
    // Select the button by its ID
    const button = document.getElementById("button");

    // Check if the button exists
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked! Welcome to the marketplace 😊");
        });
    }
});