const selectCategories = document.querySelector(".categories");
const showMoreBtn = document.querySelector(".showmore-button");
const select = document.querySelectorAll("select");
const blogGridPosts = document.querySelector(".blog-grid-posts");

// function blog(posts, categories) {
//   document.title += " | Blog";

//   // Show more posts
//   displayPosts(posts);

//   // Filter by category
//   categories.forEach(function (categories) {
//     selectCategories.innerHTML += `
//                             <option>${categories.name}</option>
//   `;

//     selectCategories.onchange = (event) => {
//       // code to change category
//     };
//   });
// }

// getApi();

// function displayPosts(posts) {
//   posts.forEach((posts) => {
//     const date = new Date(posts.date).toLocaleDateString("utc", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     });

//     blogGridPosts.innerHTML += `
//                             <div class="posts">
//                               <a href="blogpost.html?id=${posts.id}">
//                               <div class="post-card" style="background-image: url('${posts._embedded["wp:featuredmedia"]["0"].source_url}')">
//                                 <div class="posts-card-background">
//                                   <h2>${posts.title.rendered}</h2>
//                                   <h3>${date}</h3>
//                                 </div>
//                               </div>
//                             </a>
//                           </div>
//                             `;
//   });
// }

function blog(posts, categories) {
  let pageIndex = 0;
  const postsPerPage = 4;

  function loadPosts() {
    for (
      let i = pageIndex * postsPerPage;
      i < pageIndex * postsPerPage + postsPerPage;
      i++
    ) {
      const date = new Date(posts[0].date).toLocaleDateString("utc", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });

      if (!posts[i]) {
        break;
      }

      blogGridPosts.innerHTML += `
                                  <a href="blogpost.html?id=${posts[i].id}">
                                    <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                      <div class="posts-card-background">
                                        <h2>${posts[i].title.rendered}</h2>
                                        <h3>${date}</h3>
                                      </div>
                                    </div>
                                  </a>
                                

      `;
      // blogGridHome.append(postDisplayed);
    }
    loadPageNav();
  }
  function loadPageNav() {
    // previous.innerHTML = "";

    for (let i = 0; i < posts.length / postsPerPage; i++) {
      showMoreBtn.addEventListener("click", (e) => {
        pageIndex = e.target.innerHTML + 1;
        loadPosts(posts);
        console.log(pageIndex);
      });

      if (i === pageIndex) {
        showMoreBtn.style.display = "none";
      }
    }
  }
  loadPosts();
  console.log(posts);
}

getApi();
