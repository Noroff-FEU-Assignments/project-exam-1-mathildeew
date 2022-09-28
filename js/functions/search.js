import { displayBlogPosts } from "../blog.js";

// Search in blogposts
export function searchBlogPosts(blogPosts) {
  const search = document.querySelector("#search");

  search.addEventListener("keyup", () => {
    const filter = event.target.value.trim().toLowerCase();

    const filteredPost = blogPosts.filter(function (blog) {
      if (blog.title.rendered.toLowerCase().includes(filter)) {
        return true;
      }
    });

    displayBlogPosts(filteredPost);
  });
}
