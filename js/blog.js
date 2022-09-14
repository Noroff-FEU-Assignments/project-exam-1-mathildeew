import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const selectCategories = document.querySelector(".categories");
const select = document.querySelectorAll("select");
const blogPostContainer = document.querySelector(".blog-grid");
const postsNav = document.querySelector(".blogposts-nav");

document.title += " | Blog";

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/";
const blogPostsUrl = "posts/?per_page=100&_embed";

async function getBlogPosts() {
  try {
    const allBlogPosts = await (await fetch(baseUrl + blogPostsUrl)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayBlogPosts(allBlogPosts);
    loadBlogPostNav(allBlogPosts);
    filterByCategory(categories, allBlogPosts);
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getBlogPosts();

// Display blogposts
let pageIndex = 0;
let postsPerPage = 10;

function displayBlogPosts(posts) {
  console.log(posts);

  blogPostContainer.innerHTML = "";

  for (
    let i = pageIndex * postsPerPage;
    i < pageIndex * postsPerPage + postsPerPage;
    i++
  ) {
    if (!posts[i]) {
      break;
    }

    const date = new Date(posts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const blogPostContent = document.createElement("div");
    blogPostContent.classList.add("blog-grid-posts", "fade");
    blogPostContent.innerHTML = `
                                <a href="blogpost.html?id=${posts[i].id}">
                                <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                  <div class="pc-background">
                                    <h2>${posts[i].title.rendered}</h2>
                                    <h3>${date}</h3>
                                  </div>
                                </div>
                                </a>
                                `;

    blogPostContainer.append(blogPostContent);
  }
}

// Navigation between blogposts
function loadBlogPostNav(posts) {
  postsNav.innerHTML = "";

  for (let i = 0; i < posts.length / postsPerPage; i++) {
    const span = document.createElement("span");
    span.innerHTML = i + 1;
    span.addEventListener("click", (e) => {
      pageIndex = e.target.innerHTML - 1;
      displayBlogPosts(posts);
    });

    if (i === pageIndex) {
      span.style.textDecoration = "underline";
    }

    postsNav.append(span);
  }
}

// Filter by category
function filterByCategory(categories, blogPosts) {
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
    <option>${categories.name}</option>
`;
  });

  select.onchange = (event) => {
    console.log(blogPosts);
  };
}
