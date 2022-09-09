import { errorMessage } from "./ui/errorMessage.js";

const aboutContainer = document.querySelector(".content");
const loader = document.querySelector(".loader");

const apiUrl = "https://projects.mathildeelinor.no/wp-json/wp/v2/pages/";

document.title += " | About";
// Get about page and display
async function getAbout() {
  try {
    const aboutContent = await await (await fetch(apiUrl)).json();
    loader.style.display = "none";
    console.log(aboutContent);
    aboutContainer.innerHTML += `
                            <div class="wp-content">
                              ${aboutContent[0].content.rendered}
                            </div>
                            `;
  } catch (error) {
    console.log(error);
    errorMessage();
  }
}

getAbout();

// function about(pages) {
//   document.title += " | About";

//   aboutContainer.innerHTML += `
//                               <div class="wp-content ">
//                                 ${pages[0].content.rendered}
//                               </div>
//                               `;
// }

// getApi();
