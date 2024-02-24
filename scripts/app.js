//movie poster original image
let moviePoster = document.querySelector(".movie-poster");

//modal window layer
let modal = document.querySelector("#myModal");

//close button
let closeBtn = document.querySelector(".closeBtn");

//modal window image
let modalImage = document.querySelector(".movie-poster-modal");
//image click
moviePoster.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = moviePoster.src;
});

//window close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
