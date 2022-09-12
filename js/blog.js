import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const selectCategories = document.querySelector(".categories");
const select = document.querySelectorAll("select");
const blogPostContainer = document.querySelector(".blogposts");
const postsNav = document.querySelector(".blogposts-nav");

document.title += " | Blog";

const baseUrl =
  "https://projects.mathildeelinor.no/wp-json/wp/v2/posts/?per_page=100&_embed";

async function getBlogPosts() {
  try {
    const allBlogPosts = await (await fetch(baseUrl)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayBlogPosts(allBlogPosts);
    loadBlogPostNav(allBlogPosts);

    filterByCategory(categories);
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getBlogPosts();

// Display blogposts
let pageIndex = 0;
let postsPerPage = 4;

function displayBlogPosts(blogPosts) {
  console.log(blogPosts);

  blogPostContainer.innerHTML = "";

  for (
    let i = pageIndex * postsPerPage;
    i < pageIndex * postsPerPage + postsPerPage;
    i++
  ) {
    if (!blogPosts[i]) {
      break;
    }

    const date = new Date(blogPosts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const blogPostContent = document.createElement("div");
    blogPostContent.innerHTML = `
    <a href="blogpost.html?id=${blogPosts[i].id}">
    <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
      <div class="posts-card-background">
        <h2>${blogPosts[i].title.rendered}</h2>
        <h3>${date}</h3>
      </div>
    </div>
    </a>
    `;

    blogPostContainer.append(blogPostContent);
  }
}

// Navigation between blogposts
function loadBlogPostNav(blogPosts) {
  postsNav.innerHTML = "";

  for (let i = 0; i < blogPosts.length / postsPerPage; i++) {
    const span = document.createElement("span");
    span.innerHTML = i + 1;
    span.addEventListener("click", (e) => {
      pageIndex = e.target.innerHTML - 1;
      displayBlogPosts(blogPosts);
    });

    // if (i === pageIndex) {
    //   span.style.fontSize = "3rem";
    // }

    postsNav.append(span);
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
