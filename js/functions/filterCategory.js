import { displayBlogPosts } from "../blog.js";

export function filterByCategory(blogPosts, categories) {
  // Create drop down menu of categories
  const selectCategories = document.querySelector(".categories");

  categories.slice(0, 4).forEach(function (categories) {
    selectCategories.innerHTML += `
                                      <option value="${categories.id}">${categories.name}</option>
                                    `;
  });

  // Display blogposts in selected category
  const select = document.querySelector("select");

  select.addEventListener("change", () => {
    const filter = select.value;

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
