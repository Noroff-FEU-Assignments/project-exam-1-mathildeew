import { errorMessage } from "./ui/errorMessage.js";

const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts?_embed";

const loader = document.querySelector(".loader");
const blogGrid = document.querySelector(".blog-grid2");

async function getBlogPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  const date = new Date(posts[0].date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  posts.forEach(function (posts) {
    loader.style.display = "none";
    blogGrid.innerHTML += `
    <div class="posts">
    <a href="blogpost.html?id=${posts.id}">
     <div class="post-card" style="background-image: url('${posts._embedded["wp:featuredmedia"]["0"].source_url}')">
      <div class="posts-card-background">
        <h2>${posts.title.rendered}</h2>
        <h3>${date}</h3>
      </div>
    </div>
    </a>
    </div>
    `;
  });
}

getBlogPosts(baseUrl);

/* <img src="${posts._embedded["wp:featuredmedia"]["0"].source_url}"/> */
