const blogGrid = document.querySelector(".blog-grid2");
const selectCategories = document.querySelector(".categories");
const showMoreButton = document.querySelector(".show-more");
const select = document.querySelectorAll("select");

function blog(posts, categories) {
  document.title += " | Blog";

  function displayPosts() {
    let currentPosts = 0;
    showPosts = posts.slice(currentPosts, currentPosts + 4);

    showPosts.forEach(function (posts) {
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
    const displayMoreposts = () => {
      displayPosts(showPosts.push(currentPosts + 4));
      if (!(currentPosts + 4 > posts.length)) {
        currentPosts += 4;
      }
      // if (currentPosts === posts.length) {
      //   showMoreButton.removeEventListener("click", displayMoreposts);
      //   showMoreButton.display.style = "none";
      // }
      console.log(currentPosts);
    };
    showMoreButton.addEventListener("click", displayMoreposts);
  }
  displayPosts();

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

// let currentPosts = 0;
// const displayMoreposts = (posts) => {
//   displayPosts(posts.slice(currentPosts, currentPosts + 4));
//   if (!(currentPosts + 4 > posts.lenght)) {
//     currentPosts += 4;
//   }
//   if (currentPosts === posts.lenght) {
//     showMoreButton.removeEventListener("click", displayMoreposts);
//     showMoreButton.display.style = "none";
//   }
// };

// displayMoreposts(posts);
// showMoreButton.addEventListener("click", displayMoreposts);
// }
// }

// displayPosts();

// Display blogposts to show 5 first
//  function displayPosts() {
//   let currentPosts = 5;
//   let slicedPosts = posts.slice(0, currentPosts);

//   console.log(slicedPosts);
