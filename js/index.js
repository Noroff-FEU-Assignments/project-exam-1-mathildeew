import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const blogGrid = document.querySelector(".blog-grid");
const showMoreButton = document.querySelector(".show-more");
const navnav = document.querySelector(".navnav");
const previousBtn = document.getElementById("prevbtn");
const nextBtn = document.getElementById("nextbtn");
const postsDisplayed = document.querySelector(".carousel");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts";
const firstPosts = baseUrl + "?per_page=4&_embed";
const secondPosts = baseUrl + "?per_page=4&_embed";

// Fetch API data
async function getLatestPosts() {
  try {
    const firstSlide = await (await fetch(firstPosts)).json();
    const secondSlide = aw;
    loader.style.display = "none";

    firstPostsSlider(firstSlide);
  } catch (error) {
    console.log(error);

    errorMessage("error", error, ".error-message");
  }
}

getLatestPosts();

// Display first 4 latest posts
function firstPostsSlider(posts) {
  for (let i = 0; i < posts.length; i++) {
    const date = new Date(posts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    blogGrid.innerHTML += `
                            <a href="blogpost.html?id=${posts[i].id}">
                            <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                              <div class="posts-card-background">firstSlidePosts
                                <h2>${posts[i].title.rendered}</h2>
                                <h3>${date}</h3>
                              </div>
                            </div>
                            </a>
                        `;
  }
}

// Display next 4 latest posts

function secondPostsSlider(posts) {}
