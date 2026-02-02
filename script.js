const images = document.querySelectorAll(".slideshow img");
let index = 0;

function startExperience() {
  // Hide intro
  document.getElementById("intro").style.display = "none";

  // Show content
  document.getElementById("content").classList.remove("hidden");

  // Play music
  const music = document.getElementById("music");
  music.play();

  // Start slideshow
  const interval = setInterval(() => {
    images[index].classList.remove("active");
    index++;

    if (index < images.length) {
      images[index].classList.add("active");
    } else {
      clearInterval(interval);
      document.getElementById("finalLine").style.opacity = 1;
    }
  }, 3000); // 3 seconds per image
}
