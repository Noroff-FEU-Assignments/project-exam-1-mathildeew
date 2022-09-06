const blogPostC = document.querySelector(".blogpost-content");

function post(blogPost) {
  document.title += ` | ${blogPost.title.rendered}`;

  const date = new Date(blogPost.date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  blogPostC.innerHTML += `
    <h1>${blogPost.title.rendered}</h1>
    <h2>${date}</h2>
     <div class="blogpost">${blogPost.content.rendered}</div>
    <p class="signature">- ${blogPost._embedded.author[0].name}</p>
    <p class="previous">Previous</p>
    <p class="next">Next</p>
    `;

  // Previous & next blogpost
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");

  previous.addEventListener("click", previousPost);
  next.addEventListener("click", nextPost);

  function previousPost() {}
  function nextPost() {}

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
