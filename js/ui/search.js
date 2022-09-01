import { getBlog } from "../blog.js";

export function searchBlog(post) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const searchedPosts = post.filter(function (post) {
      if (post[0].id.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    getBlog(searchedPosts);
  };
}
