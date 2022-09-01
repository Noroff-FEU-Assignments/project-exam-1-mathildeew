const loader = document.querySelector(".loader");
const blogPost = document.querySelector(".post");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
  "https://projects.mathildeelinor.no/wp-json/wp/v2/posts/" + id + "/?_embed";

async function getBlogPost(url) {
  const response = await fetch(url);
  const post = await response.json();
  console.log(post);

  const date = new Date(post.date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  console.log(date);

  loader.style.display = "none";
  document.title += ` | ${post.title.rendered}`;
  blogPost.innerHTML += `
    <h1>${post.title.rendered}</h1>
    <h2>${date}</h2>
    <div class="blogpost-content">${post.content.rendered}</div>
    <p class="signature">- ${post._embedded.author[0].name}</p>
    `;
}

getBlogPost(url);
