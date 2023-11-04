//Website URL

document
  .getElementById("url_input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var input = this.value.trim();

      if (input.startsWith("http://") || input.startsWith("https://")) {
        window.location.href = input; // Navigate to the URL
      } else if (input.includes(".com")) {
        input = "https://" + input;
        window.location.href = input; // Navigate to the URL
      } else {
        input = "http://" + input;
        window.location.href = input; // Navigate to the URL
      }
    }
  });

function isURL(text) {
  // Check if the input is a URL by looking for common URL patterns
  var pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(text);
}
