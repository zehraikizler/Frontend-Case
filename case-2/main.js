const btn = document.querySelector("#btn");
const inputText = document.querySelector("#text");

btn.addEventListener("click", () => {
  let reversed = reverseText(inputText.value);
  let final = isConjunction(reversed);
  document.querySelector("#result").innerHTML = final;
  let ul = document.createElement("ul");
  let repeatLetters = repeatLetterCount(final.toUpperCase());
  for (const key in repeatLetters) {
    if (Object.hasOwnProperty.call(repeatLetters, key)) {
      const element = repeatLetters[key];
      let li = document.createElement("li");
      li.innerHTML = key + " => " + element + " adet";
      ul.appendChild(li);
    }
  }
  document.body.appendChild(ul);
});

function reverseText(text) {
  let arr = text.split(" ").reverse();
  let resultText = "";
  arr.forEach((element) => {
    resultText += element + " ";
  });
  return resultText;
}

function isConjunction(text) {
  let resultText = "";
  let arr = text.split(" ");
  arr.splice(arr.length - 1, 1);
  let conjunctions = [
    "ama",
    "ve",
    "veya",
    "göre",
    "ile",
    "yalnız",
    "ise",
    "ne",
    "nasıl",
    "ancak",
    "çünkü",
    "neden",
    "oysa",
    "için",
  ];
  arr.forEach((element, i) => {
    const index = conjunctions.findIndex((item) => item == element.trim());
    if (index != -1) {
      arr[i] = element.split("").reverse().join("");
    }
    resultText += arr[i] + " ";
  });
  return resultText;
}

function repeatLetterCount(text) {
  const count = {};
  text.split("").forEach((element) => {
    if (element.trim() != "") {
      count[element] = count[element] ? count[element] + 1 : 1;
    }
  });
  return count;
}