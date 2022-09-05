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
