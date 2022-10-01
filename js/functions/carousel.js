export function carousel() {
  const slides = document.querySelectorAll(".blog-grid");

  let slideIndex = 1;
  changeSlides(slideIndex);

  // Next/previous controls
  const carouselBtn = document.querySelector(".carousel-btn");
  const dotOne = document.querySelector(".dotone");
  const dotTwo = document.querySelector(".dottwo");
  const dotThree = document.querySelector(".dotthree");

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev", "fade");
  prevBtn.setAttribute("aria-label", "Previous");
  prevBtn.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next", "fade");
  nextBtn.setAttribute("aria-label", "Next");

  nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

  carouselBtn.append(prevBtn, nextBtn);

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  dotOne.addEventListener("click", () => {
    currentSlide(1);
  });
  dotTwo.addEventListener("click", () => {
    currentSlide(2);
  });
  dotThree.addEventListener("click", () => {
    currentSlide(3);
  });

  function prevSlide() {
    changeSlides((slideIndex += -1));
  }

  function nextSlide() {
    changeSlides((slideIndex += 1));
  }

  // To get the dots work as controls
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
      dots[i].className = dots[i].className.replace(" dotactive", "");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " dotactive";
  }
}
