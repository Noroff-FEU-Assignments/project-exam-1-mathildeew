import { errorMessage } from "./functions/errorMessage.js";
import { carousel } from "./functions/carousel.js";

const loader = document.querySelector(".loader");

const slideOne = document.querySelector(".slide-one");
const slideTwo = document.querySelector(".slide-two");
const slideThree = document.querySelector(".slide-three");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts";
const latestPost = baseUrl + "?per_page=12&_embed";

// Fetch & display latest 12 posts
async function getLatestPosts() {
  try {
    const blogPosts = await (await fetch(latestPost)).json();

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
                                <div class="pc-background">
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
                                <div class="pc-background">
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
                                  <div class="pc-background">
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

// Carousel of the 12 latest blogposts
carousel();
