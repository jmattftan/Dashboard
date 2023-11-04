//Quotes

var category = "success";
var ApiKey = "QIhItLg7heeMQy0nG4t2Xw==McTYvhMC0VscQeyi";

fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
  method: "GET",
  headers: {
    "X-Api-Key": ApiKey,
  },
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  })
  .then(function (data) {
    if (data && data.length > 0) {
      var author = data[0].author;
      var quote = data[0].quote;

      document.getElementById("quote").textContent = quote;
      document.getElementById("author").textContent = author;
    } else {
      console.log("No Quotes Found.");
    }
  })
  .catch(function (error) {
    console.error("Error: " + error.message);
  });
