import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const selectCategories = document.querySelector(".categories");
const showMoreBtn = document.querySelector(".showmore-button");
const select = document.querySelectorAll("select");
const blogGrid = document.querySelector(".blog-grid-posts");

document.title += " | Blog";

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/";
const firstPosts = "posts/?per_page=6&_embed";
const secondPosts = "posts/?per_page=12&_embed";

async function getBlogPosts() {
  try {
    const firstBlogPosts = await (await fetch(baseUrl + firstPosts)).json();
    const secondBlogPosts = await (await fetch(baseUrl + secondPosts)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayFirstPosts(firstBlogPosts);

    filterByCategory(categories);
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getBlogPosts();

function displayFirstPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    const date = new Date(posts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    blogGrid.innerHTML += `
                            <a href="blogpost.html?id=${posts[i].id}">
                            <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                              <div class="posts-card-background">
                                <h2>${posts[i].title.rendered}</h2>
                                <h3>${date}</h3>
                              </div>
                            </div>
                            </a>
                        `;
  }
}

// Filter by category
function filterByCategory(categories) {
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
    <option>${categories.name}</option>
`;
  });

  selectCategories.onchange = (event) => {};
}
