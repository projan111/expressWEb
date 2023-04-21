const searchBox = document.getElementById("searchBox");

function getResult(event) {
  event.preventDefault();
  alert("I'm Groot");
}

searchBox.addEventListener("click", getResult);
