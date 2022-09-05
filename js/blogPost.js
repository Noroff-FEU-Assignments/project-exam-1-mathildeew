const blogPostC = document.querySelector(".blogpost-content");

function post(blogPost) {
  document.title += ` | ${blogPost.title.rendered}`;

  const date = new Date(blogPost.date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  blogPostC.innerHTML += `
    <h1>${blogPost.title.rendered}</h1>
    <h2>${date}</h2>
     <div class="blogpost-content">${blogPost.content.rendered}</div>
    <p class="signature">- ${blogPost._embedded.author[0].name}</p>
    `;

  const image = document.querySelector("figure");
  const imageContainer = document.querySelector("image-container");
}

getApi();
