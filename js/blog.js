const selectCategories = document.querySelector(".categories");
const showMoreButton = document.querySelector(".show-more");
const select = document.querySelectorAll("select");
const blogGridPosts = document.querySelector(".blog-grid-posts");

function blog(posts, categories) {
  document.title += " | Blog";

  // Show more posts
  displayPosts(posts);

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

function displayPosts(posts) {
  posts.forEach((posts) => {
    const date = new Date(posts.date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    blogGridPosts.innerHTML += `
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
}
