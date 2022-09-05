const blogGrid = document.querySelector(".blog-grid2");
const selectCategories = document.querySelector(".categories");
const select = document.querySelector("select");

function blog(posts, categories) {
  document.title += " | Blog";

  const date = new Date(posts[0].date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // Filter by category
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
                            <option>${categories.name}</option>
  `;
  });

  select.onchange = function () {};

  // Display blogposts
  posts.forEach(function (posts) {
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
}

getApi();
