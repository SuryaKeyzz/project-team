const profiles = [
  {
    name: "John Doe",
    age: 25,
    bio: "Adventurer, foodie, and always up for a new experience. Looking to meet someone who shares my passion for life.",
    image: "../img/character2.png",
  },
  {
    name: "Jane Smith",
    age: 23,
    bio: "Coffee lover, bookworm, and aspiring writer. Seeking someone who enjoys deep conversations and a good laugh.",
    image: "../img/character1.png",
  },
  {
    name: "Emily Johnson",
    age: 27,
    bio: "Dog mom, nature enthusiast, and a big fan of spontaneous road trips. Looking for someone who loves adventure as much as I do.",
    image: "../img/character3.png",
  },
  {
    name: "Emma harris",
    age: 27,
    bio: "I’m all about starting my mornings with yoga and hitting the trails for a long hike. I love cooking gourmet meals and exploring new places. If you’re into travel and good food, let’s connect!",
    image: "../img/profilematch1.jpg",
  },
  {
    name: "Marcus Lee",
    age: 27,
    bio: "Guitar player here, always up for a jam session. When I’m not strumming away, you can find me diving into video games, building cool furniture, or following my fantasy football team. Swipe right if you’re into music and tech!",
    image: "../img/profilematch2.jpg",
  },
  {
    name: "Olivia Patel",
    age: 27,
    bio: " I’m passionate about painting abstract art and getting lost in a good sci-fi novel. My garden is my pride and joy, and I love capturing life’s moments through my camera lens. Looking for someone who shares my love for creativity and nature.",
    image: "../img/profilematch3.jpg",
  },
  {
    name: "Alex Turner",
    age: 24,
    bio: " Marathon runner, tech enthusiast, and world cuisine experimenter—my weekends are packed with adventure. I’m also a mountain biking fan, always up for a challenge. Swipe right if you’re into fitness and exploring new gadgets!",
    image: "../img/profilematch4.jpg",
  },
  {
    name: "Ethan Cooper",
    age: 30,
    bio: " Surfing and scuba diving are my escape from the everyday grind. I love long hikes and strategizing over a chess board. If you’re up for ocean adventures and outdoor activities, let’s see where things go!",
    image: "../img/profilematch5.jpg",
  },
];

let currentIndex = 0;

function updateProfile() {
  const profilePicContainer = document.querySelector(".profile-pic-container");
  const profilePic = document.querySelector(".profile-pic");
  const profileName = document.querySelector(".profile-name");
  const profileAge = document.querySelector(".profile-age");
  const profileBio = document.querySelector(".profile-bio");

  // Update the profile content
  profilePic.src = profiles[currentIndex].image;
  profileName.textContent = profiles[currentIndex].name;
  profileAge.textContent = profiles[currentIndex].age;
  profileBio.textContent = `"${profiles[currentIndex].bio}"`;

  // Apply fade and bounce animation
  profilePicContainer.classList.add("fade-bounce");
  profileName.classList.add("fadeInUp");
  profileAge.classList.add("fadeInUp");
  profileBio.classList.add("fadeInUp");

  // Remove animation classes after they finish
  setTimeout(() => {
    profilePicContainer.classList.remove("fade-bounce");
    profileName.classList.remove("fadeInUp");
    profileAge.classList.remove("fadeInUp");
    profileBio.classList.remove("fadeInUp");
  }, 800);
}

function nextProfile() {
  currentIndex = (currentIndex + 1) % profiles.length;
  updateProfile();
}

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".match-container");
  let isDragging = false;
  let startX, startY;

  // Initialize the first profile on page load
  updateProfile();

  // Event listener for Skip button
  document
    .querySelector(".skip-button")
    .addEventListener("click", () => skipProfile("button"));

  card.addEventListener("mousedown", startDragging);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);

  function startDragging(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    card.style.transition = "none";
  }

  function drag(e) {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    const maxMove = 100;
    const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX));
    const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY));

    card.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${
      moveX * 0.1
    }deg)`;
  }

  function stopDragging(e) {
    if (!isDragging) return;
    isDragging = false;

    const deltaX = e.clientX - startX;
    const threshold = 50;

    if (deltaX > threshold) {
      matchProfile();
    } else if (deltaX < -threshold) {
      skipProfile("swipe");
    } else {
      resetCardPosition();
    }
  }

  function resetCardPosition() {
    card.style.transition = "transform 0.3s ease-out";
    card.style.transform = "translate(0, 0) rotate(0deg)";
  }

  function matchProfile() {
    card.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    card.style.transform = "translate(200%, 0) rotate(45deg)";
    card.style.opacity = "0";

    setTimeout(() => {
      nextProfile();
      resetCardPosition();
      card.style.opacity = "1";
    }, 500);

    console.log("It's a match!");
  }

  function skipProfile(action) {
    card.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    card.style.transform = "translate(-200%, 0) rotate(-45deg)";
    card.style.opacity = "0";

    setTimeout(() => {
      nextProfile();
      resetCardPosition();
      card.style.opacity = "1";
    }, 500);

    console.log(`Profile skipped by ${action}`);
  }
});
