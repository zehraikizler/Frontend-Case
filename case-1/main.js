const wordEntered = document.querySelector(".wordEntered");
const btn = document.querySelector(".button");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
    let word = wordEntered.value;
    word = word.split(" ").join("").toLowerCase();
    const reverseWord = word.split("").reverse().join("");

    if(word == reverseWord){
        result.innerHTML = "True";
    }
    else {
        result.innerHTML = "False";
    }

    wordEntered.value = "";
    wordEntered.focus();
})

