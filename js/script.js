// Initialize EmailJS
(function () {
  emailjs.init("pikAPx-xP8NOB-kep"); // Replace with your actual EmailJS User ID
})();

// jQuery functions
(function ($) {
  "use strict";

  $(window).scroll(function () {
    if ($(".navigation").offset().top > 100) {
      $(".navigation").addClass("fixed-nav");
    } else {
      $(".navigation").removeClass("fixed-nav");
    }
  });

  $(".portfolio-gallery").each(function () {
    $(this)
      .find(".popup-gallery")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });

  $("#contact-form").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 4,
      },
      user_email: {
        required: true,
        email: true,
      },
      user_message: {
        required: true,
      },
    },
    messages: {
      user_name: {
        required: "Come on, you have a name don't you?",
        minlength: "Your name must consist of at least 2 characters",
      },
      user_email: {
        required: "Please put your email address",
      },
      user_message: {
        required: "Put some messages here?",
        minlength: "Your name must consist of at least 2 characters",
      },
    },
    submitHandler: function (form) {
      const user_name = document.querySelector('input[name="user_name"]').value;
      const user_email = document.querySelector(
        'input[name="user_email"]'
      ).value;
      const user_message = document.querySelector(
        'textarea[name="user_message"]'
      ).value;

      emailjs
        .send("YOUR_SERVICE_ID", "template_54y55lp", {
          user_name: user_name,
          user_email: user_email,
          user_message: user_message,
        })
        .then((response) => {
          console.log("Email sent successfully!", response);
          $("#contact-form #success").fadeIn(); // Show success message
          $("#contact-form #error").fadeOut();
        })
        .catch((error) => {
          console.error("Failed to send email", error);
          $("#contact-form #error").fadeIn(); // Show error message
          $("#contact-form #success").fadeOut();
        });
    },
  });

  $(".testimonial-slider").slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  });

  $(".portfolio-popup").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
    mainClass: "mfp-with-zoom",
    navigateByImgClick: true,
    arrowMarkup:
      '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    tPrev: "Previous (Left arrow key)",
    tNext: "Next (Right arrow key)",
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
})(jQuery);

// Typing Animation
const roles = ["Developer", "Designer", "Programmer"];
let currentRoleIndex = 0;
let currentCharacterIndex = 0;
const typingSpeed = 100;
const delayBetweenRoles = 1500;
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

window.onload = function () {
  setTimeout(typeRole, 500); // Start typing after a slight delay
};
