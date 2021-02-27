// 1. get emojis from Array
// 2. event listener for length input.
// 3. length = # of emoji's in story text content
// 4. event listener for description.
// 5. submit description = ++ for saved story text content  The text of `#history-title` should say '0 Saved Stories', '1 Saved Story', or '${n} Saved Stories', where `n` is more than 1.
// 5a. & create li with emojis from story and input.value from description.


const emojis = [
  "😀",
  "😆",
  "😅",
  "🤣",
  "🙃",
  "😍",
  "😡",
  "🥶",
  "😱",
  "👻",
  "👾",
  "😻",
  "💋",
  "👅",
  "🧵",
  "👠",
  "🥾",
  "👑",
  "🎓",
  "🐔",
  "🐧",
  "🦄",
  "🦇",
  "🌲",
  "🎄",
  "🌊",
  "🍓",
  "🍍",
  "🥯",
  "🌭",
  "🍕",
  "🍣",
  "🥡",
  "🤸",
  "🎯",
  "🧨",
  "🔮",
  "💉",
  "🦠",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "☢️",
  "🚫",
  "💯",
  "🔱",
  "🎊",
];

// const generateEmoji = document.querySelector("#generate-story-btn");
const emojiStoryString = document.querySelector("#emoji-story");
const storyDescription = document.querySelector("#submit-description-btn");
const historyTitle = document.querySelector("#history-title");
const ul = document.querySelector("#description-list");
let historyCount = 0;
const emojiForm = document.querySelector("#emoji-story-form");
const descriptionButton = document.querySelector("#submit-description-btn");
let randomEmojis = [];
let lengthInput = document.querySelector("#story-length-input");


emojiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let randomEmojis = [];
    let num = Number(lengthInput.value);  
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * emojis.length);
        randomEmojis.push(emojis[random]);
    }
    emojiStoryString.textContent = `Story: ${randomEmojis.join("")}`;
    lengthInput.value = ""
});

descriptionButton.addEventListener("click", (event) => {
    event.preventDefault();
    debugger
    historyCount++;    
    const emojiDescription = document.querySelector("#description-input");
    historyTitle.textContent = `${historyCount} Saved Stories`;
    const descriptionListItem = document.createElement("li");
    descriptionListItem.textContent = `${randomEmojis.join("")}: ${emojiDescription.value}`;
    ul.appendChild(descriptionListItem);
    emojiDescription.value = ""
    emojiStoryString.textContent = "Story:"
})  


// });

// const arr = [2, 5, 4, 45, 32, 46, 78, 87, 98, 56, 23, 12];
// const chooseRandom = (arr, num = 4) => {
//    const res = [];
//    for(let i = 0; i < num; i++){
//       const random = Math.floor(Math.random() * arr.length);
//       if(res.indexOf(arr[random]) !== res[i]){
//       res.push(arr[random]);
//    };
// };
// return res;
// };

// console.log(chooseRandom(arr, 4));
