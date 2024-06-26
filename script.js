//Hero Vertical Slide
var vsOpts = {
  $slides: $(".v-slide"),
  $list: $(".v-slides"),
  duration: 6,
  lineHeight: 100,
};

var vSlide = new TimelineMax({
  paused: true,
  repeat: -1,
});

vsOpts.$slides.each(function (i) {
  vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    ease: Elastic.easeOut.config(1, 0.4),
  });
});
vSlide.play();

//Testimonial Carousel
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
// carousel.style.transform = `translateX(100%)`;
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  if (currentIndex === 0) {
    carousel.style.transform = `translateX(30%)`;
  } else if (currentIndex === 1) {
    carousel.style.transform = `translateX(0%)`;
  } else if (currentIndex === 2) {
    carousel.style.transform = `translateX(-30%)`;
  }
}

// Next and previous buttons (optional)
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

if (nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });
}

// Auto-advance the carousel (optional)
const autoAdvanceInterval = 3000; // Change slide every 3 seconds

setInterval(() => {
  currentIndex++;
  showSlide(currentIndex);
}, autoAdvanceInterval);



// 1st email required function

document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.getElementById('firstMail');
  var sendIcon = document.getElementById('home5');

  // Initially check if email input has any value
  toggleIconCursor(emailInput.value);

  // Add event listener to monitor changes in the email input field
  emailInput.addEventListener('input', function () {
    toggleIconCursor(emailInput.value);
  });

  // Function to toggle cursor style of the icon based on input value
  function toggleIconCursor(emailValue) {
    if (emailValue.trim() !== '') {
      sendIcon.style.cursor = 'pointer'; // Change cursor to pointer if email is entered
      sendIcon.parentElement.href = "mailto:harinibalasundram2001@gmail.com";
    } else {
      sendIcon.style.cursor = 'not-allowed';
      sendIcon.parentElement.removeAttribute('href');
    }
  }
});


// second mail

document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.getElementById('email');
  var sendIcon = document.getElementById('sendIcon');

  // Initially check if email input has any value
  toggleIconCursor(emailInput.value);

  // Add event listener to monitor changes in the email input field
  emailInput.addEventListener('input', function () {
    toggleIconCursor(emailInput.value);
  });

  // Function to toggle cursor style of the icon based on input value
  function toggleIconCursor(emailValue) {
    if (emailValue.trim() !== '') {
      sendIcon.style.cursor = 'pointer'; // Change cursor to pointer if email is entered
      sendIcon.parentElement.href = "mailto:harinibalasundram2001@gmail.com";
    } else {
      sendIcon.style.cursor = 'not-allowed';
      sendIcon.parentElement.removeAttribute('href');
    }
  }
});

// Number increase
var happyClientsCounter = 1;
// client
function increaseHappyClients() {
  var interval = setInterval(function () {
    if (happyClientsCounter < 9) {
      happyClientsCounter++;
      document.getElementById('happyClientsCounter').textContent = happyClientsCounter + '+';
    } else {
      clearInterval(interval);
    }
  }, 150);
}
// project
var project =1;
function increaseProject() {
  var interval = setInterval(function () {
    if (project < 10) {
      project++;
      document.getElementById('project').textContent = project + '+';
    } else {
      clearInterval(interval);
    }
  }, 150);
}
// Function to check if tracked content is in view
function checkContentInView() {
  var trackedContent = document.getElementById('why-hire-me');
  var contentRect = trackedContent.getBoundingClientRect();

  if (contentRect.top <= window.innerHeight * 0.5 && contentRect.bottom >= 0) {
    increaseHappyClients();
    increaseProject();

    window.removeEventListener('scroll', checkContentInView);
  }
}

window.addEventListener('scroll', checkContentInView);
window.addEventListener('DOMContentLoaded', checkContentInView);