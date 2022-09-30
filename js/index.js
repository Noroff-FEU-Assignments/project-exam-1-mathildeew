import { errorMessage } from "./functions/errorMessage.js";
import { displayLatestPosts } from "./displayPosts/displayLatestPosts.js";
import { carousel } from "./functions/carousel.js";

const loader = document.querySelector(".loader");

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts";
const latestPost = baseUrl + "?per_page=12&_embed";

// Fetch & display latest 12 posts
async function getLatestPosts() {
  try {
    const blogPosts = await (await fetch(latestPost)).json();
    loader.style.display = "none";

    displayLatestPosts(blogPosts);

    carousel();
  } catch (error) {
    console.log(error);
    errorMessage("error", error, ".error-message");
  }
}

getLatestPosts();
