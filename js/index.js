const blogGridHome = document.querySelector(".blog-grid");
const showMoreButton = document.querySelector(".show-more");
const navnav = document.querySelector(".navnav");
const previousBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const postsDisplayed = document.querySelector(".carousel");

let postsPerPage = 4;
let currentPage = 1;

function index(posts) {
  //  DETTE FUNGERER to display posts!! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // for (let i = 0; i < posts.length; i++) {
  //   const date = new Date(posts[0].date).toLocaleDateString("utc", {
  //     year: "numeric",
  //     month: "long",
  //     day: "2-digit",
  //   });
  //   if (i === 4) {
  //     break;
  //   }
  //   blogGridHome.innerHTML += `
  //                               <a href="blogpost.html?id=${posts[i].id}">
  //                               <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
  //                                 <div class="posts-card-background">
  //                                   <h2>${posts[i].title.rendered}</h2>
  //                                   <h3>${date}</h3>
  //                                 </div>
  //                               </div>
  //                               </a>
  //                             `;
  //  DETTE FUNGERER halveis!! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // let pageIndex = 0;
  // const postsPerPage = 4;
  // function loadPosts() {
  //   for (
  //     let i = pageIndex * postsPerPage;
  //     i < pageIndex * postsPerPage + postsPerPage;
  //     i++
  //   ) {
  //     const date = new Date(posts[0].date).toLocaleDateString("utc", {
  //       year: "numeric",
  //       month: "long",
  //       day: "2-digit",
  //     });
  //     if (!posts[i]) {
  //       break;
  //     }
  //     blogGridHome.innerHTML = `
  //                                 <a href="blogpost.html?id=${posts[i].id}">
  //                                   <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
  //                                     <div class="posts-card-background">
  //                                       <h2>${posts[i].title.rendered}</h2>
  //                                       <h3>${date}</h3>
  //                                     </div>
  //                                   </div>
  //                                 </a>
  //     `;
  //     // blogGridHome.append(postDisplayed);
  //   }
  //   loadPageNav();
  // }
  // function loadPageNav() {
  //   navnav.innerHTML = "";
  //   // previous.innerHTML = "";
  //   for (let i = 0; i < posts.length / postsPerPage; i++) {
  //     const span = document.createElement("span");
  //     span.innerHTML = i + 1;
  //     span.addEventListener("click", (e) => {
  //       pageIndex = e.target.innerHTML - 1;
  //       loadPosts();
  //       console.log(pageIndex);
  //     });
  //     if (i === pageIndex) {
  //       span.style.fontSize = "2rem";
  //     }
  //     navnav.append(span);
  //   }
  // }
  // loadPosts();

  // Create HTML Grid
  let postDisplayed = "";
  console.log(posts);

  posts.filter((post, index) => {
    let start = (currentPage - 1) * postsPerPage;
    let end = currentPage * postsPerPage;

    if (index >= start && index < end) return true;
  });

  function displayPosts(page = 1) {
    if (page == 1) {
      previousBtn.style.display = "none";
    } else {
      previousBtn.style.display = "block";
    }

    for (let i = 0; i < posts.length; i++) {
      const date = new Date(posts[0].date).toLocaleDateString("utc", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
      if (i === 4) {
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
    }
    function previousPage() {
      if (currentPage > 1) currentPage--;
      displayPosts();
    }

    function nextPage() {
      if (currentPage * postsPerPage < posts.length) currentPage++;
      displayPosts();
    }

    previousBtn.addEventListener("click", previousPage, false);
    nextBtn.addEventListener("click", nextPage, false);
  }
  displayPosts();
}

getApi();
