export function errorMessage() {
  const errorContainer = document.querySelector(".error-message");
  const loader = document.querySelector(".loader");

  errorContainer.innerHTML += `
                              <p>There was an error when loading the content. Please try agian later.</p>
                              `;
  loader.style.display = "none";
}
