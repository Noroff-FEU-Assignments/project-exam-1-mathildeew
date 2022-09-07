const blogPostContent = document.querySelector(".content");

function post(blogPost) {
  document.title += ` | ${blogPost.title.rendered}`;

  const date = new Date(blogPost.date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  blogPostContent.innerHTML = `
                              <div class="wp-content">
                               <h1>${blogPost.title.rendered}</h1>
                               <h2>${date}</h2>
                               <div class="blogpost">${blogPost.content.rendered}</div>
                               <p class="signature"> ${blogPost._embedded.author[0].name}</p>
                              </div>
                              `;

  // Previous & next blogpost

  // Bigger image & close bigger image
  const smallImg = document.querySelectorAll("figure");
  const imgModal = document.querySelector(".img-modal");

  smallImg.forEach((bigImg) => {
    bigImg.addEventListener("click", (event) => {
      imgModal.style.display = "flex";
      body.style.overflow = "hidden";
      imgModal.innerHTML += `
                            <div class="modal-close">
                              <span></span>
                              <span></span>
                            </div>
                            <img src="${event.target.src}"/>

    `;

      imgModal.addEventListener("click", closeImg);
      function closeImg(event) {
        imgModal.innerHTML = "";
        imgModal.style.display = "none";
        body.style.overflow = "initial";
      }
    });
  });
}

getApi();
