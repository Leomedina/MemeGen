// Create the juicy memes from the information sent over from the form
const memes = document.querySelector(".memes");
const meme = document.querySelector(".wrapper");

//create img element, then add image attribute then append to the div
function createMemes(memeUrl, memeTopInput, MemeBotInput) {
    newDiv = document.createElement("div");
    newImg = document.createElement("img");
    newTopP = document.createElement("p");
    newBotP = document.createElement("p");
    newRemoveP = document.createElement("p");

    newImg.setAttribute("class", "meme");
    newImg.setAttribute("src", memeUrl);

    newTopP.setAttribute("class", "topTxt");
    newTopP.innerText = memeTopInput;
    newBotP.setAttribute("class", "botTxt");
    newBotP.innerText = memeBotInput;
    newRemoveP.setAttribute("class", "removeTxt");
    newRemoveP.innerText = "REMOVE";

    newDiv.setAttribute("class", "wrapper");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newTopP);
    newDiv.appendChild(newBotP);
    newDiv.appendChild(newRemoveP);

    memes.appendChild(newDiv);
}

memes.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.tagName === "IMG" || event.target.tagName === "P") {
        event.target.parentElement.remove();
    }
});