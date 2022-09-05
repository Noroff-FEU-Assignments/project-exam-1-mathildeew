const blogGrid = document.querySelector(".blog-grid");

function index(posts) {
  for (let i = 0; i < posts.length; i++) {
    const date = new Date(posts[0].date).toLocaleDateString("utc", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    if (i === 4) {
      break;
    }

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
  }
}

getApi();

// import { errorMessage } from "./ui/errorMessage.js";

// const baseUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/posts?_embed";
// const loader = document.querySelector(".loader");
// const blogGrid = document.querySelector(".blog-grid");

// async function getBlogPosts(url) {
//   try {
//     const response = await fetch(url);
//     const posts = await response.json();

//     // Convert wp date to utc format
//     const date = new Date(posts[0].date).toLocaleDateString("utc", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     });

//     // Display only 4 posts
//     for (let i = 0; i < posts.length; i++) {
//       loader.style.display = "none";

//       if (i === 4) {
//         break;
//       }
//       blogGrid.innerHTML += `
//     <div class="posts">
//     <a href="blogpost.html?id=${posts[i].id}">
//       <div class="post-card" style="background-image: url('${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}')">
//         <div class="posts-card-background">
//           <h2>${posts[i].title.rendered}</h2>
//           <h3>${date}</h3>
//         </div>
//       </div>
//     </a>
//   </div>
//     `;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getBlogPosts(baseUrl);
