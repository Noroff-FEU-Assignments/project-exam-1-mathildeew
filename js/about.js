const aboutContainer = document.querySelector(".about");

function about(pages) {
  document.title += " | About";

  aboutContainer.innerHTML += `
  ${pages[0].content.rendered}
  `;
}

getApi();
