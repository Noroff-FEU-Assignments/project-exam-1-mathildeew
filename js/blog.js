const blogGrid = document.querySelector(".blog-grid2");
const selectCategories = document.querySelector(".categories");
const showMore = document.querySelector(".show-more");
const select = document.querySelectorAll("select");

function blog(posts, categories, morePosts) {
  document.title += " | Blog";

  // Filter by category
  categories.forEach(function (categories) {
    selectCategories.innerHTML += `
                            <option>${categories.name}</option>
  `;

    console.log(categories);

    selectCategories.onchange = (event) => {
      // code to change category
    };
  });

  // Display blogposts
  for (let i = 0; i < posts.length; i++) {
    const date = new Date(posts[i].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    blogGrid.innerHTML += `
        <div class="posts">
          <a href="blogpost.html?id=${posts[i].id}">
            <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
              <div class="posts-card-background">
                <h2>${posts[i].title.rendered}</h2>
                <h3>${date}</h3>
              </div>
            </div>
          </a>
        </div>
        `;

    // Show more posts button
    showMore.addEventListener("click", showMorePosts);
    function showMorePosts() {
      // Code to show more posts
    }
  }
}

getApi();
