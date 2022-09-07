const blogGridHome = document.querySelector(".blog-grid");
const showMoreButton = document.querySelector(".show-more");
const navnav = document.querySelector(".navnav");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

// function index(posts) {
//   for (let i = 0; i < posts.length; i++) {
//     const date = new Date(posts[0].date).toLocaleDateString("utc", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     });

//     if (i === 4) {
//       break;
//     }

//     blogGridHome.innerHTML += `
//                                 <a href="blogpost.html?id=${posts[i].id}">
//                                 <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
//                                   <div class="posts-card-background">
//                                     <h2>${posts[i].title.rendered}</h2>
//                                     <h3>${date}</h3>
//                                   </div>
//                                 </div>
//                                 </a>
//                               `;
//   }
// }

// getApi();

// ALT UNDER HER ER TEST - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function index(posts) {
  let pageIndex = 0;
  let postsPerPage = 4;

  loadPosts();

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

      blogGridHome.innerHTML = `
                                <a href="blogpost.html?id=${posts[i].id}">
                                <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
                                  <div class="posts-card-background">
                                    <h2>${posts[i].title.rendered}</h2>
                                    <h3>${date}</h3>
                                  </div>
                                </div>
                                </a>


      `;
      // blogGridHome.append(posts);
    }
    loadPageNav();
  }
  function loadPageNav() {
    navnav.innerHTML = "";
    // previous.innerHTML = "";

    for (let i = 0; i < posts.length / postsPerPage; i++) {
      const span = document.createElement("span");
      span.innerHTML = i + 1;
      span.addEventListener("click", (e) => {
        pageIndex = e.target.innerHTML - 1;
        loadPosts();
        console.log(pageIndex);
      });

      if (i === pageIndex) {
        span.style.fontSize = "2rem";
      }

      navnav.append(span);
    }
  }
  console.log(posts);
}
getApi();
