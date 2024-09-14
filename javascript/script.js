// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.add("bg-abu"); // Warna abu-abu gelap
    header.classList.remove("bg-transparent");
    loginButton.classList.remove("text-slate-900");
    loginButton.classList.add("text-slate-100");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.add("bg-transparent");
    header.classList.remove("bg-abu");
    loginButton.classList.remove("text-slate-100");
    loginButton.classList.add("text-slate-900");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// click outside the hamburger menu
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Get the element resources needed
const loginButton = document.getElementById("loginButton");
const loginPopup = document.getElementById("loginPopup");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const closePopup = document.getElementById("closePopup");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

// Event listener to close the login pop up form
if (closePopup) {
  closePopup.addEventListener("click", function () {
    loginPopup.classList.add("hidden");
  });
}

if (loginButton) {
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    loginPopup.classList.remove("hidden");
    loginPopup.classList.add("flex");
    showLoginForm();
  });
}

// Close popup when clicking outside
window.addEventListener("click", function (event) {
  if (
    loginPopup &&
    !loginPopup.contains(event.target) &&
    event.target !== loginButton
  ) {
    loginPopup.classList.add("hidden");
  }
});

// Switch between login and register forms
if (switchToRegister) {
  switchToRegister.addEventListener("click", function (event) {
    event.preventDefault();
    showRegisterForm();
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener("click", function (event) {
    event.preventDefault();
    showLoginForm();
  });
}

function showLoginForm() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
}

function showRegisterForm() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
}

document.getElementById("Play").addEventListener("click", function (event) {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("loggedInUser");

  if (!isLoggedIn) {
    // Prevent navigation
    event.preventDefault();
    // Show login popup
    alert("youu have to log in first");
    loginPopup.classList.remove("hidden");
    loginPopup.classList.add("flex");
    showLoginForm();
  } else {
    // User is logged in, allow navigation to the game
    // You might want to do additional checks or log the user action here
  }
});

// Function to handle Play button click in sub-hero section
document
  .getElementById("SubHeroPlay")
  .addEventListener("click", function (event) {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("loggedInUser");

    if (!isLoggedIn) {
      // Prevent navigation
      event.preventDefault();
      // Show login popup
      alert("You have to log in first");
      loginPopup.classList.remove("hidden");
      loginPopup.classList.add("flex");
      showLoginForm();
    } else {
      // User is logged in, allow navigation to the game
      // You might want to do additional checks or log the user action here
    }
  });

/// Function to display profile picture and username
/// Function to display profile picture and username
function displayUserProfile(url, username) {
  const profileContainer = document.createElement("div");
  profileContainer.className =
    "profile-container flex items-center cursor-pointer";

  // Add click event listener to the profile container
  profileContainer.addEventListener("click", function () {
    window.location.href = "/html/achievement.html";
  });

  const profileImage = document.createElement("img");
  profileImage.src = url;
  profileImage.alt = "Profile Picture";
  profileImage.className = "profile-picture rounded-full mr-2"; // Add some margin-right

  const profileName = document.createElement("span");
  profileName.textContent = username;
  profileName.className = "profile-name text-white font-medium ml-4";

  profileContainer.appendChild(profileImage);
  profileContainer.appendChild(profileName);

  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.replaceWith(profileContainer);
  }
}

// Update the login process to store the logged-in user information
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check data from Local Storage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      loginPopup.classList.add("hidden");

      // Store logged-in user status
      localStorage.setItem("loggedInUser", email);

      // Store profile picture URL and username in localStorage
      const profilePictureUrl = "./img/profilepicture.jpg"; // Example URL
      localStorage.setItem("profilePicture", profilePictureUrl);
      localStorage.setItem("username", storedUser.username);

      displayUserProfile(profilePictureUrl, storedUser.username);
    } else {
      alert(
        "Email or password is invalid, or account not created yet. Please sign up."
      );
      showRegisterForm();
    }
  });
}

// Check if user is logged in and display profile picture and username on page load
window.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const profilePictureUrl = localStorage.getItem("profilePicture");
  const username = localStorage.getItem("username");

  if (isLoggedIn && profilePictureUrl && username) {
    displayUserProfile(profilePictureUrl, username);
  }
});

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if user already exists
    if (localStorage.getItem(email)) {
      alert("An account with this email already exists. Please log in.");
      showLoginForm();
      return;
    }

    const user = {
      username: username,
      password: password,
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Account successfully created! You can now log in.");
    showLoginForm();
  });
}

// image slider
const slider = document.querySelector(".slider-backgroundimage .list");
const items = document.querySelectorAll(".slider-backgroundimage .list .item");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dots = document.querySelectorAll(".slider-backgroundimage .dots li");

let activeIndex = 0;
const itemsLength = items.length;

function updateSlider(smooth = true) {
  requestAnimationFrame(() => {
    const translateX = -items[activeIndex].offsetLeft;
    slider.style.transition = smooth
      ? "transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)"
      : "none";
    slider.style.transform = `translateX(${translateX}px)`;

    document
      .querySelector(".slider-backgroundimage .dots li.active")
      ?.classList.remove("active", "w-8");
    dots[activeIndex].classList.add("active", "w-8");
  });
}

function nextSlide() {
  activeIndex = (activeIndex + 1) % itemsLength;
  updateSlider();
}

function prevSlide() {
  activeIndex = (activeIndex - 1 + itemsLength) % itemsLength;
  updateSlider();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
  startAutoPlay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
  startAutoPlay();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeIndex = index;
    updateSlider();
    stopAutoPlay();
    startAutoPlay();
  });
});

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();

slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);

slider.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  },
  { passive: true }
);

function handleSwipe() {
  if (touchEndX < touchStartX) {
    nextSlide();
  }
  if (touchEndX > touchStartX) {
    prevSlide();
  }
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateSlider(false);
  }, 250);
});

updateSlider(false);

function preloadImages() {
  items.forEach((item) => {
    const img = new Image();
    img.src = item.querySelector("img").src;
  });
}

preloadImages();

// hover works
document.querySelectorAll("nav ul li a, #loginButton").forEach(function (el) {
  el.addEventListener("touchstart", function () {
    el.classList.add("hover");
  });

  el.addEventListener("touchend", function () {
    setTimeout(function () {
      el.classList.remove("hover");
    }, 300);
  });
});
