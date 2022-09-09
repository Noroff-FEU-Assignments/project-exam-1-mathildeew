// import { errorMessage } from "./errorMessage.js";

const apiUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/";

const loader = document.querySelector(".loader");

async function getApi() {
  try {
    const posts = await (
      await fetch(apiUrl + "posts?per_page=100&_embed")
    ).json();
    const pages = await (await fetch(apiUrl + "pages/")).json();
    const categories = await (await fetch(apiUrl + "categories")).json();
    loader.style.display = "none";

    const pathName = window.location.pathname;

    if (pathName === "/index.html") {
      index(posts);
    }

    if (pathName === "/about.html") {
      about(pages);
    }

    if (pathName === "/blog.html") {
      blog(posts, categories);
    }

    if (pathName === "/blogpost.html") {
      const queryString = document.location.search;
      const params = new URLSearchParams(queryString);
      const id = params.get("id");

      const blogPost = await (
        await fetch(apiUrl + "posts/" + id + "/?_embed")
      ).json();
      post(blogPost, posts);
    }

    if (pathName === "/contact.html") {
      contact();
    }
  } catch (error) {
    console.log(error);
    errorMessage("error", error, ".error-message");
  }
}