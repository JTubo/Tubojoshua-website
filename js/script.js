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

//emailjs

function sendMail() {
  (function () {
    emailjs.init("D4EFA7xsa90EaOx6e");
  })();

  var params = {
    sendername: document.querySelector("#sendername").value,
    to: document.querySelector("#to").value,
    subject: document.querySelector("#subject").value,
    replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };
  var serviceID = "service_8rf4cqi";
  var templateID = "template_ge96bnc";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email send successfully!");
    })
    .catch();
}
