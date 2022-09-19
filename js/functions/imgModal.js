export function biggerImage() {
  const smallImg = document.querySelectorAll("figure");
  const imgModal = document.querySelector(".img-modal");

  smallImg.forEach((bigImg) => {
    bigImg.addEventListener("click", (event) => {
      imgModal.style.display = "flex";
      body.style.overflow = "hidden";
      imgModal.innerHTML += `
                                  <img src="${event.target.src}"/>
                                  <p>Close</p>
      
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
