import { errorMessage } from "./functions/errorMessage.js";
import { displayBlogPosts } from "./displayPosts/displayBlogPosts.js";
import { filterByCategory } from "./functions/filterCategory.js";

// Get all blogpost, navigation between postsperpage, filter & search
const loader = document.querySelector(".loader");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/";
const blogPostsUrl = "posts/?per_page=100&_embed";

document.title += " | Blog";

async function getBlogPosts() {
  try {
    const allBlogPosts = await (await fetch(baseUrl + blogPostsUrl)).json();
    const categories = await (await fetch(baseUrl + "categories")).json();
    loader.style.display = "none";

    displayBlogPosts(allBlogPosts);
    createCategories(categories);
    filterByCategory(allBlogPosts);
    // console.log(allBlogPosts);

    // search(allBlogPosts);
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getBlogPosts();

// Create list
function createCategories(categories) {
  const selectCategories = document.querySelector(".categories");

  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
                                      <option value="${categories.id}">${categories.name}</option>
                                    `;
  });
}
