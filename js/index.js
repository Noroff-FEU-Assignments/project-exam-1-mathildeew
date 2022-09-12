import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const slides = document.querySelectorAll(".blog-grid");
const slideOne = document.querySelector(".slide-one");
const slideTwo = document.querySelector(".slide-two");
const slideThree = document.querySelector(".slide-three");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts";
const latestPost = baseUrl + "?per_page=12&_embed";

// Fetch API data
async function getLatestPosts() {
  try {
    const blogPosts = await (await fetch(latestPost)).json();
    console.log(blogPosts);
    loader.style.display = "none";

    for (let i = 0; i < blogPosts.length; i++) {
      const date = new Date(blogPosts[0].date).toLocaleDateString("utc", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });

      if (i <= 3) {
        slideOne.innerHTML += `
                              <a href="blogpost.html?id=${blogPosts[i].id}">
                              <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                <div class="posts-card-background">
                                  <h2>${blogPosts[i].title.rendered}</h2>
                                  <h3>${date}</h3>
                                </div>
                              </div>
                              </a>
                            `;
      } else if (i <= 7) {
        slideTwo.innerHTML += `
                              <a href="blogpost.html?id=${blogPosts[i].id}">
                              <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                <div class="posts-card-background">
                                  <h2>${blogPosts[i].title.rendered}</h2>
                                  <h3>${date}</h3>
                                </div>
                              </div>
                              </a>
                              `;
      } else if (i <= 11) {
        slideThree.innerHTML += `
                                <a href="blogpost.html?id=${blogPosts[i].id}">
                                <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                  <div class="posts-card-background">
                                    <h2>${blogPosts[i].title.rendered}</h2>
                                    <h3>${date}</h3>
                                  </div>
                                </div>
                                </a>
                                `;
      }
    }
  } catch (error) {
    console.log(error);
    errorMessage("error", error, ".error-message");
  }
}

getLatestPosts();

// Karusell
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
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}
