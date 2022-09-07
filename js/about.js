const aboutContainer = document.querySelector(".content");

function about(pages) {
  document.title += " | About";

  aboutContainer.innerHTML += `
                              <div class="wp-content ">
                                ${pages[0].content.rendered}
                              </div>
                              `;
}

getApi();
