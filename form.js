const form = document.querySelector(".memeForm")
const imgUrl = document.querySelector("input[name=imageUrl]");
const topTextInput = document.querySelector("input[name=topTextInput]");
const botTextInput = document.querySelector("input[name=botTextInput]");
let memeUrl = "";
let memeTopInput = "";
let memeBotInput = "";

form.addEventListener('submit', function(event) {
    event.preventDefault();
    memeUrl = imgUrl.value;
    memeTopInput = topTextInput.value;
    memeBotInput = botTextInput.value;
    createMemes(memeUrl, memeTopInput, memeBotInput);
    form.reset();
})