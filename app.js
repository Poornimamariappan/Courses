document.getElementById("changeTextButton").addEventListener("click", function () {
    const dynamicText = document.getElementById("dynamicContent");
    dynamicText.innerText = "Frontend";
    dynamicText.style.color = "#4CAF50"; // Change text color after clicking
});

// Toggle FAQ answers visibility
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
    item.addEventListener("click", function () {
        const answer = item.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}. We will get back to you soon!`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields!");
    }
});

const form = document.getElementById('certificateForm');
const certificate = document.getElementById('certificate');
const studentName = document.getElementById('studentName');
const dateElement = document.getElementById('date');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered name
    const name = document.getElementById('name').value.trim();

    // Validate if the name is provided
    if (name) {
        // Set the student's name and current date
        studentName.textContent = name;
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        dateElement.textContent = `Completed on: ${dateString}`;

        // Show the certificate
        certificate.style.display = 'block';
    } else {
        alert("Please enter your name!");
    }
});

// JavaScript to change the background color of the page
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF6347', '#90EE90', '#ADD8E6', '#FFD700', '#8A2BE2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
