import { giphyKey } from "./key.js";

const img = document.querySelector("img");
const inpSearch = document.getElementById("inpSearch");

async function fetchGIF() {
  const search = encodeURI(inpSearch.value);
  
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${search}`, {mode: "cors"});
    let parsedResponse = await response.json();
    if (parsedResponse.data.length === 0) {
      console.log("Found nothing, server status: ", parsedResponse.meta.msg);
    } else {
      img.src = parsedResponse.data.images.original.url;
    }
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("btSearch").addEventListener("click", fetchGIF);