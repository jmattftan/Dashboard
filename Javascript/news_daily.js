//News Daily

const apiKey = "8589ebe9d0124675a6a2b73342f3db81";
const apiUrl = "https://newsapi.org/v2/top-headlines";

axios
  .get(apiUrl, {
    params: {
      country: "US", // Adjust this to the country you want news from
      apiKey: apiKey,
    },
  })
  .then((response) => {
    // Process the response data here
    const articles = response.data.articles;
    const newsContainer = document.querySelector(".glassmorphism-news");

    articles.forEach((article) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const title = document.createElement("div");
      title.id = "title-news";
      title.textContent = article.title;

      const description = document.createElement("div");
      description.id = "news-paragraph";
      description.textContent = article.description;

      const link = document.createElement("a");
      link.textContent = "Read more";
      link.href = article.url;
      link.target = "_blank";

      newsItem.appendChild(title);
      newsItem.appendChild(description);
      newsItem.appendChild(link);

      newsContainer.appendChild(newsItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching news:", error);
  });
