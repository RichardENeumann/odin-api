import { giphyKey } from "./key.js";

const img = document.querySelector("img");
const inpSearch = document.getElementById("inpSearch");

function fetchGIF() {

  const search = encodeURI(inpSearch.value);

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${search}`, {mode: "cors"})
    .catch ((response) => {
      console.log(response.meta.msg);
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
      if (response.data.length == 0) {
        console.log(response.meta.msg);
      } else {
        img.src = response.data.images.original.url;
      }
    });
}

document.getElementById("btSearch").addEventListener("click", fetchGIF);