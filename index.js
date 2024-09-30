document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedback = document.getElementById("feedback").value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill out all required fields.");
            return; // Stop form submission if validation fails
        }

        // Log the data (you can replace this with an actual form submission)
        console.log("Form Submitted:", { name, email, message, feedback });

        // Display a confirmation message
        alert(`Thank you, ${name}! Your message has been sent. We value your feedback: ${feedback}.`);

        // Optionally reset the form
        form.reset();
    });
});