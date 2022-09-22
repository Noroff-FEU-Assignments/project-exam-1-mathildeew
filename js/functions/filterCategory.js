import { displayBlogPosts } from "../blog.js";

export function filterByCategory(blogPosts) {
  const select = document.querySelector("select");

  select.addEventListener("change", () => {
    const filter = String(select.value);

    const filteredPost = blogPosts.filter(
      (blog) => String(blog.categories["0"]) === filter
    );

    if (select.value === "All") {
      displayBlogPosts(blogPosts);
    } else {
      displayBlogPosts(filteredPost);
    }
  });
}