let listBg = document.querySelectorAll(".bg");
let banner = document.querySelector(".banner");
let tabs = document.querySelectorAll(".tab");
let container = document.querySelector(".container");
let heightDefault = container.offsetHeight;
let topBefore = 0;
let body = document.querySelector("body");

window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    const scrollSpeed = 0.2;
    const scrollValue = window.scrollY + (event.deltaY / 3) * scrollSpeed;
    window.scrollTo(0, scrollValue);

    let top = scrollValue;
    listBg.forEach((bg, index) => {
      if (index != 0) {
        bg.animate(
          {
            transform: `translateY(${-top * index}px)`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
      if (index == listBg.length - 1) {
        tabs.forEach((tab) => {
          tab.animate(
            {
              transform: `translateY(${-top * index}px)`,
            },
            { duration: 500, fill: "forwards" }
          );
        });

        if (topBefore < top) {
          setHeight = heightDefault - window.scrollY * index;
          container.animate(
            {
              height: `${setHeight + 100}px`,
            },
            { duration: 50, fill: "forwards" }
          );
          topBefore = window.scrollY;
        }
      }
      tabs.forEach((tab, index) => {
        // console.log(tab.offsetTop - top, window.innerHeight);
        if (tab.offsetTop - top <= window.innerHeight * (index + 1)) {
          let content = tab.getElementsByClassName("content")[0];
          let transformContent =
            window.innerHeight * (index + 1) - (tab.offsetTop - top);
          console.log(tab);
          content.animate(
            {
              transform: `translateY(${-transformContent + 100 * index}px)`,
            },
            { duration: 500, fill: "forwards" }
          );
        }
      });
    });
  },
  { passive: false }
);

const text1 = "Do you hear The screams";
const text2 = "Don't you?";

let index1 = 0;
let index2 = 0;

function typeText1() {
  if (index1 < text1.length) {
    document.getElementById("text1").innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeText1, 100);
  } else {
    setTimeout(hideText1, 1000);
  }
}

function hideText1() {
  document.getElementById("text1").classList.add("fadeOut");
  setTimeout(showText2, 1000);
}

function showText2() {
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").style.display = "block";
  typeText2();
}

function typeText2() {
  if (index2 < text2.length) {
    document.getElementById("text2").innerHTML += text2.charAt(index2);
    index2++;
    setTimeout(typeText2, 100);
  } else {
    setTimeout(showContent, 1000);
  }
}

let backgroundAudio = document.getElementById('backgroundAudio');

function showContent() {
  document.getElementById("loadingScreen").classList.add("hidden");
  document.querySelector(".container").style.display = "block";
  document.body.style.overflow = "auto";
  backgroundAudio.play(); // Play the background audio on page load
}

window.onload = function () {
  typeText1();
};
