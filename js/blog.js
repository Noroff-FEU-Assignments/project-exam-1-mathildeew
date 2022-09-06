const blogGrid = document.querySelector(".blog-grid2");
const selectCategories = document.querySelector(".categories");
const showMoreButton = document.querySelector(".show-more");
const select = document.querySelectorAll("select");

function blog(posts, categories) {
  document.title += " | Blog";

  posts.forEach(function (posts) {
    const date = new Date(posts.date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

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

  // Show more posts

  // Filter by category
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
                            <option>${categories.name}</option>
  `;

    selectCategories.onchange = (event) => {
      // code to change category
    };
  });
}

getApi();
