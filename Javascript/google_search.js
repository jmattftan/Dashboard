//Google Search

document
  .getElementById("search_input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var input = this.value.trim();

      if (isURL(input)) {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
          input = "http://" + input;
        }
        window.location.href = input;
      } else {
        var searchQuery = encodeURIComponent(input);
        var googleSearchURL = "https://www.google.com/search?q=" + searchQuery;
        window.location.href = googleSearchURL;
      }
    }
  });

function isURL(text) {
  // A more permissive URL pattern that allows various valid URL formats
  var pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(text);
}
