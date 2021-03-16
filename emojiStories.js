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

const emojiStoryString = document.querySelector("#emoji-story");
const storyDescription = document.querySelector("#submit-description-btn");
const historyTitle = document.querySelector("#history-title");
const ul = document.querySelector("#description-list");
let historyCount = 0;
const emojiForm = document.querySelector("#emoji-story-form");
const descriptionButton = document.querySelector("#submit-description-btn");
let savedEmojisString = "";
let lengthInput = document.querySelector("#story-length-input");

emojiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let randomEmojis = [];
  let savedEmojis = [];
  let num = Number(lengthInput.value);
  for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * emojis.length);
    randomEmojis.push(emojis[random]);
    savedEmojis.push(emojis[random]);
  }
  emojiStoryString.textContent = `Story: ${randomEmojis.join("")}`;
  savedEmojisString = savedEmojis.join("");
});

descriptionButton.addEventListener("click", (event) => {
  event.preventDefault();
  historyCount++;
  const emojiDescription = document.querySelector("#description-input");
  historyCount === 1
    ? (historyTitle.textContent = `${historyCount} Saved Story`)
    : (historyTitle.textContent = `${historyCount} Saved Stories`);
  const descriptionListItem = document.createElement("li");
  descriptionListItem.textContent = `${savedEmojisString}: ${emojiDescription.value}`;
  ul.appendChild(descriptionListItem);
  emojiDescription.value = "";
  emojiStoryString.textContent = "Story:";
});
