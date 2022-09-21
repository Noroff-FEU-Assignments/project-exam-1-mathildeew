import { filterByCategory } from "../functions/filterCategory.js";

// Display blogposts on blog page
export function displayBlogPosts(blogPosts) {
  const blogPostContainer = document.querySelector(".blog-grid");

  let pageIndex = 0;
  let postsPerPage = 4;

  blogPostContainer.innerHTML = "";

  for (
    let i = pageIndex * postsPerPage;
    i < pageIndex * postsPerPage + postsPerPage;
    i++
  ) {
    if (!blogPosts[i]) {
      break;
    }

    const date = new Date(blogPosts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const blogPostContent = document.createElement("div");
    blogPostContent.classList.add("blog-grid-posts", "fade");
    blogPostContent.innerHTML = `
                                <a href="blogpost.html?id=${blogPosts[i].id}">
                                <div class="post-card" style="background-image: url('${blogPosts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                  <div class="pc-background">
                                    <h2>${blogPosts[i].title.rendered}</h2>
                                    <h3>${date}</h3>
                                  </div>
                                </div>
                                </a>
                                `;

    blogPostContainer.append(blogPostContent);
  }

  // loadBlogPostNav(blogPosts);
}

// Navigation between blogposts
// function loadBlogPostNav(blogPosts) {
//   const postsNav = document.querySelector(".blogposts-nav");

//   postsNav.innerHTML = "";

//   for (let i = 0; i < blogPosts.length / postsPerPage; i++) {
//     const span = document.createElement("span");
//     span.innerHTML = i + 1;
//     span.addEventListener("click", (e) => {
//       pageIndex = e.target.innerHTML - 1;
//       displayBlogPosts(blogPosts);
//     });

//     postsNav.append(span);
//   }
// }
