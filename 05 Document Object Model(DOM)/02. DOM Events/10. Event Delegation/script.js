const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let usernameInput = tweetForm.elements.username;
  let tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

function addTweet(username, tweet) {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);

  tweetContainer.append(newTweet);
}

tweetContainer.addEventListener("click", function (e) {
  e.target.remove();
});
