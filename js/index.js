import { errorMessage } from "./ui/errorMessage.js";

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts";

const loader = document.querySelector(".loader");
const blogGrid = document.querySelector(".blog-grid");

async function getBlogPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  posts.forEach(function (posts) {
    loader.style.display = "none";
    blogGrid.innerHTML += `
    <div class="post-card">
        <div class="post-card-background">
            <h4>${posts.title.rendered}</h4>
            <img src="" alt=""/>
        </div>
    </div>
    `;
  });
}

getBlogPosts(baseUrl);
