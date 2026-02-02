const images = document.querySelectorAll(".slideshow img");
let index = 0;

function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play();

  const interval = setInterval(() => {
    images[index].classList.remove("active");
    index++;

    if (index < images.length) {
      images[index].classList.add("active");
    } else {
      clearInterval(interval);
      document.getElementById("finalLine").style.opacity = 1;

      setTimeout(() => {
        document.getElementById("question").classList.remove("hidden");
      }, 2000);
    }
  }, 3000);
}

function yesClicked() {
  document.getElementById("question").style.display = "none";
  document.getElementById("smile").classList.remove("hidden");
}

function noClicked() {
  alert("Take your time 🤍");
}
