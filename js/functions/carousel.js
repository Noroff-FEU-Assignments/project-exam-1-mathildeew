export function carousel() {
  const slides = document.querySelectorAll(".blog-grid");

  let slideIndex = 1;
  changeSlides(slideIndex);

  // Next/previous controls
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  function prevSlide() {
    changeSlides((slideIndex += -1));
  }

  function nextSlide() {
    changeSlides((slideIndex += 1));
  }

  // To get the dots work as controls // Not activeded!
  function currentSlide(n) {
    changeSlides((slideIndex = n));
  }

  function changeSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("dotactive", "");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " dotactive";
  }
}
