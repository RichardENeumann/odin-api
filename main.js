import { key } from "./key.js";

const img = document.querySelector("img");
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=cat`, {mode: "cors"})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    img.src = response.data.images.original.url;
  })