import { errorMessage } from "./ui/errorMessage.js";

const loader = document.querySelector(".loader");
const blogPostContent = document.querySelector(".content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const apiUrl =
  "https://projects.mathildeelinor.no/wp-json/wp/v2/posts/" + id + "/?_embed";

// Get blogpost
async function getBlogPost() {
  try {
    const blogPost = await (await fetch(apiUrl)).json();
    console.log(blogPost);

    loader.style.display = "none";
    displayBlogPost(blogPost);
    biggerImage();
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getBlogPost();

// Display blogpost
function displayBlogPost(blogPost) {
  document.title += ` | ${blogPost.title.rendered}`;

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
function biggerImage() {
  const smallImg = document.querySelectorAll("figure");
  const imgModal = document.querySelector(".img-modal");

  smallImg.forEach((bigImg) => {
    bigImg.addEventListener("click", (event) => {
      imgModal.style.display = "flex";
      body.style.overflow = "hidden";
      imgModal.innerHTML += `
                                <img src="${event.target.src}"/>
                                <p>Close</p>
    
        `;

      imgModal.addEventListener("click", closeImg);
      function closeImg(event) {
        imgModal.innerHTML = "";
        imgModal.style.display = "none";
        body.style.overflow = "initial";
      }
    });
  });
}
