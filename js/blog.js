import { errorMessage } from "./functions/errorMessage.js";
// import { filterByCategory } from "./functions/filterCategory.js";

const loader = document.querySelector(".loader");
const selectCategories = document.querySelector(".categories");
const option = document.querySelector("option");
const select = document.querySelector("select");
const blogPostContainer = document.querySelector(".blog-grid");
const postsNav = document.querySelector(".blogposts-nav");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/";
const blogPostsUrl = "posts/?per_page=100&_embed";

// Get all blogpost, navigation between postsperpage, filter & search
document.title += " | Blog";

async function getBlogPosts() {
  try {
    const allBlogPosts = await (await fetch(baseUrl + blogPostsUrl)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayBlogPosts(allBlogPosts);
    loadBlogPostNav(allBlogPosts);
    filterByCategory(categories, allBlogPosts);
    // console.log(allBlogPosts);

    // search(allBlogPosts);
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
    //   span.classList.add("activenav");
    // }

    postsNav.append(span);
  }
}

// Filter by category
function filterByCategory(categories, allBlogPosts) {
  console.log(allBlogPosts);

  // Create list
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
                                    <option value="${categories.id}">${categories.name}</option>
                                  `;
  });

  select.addEventListener("change", () => {
    const filter = select.value;

    for (let i = 0; i < allBlogPosts.length; i++) {
      const catId = String(allBlogPosts[i].categories["0"]);

      // console.log(allBlogPosts[i].categories["0"]);

      const filteredPosts = allBlogPosts.filter(() => {
        if (filter === catId) {
          return true;
        }
      });

      if (select.value === "All") {
        displayBlogPosts(allBlogPosts);
      } else {
        displayBlogPosts(filteredPosts);
        console.log(select.value);
      }
    }
  });
}

// Search bar
// const searchBar = document.querySelector("#search");
// searchBar.addEventListener("keyup", search);

// function search(allBlogPosts) {
//   const findPost = searchBar.value;

//   const searchedPost = allBlogPosts.filter((post) => {
//     if (allBlogPosts.title.rendered.includes(findPost)) {
//       return true;
//     }
//   });
//   displayBlogPosts(searchedPost);
// }
