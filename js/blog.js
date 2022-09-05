const blogGrid = document.querySelector(".blog-grid2");

function blog(posts) {
  document.title += " | Blog";
  const date = new Date(posts[0].date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  console.log(posts);
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

// const baseUrl =
//   "https://projects.mathildeelinor.no/wp-json/wp/v2/posts?per_page=100&_embed";

// const loader = document.querySelector(".loader");
// const blogGrid = document.querySelector(".blog-grid2");
// const search = document.querySelector(".search");

// export async function getBlog(url) {
//   try {
//     const response = await fetch(baseUrl);
//     const post = await response.json();
//     console.log(post);

//     searchBlog();

//     const date = new Date(post[0].date).toLocaleDateString("utc", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     });

//     post.forEach(function (post) {
//       loader.style.display = "none";
//       blogGrid.innerHTML += `
//     <div class="posts">
//       <a href="blogpost.html?id=${post.id}">
//         <div class="post-card" style="background-image: url('${post._embedded["wp:featuredmedia"]["0"].source_url}')">
//           <div class="posts-card-background">
//             <h2>${post.title.rendered}</h2>
//             <h3>${date}</h3>
//           </div>
//         </div>
//       </a>
//     </div>
//     `;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getBlog();
// /* <img src="${posts._embedded["wp:featuredmedia"]["0"].source_url}"/> */
