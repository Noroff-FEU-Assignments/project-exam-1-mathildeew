import { errorMessage } from "./functions/errorMessage.js";
import { filterByCategory } from "./functions/filterCategory.js";
import { searchBlogPosts } from "./functions/search.js";

// Get all blogpost, navigation between postsperpage, filter & search
const loader = document.querySelector(".loader");

const baseUrl = "https://cerchiostudio.mathildeelinor.no/wp-json/wp/v2/";
const blogPostsUrl = "posts/?per_page=100&_embed";

document.title += " | Blog";

async function getBlogPosts() {
  try {
    const allBlogPosts = await (await fetch(baseUrl + blogPostsUrl)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayBlogPosts(allBlogPosts, categories);
    filterByCategory(allBlogPosts, categories);
    searchBlogPosts(allBlogPosts);
  } catch (error) {
    errorMessage();
  }
}

getBlogPosts();

// Display blogposts per page
let pageIndex = 0;
let postsPerPage = 10;
const select = document.querySelector("select");

export function displayBlogPosts(blogPosts) {
  const blogPostContainer = document.querySelector(".blog-grid");

  blogPostContainer.innerHTML = "";

  for (
    let i = pageIndex * postsPerPage;
    i < pageIndex * postsPerPage + postsPerPage;
    i++
  ) {
    if (!blogPosts[i]) {
      break;
    }

    const date = new Date(blogPosts[i].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const blogPostContent = document.createElement("div");
    blogPostContent.classList.add("blog-grid-posts", "fade");
    blogPostContent.innerHTML = `
                                <a href="blogpost.html?id=${blogPosts[i].id}">
                                <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                  <div class="pc-background">
                                    <h2>${blogPosts[i].title.rendered}</h2>
                                    <h3>${date}</h3>
                                  </div>
                                </div>
                                </a>
                                `;

    blogPostContainer.append(blogPostContent);
    loadBlogPostNav(blogPosts);
  }
}

// Navigation between blogposts per page
function loadBlogPostNav(blogPosts) {
  const postsNav = document.querySelector(".blogposts-nav");

  postsNav.innerHTML = "";

  for (let i = 0; i < blogPosts.length / postsPerPage; i++) {
    const span = document.createElement("span");
    span.innerHTML = i + 1;
    span.addEventListener("click", (e) => {
      pageIndex = e.target.innerHTML - 1;
      displayBlogPosts(blogPosts);
    });
    postsNav.append(span);
  }
}
