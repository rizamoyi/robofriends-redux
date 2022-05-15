export const fetchData = (url) =>
  fetch(url).then((response) => response.json());
