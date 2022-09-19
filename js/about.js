import { errorMessage } from "./functions/errorMessage.js";

const aboutContainer = document.querySelector(".content");
const loader = document.querySelector(".loader");
const apiUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/pages/88";

// Get about page and display
document.title += " | About";

async function displayAboutContent() {
  try {
    const aboutContent = await (await fetch(apiUrl)).json();
    loader.style.display = "none";
    aboutContainer.innerHTML += `
                                  <div class="wp-content">
                                    ${aboutContent.content.rendered}
                                  </div>
                                `;
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

displayAboutContent();
