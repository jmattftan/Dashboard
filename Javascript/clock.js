//Clock
function updateClock() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = currentTime.toLocaleDateString(undefined, options);

  document.getElementById("clock").textContent = formattedTime;
  document.getElementById("day-of-week").textContent =
    formattedDate.split(",")[0];
  document.getElementById("date").textContent = formattedDate.split(",")[1];
}

updateClock(); // Update the clock initially
setInterval(updateClock, 1000); // Update every 1 second (1000 milliseconds)
