import { errorMessage } from "./functions/errorMessage.js";
import { biggerImage } from "./functions/imgModal.js";

const loader = document.querySelector(".loader");
const blogPostContent = document.querySelector(".content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const apiUrl =
  "https://cerchiostudio.mathildeelinor.no/wp-json/wp/v2/posts/" +
  id +
  "/?_embed";

// Get specific blogpost
document.title += " Blog";
async function getBlogPost() {
  try {
    const blogPost = await (await fetch(apiUrl)).json();
    loader.style.display = "none";

    displayBlogPost(blogPost);
    biggerImage();
  } catch (error) {
    errorMessage();
  }
}

getBlogPost();

// Display blogpost
function displayBlogPost(blogPost) {
  document.title += ` | ${blogPost.title.rendered}`;

  // Convert date
  const date = new Date(blogPost.date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  blogPostContent.innerHTML = `
                                      <div class="wp-content">
                                       <h1>${blogPost.title.rendered}</h1>
                                       <h2>${date}</h2>
                                       <div class="blogpost">${blogPost.content.rendered}</div>
                                       <p class="signature"> ${blogPost._embedded.author[0].name}</p>
                                      </div>
                                      `;
}

// Show bigger image & close bigger image
biggerImage();
