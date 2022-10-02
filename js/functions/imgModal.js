export function biggerImage() {
  const smallImg = document.querySelectorAll("figure");
  const imgModal = document.querySelector(".img-modal");

  //  Open image model when an image on blogpost is clicked
  smallImg.forEach((bigImg) => {
    bigImg.addEventListener("click", () => {
      imgModal.style.display = "flex";
      body.style.overflow = "hidden";
      imgModal.innerHTML += `
                              <img src="${event.target.src}"/>
                              <p>Close</p>
                            `;
    });
  });

  // Close the image modal
  imgModal.addEventListener("click", () => {
    imgModal.style.display = "none";
    body.style.overflow = "initial";
    imgModal.innerHTML = "";
  });
}
