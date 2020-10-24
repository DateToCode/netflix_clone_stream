const ARRMOVIES = [
  "The Sinner",
  "Venom",
  "El Irlandes",
  "Suits",
  "La maldicion",
  "Triple frontera",
  "Defenders",
];

// PASOS

// 1 - ONCLICK IMG SEARCH
// 2 - AÑADIR LISTENER INPUT VALUE
// 3 - PINTAR PELICULAS QUE CONTENGAN EL VALUE DEL INPUT

function clickSearchIcon() {
  let icon = document.getElementById("searchIcon");

  // 1
  icon.classList.toggle("selected");

  let input = document.getElementById("searchInput");
  let searchListContainer = document.getElementById("searchListContainer");

  if (icon.classList.contains("selected")) {
    input.style.visibility = "visible";
    input.style.opacity = 1;
    searchListContainer.style.display = "block";
    // 2
    input.addEventListener("input", searchList);
  } else {
    input.style.visibility = "hidden";
    input.style.opacity = 0;
    searchListContainer.style.display = "none";
    // 2
    input.removeEventListener("input", searchList);
  }
}

function searchList(event) {
  const VALUE = event.target.value;

  // 3

  let searchList = document.getElementById("searchList");

  searchList.innerHTML = "";

  for (let index = 0; index < ARRMOVIES.length; index++) {
    const MOVIE = ARRMOVIES[index];
    if (MOVIE.toLowerCase().includes(VALUE.toLowerCase()) && VALUE != "") {
      let htmlMovie = document.createElement("li");
      htmlMovie.innerHTML = MOVIE;
      searchList.appendChild(htmlMovie);
    }
  }
}
