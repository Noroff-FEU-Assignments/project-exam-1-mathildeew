export function convertDate(posts) {
  const date = new Date(posts[0].date).toLocaleDateString("utc", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
