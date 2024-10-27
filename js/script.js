// Typing Animation for Roles
const roles = ["Developer", "Designer", "Programmer"];
let currentRoleIndex = 0;
let currentCharacterIndex = 0;
const typingSpeed = 100; // Speed of typing each character
const delayBetweenRoles = 1500; // Delay between each role
const typingElement = document.querySelector(".typing-roles");

function typeRole() {
  const currentRole = roles[currentRoleIndex % roles.length];
  if (currentCharacterIndex < currentRole.length) {
    typingElement.innerHTML += currentRole[currentCharacterIndex++];
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  const currentRole = roles[currentRoleIndex % roles.length];
  if (currentCharacterIndex > 0) {
    typingElement.innerHTML = currentRole.substring(0, --currentCharacterIndex);
    setTimeout(eraseRole, typingSpeed);
  } else {
    currentRoleIndex++;
    setTimeout(typeRole, typingSpeed);
  }
}

// Ensure DOM is fully loaded before starting the typing animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeRole, 500); // Start typing after a slight delay
});

// JavaScript to handle pagination
const articlesPerPage = 3;
let currentPage = 1;

function showPage(page) {
  const articles = document.querySelectorAll(".article");
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Ensure the page is within the range
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  currentPage = page;

  // Hide all articles
  articles.forEach((article, index) => {
    article.style.display = "none";
  });

  // Show only the articles for the current page
  const start = (page - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  for (let i = start; i < end && i < articles.length; i++) {
    articles[i].style.display = "block";
  }
}

// Initialize with the first page
showPage(1);

//contact emailjs
(function () {
  emailjs.init("D4EFA7xsa90EaOx6e"); // Replace with your actual User ID
})();

function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission

  var params = {
    sendername: document.querySelector("#user_name").value,
    to: document.querySelector("#user_email").value,
    subject: "New Message from Contact Form", // Default subject
    replyto: document.querySelector("#user_email").value,
    message: document.querySelector("#user_message").value,
  };

  var serviceID = "service_8rf4cqi"; // Your service ID
  var templateID = "template_ge96bnc"; // Your template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("success").style.display = "block";
      document.getElementById("error").style.display = "none";
      console.log("Email sent successfully!", res.status);
    })
    .catch((err) => {
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
      console.error("Failed to send email. Error: ", err);
    });
}
