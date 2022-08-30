export function errorMessage(messageType, message, target) {
  const errorContainer = document.querySelector(".error-message");
  const loader = document.querySelector(".loader");

  errorContainer.style.display = "block";
  errorContainer.innerHTML`
    <p>There was an error with the site.</p>
    `;
  loader.style.display = "none";
}
