document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-game-form');
  form.addEventListener('submit', formHandler);

  const deleteAll = document.createElement("input");
  deleteAll.type = "button";
  deleteAll.id = "delete_all";
  deleteAll.value = "Delete All";

  const deleteDiv = document.querySelector('#delete_all')
  deleteDiv.append(deleteAll);
  deleteAll.addEventListener("click", deleteHandler);
});


const formHandler = function (event) {
  event.preventDefault();
  console.log(event);
  
  const gameList = document.querySelector('#game-list');
  
  const title = event.target.title.value;
  const studio = event.target.studio.value;
  const metacritic = event.target.metacritic.value;
  const myScore = event.target.myscore.value;
  const genre = event.target.genre.value;

  const newGame = document.createElement("li");
  const titlePara = document.createElement("h3");
  const studioPara = document.createElement("h4");
  const metacriticPara = document.createElement("p");
  const myScorePara = document.createElement("p");
  const genrePara = document.createElement("p");
  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.id = "delete_button";
  deleteButton.value = "Delete";

  const played = document.createElement("input");
  const unPlayed = document.createElement("input");
  const playedDiv = document.createElement("form");

  played.type = "radio";
  played.name = "played_unplayed";
  played.id = "played";
  played.value = "played";

  unPlayed.type = "radio";
  unPlayed.name = "played_unplayed";
  unPlayed.id = "un_played";
  unPlayed.value = "un_played";

  const playedLabel = document.createElement("label");
  const unPlayedLabel = document.createElement("label");

  playedLabel.setAttribute("for", played);
  playedLabel.innerHTML = "Played";
  unPlayedLabel.setAttribute("for", unPlayed);
  unPlayedLabel.innerHTML = "Not Played";


  titlePara.textContent = `${title}`;
  studioPara.textContent = `${studio}`;
  metacriticPara.textContent = `MetacCritic Score: ${metacritic}`;
  myScorePara.textContent = `My Score: ${myScore}`;
  genrePara.textContent = `Genre: ${genre}`;

  newGame.appendChild(titlePara);
  newGame.appendChild(studioPara);
  newGame.appendChild(metacriticPara);
  newGame.appendChild(myScorePara);
  newGame.appendChild(genrePara);
  newGame.appendChild(deleteButton);
  deleteButton.addEventListener("click", (event) => {
    newGame.remove();
  });

  // played radio buttons here, need to write function which takes one or the other in
  newGame.appendChild(playedDiv);
  playedDiv.appendChild(playedLabel);
  playedDiv.appendChild(played);
  playedDiv.appendChild(unPlayedLabel);
  playedDiv.appendChild(unPlayed);
  played.addEventListener("click", (event) => {
    newGame.setAttribute("class", "played");
  });
  unPlayed.addEventListener("click", (event) => {
    newGame.setAttribute("class", "unplayed");
  });



  gameList.appendChild(newGame);

  event.target.reset();
};

const deleteHandler = function (event) {
  const gameList = document.querySelector("#game-list")
  gameList.innerHTML = "";
};

// create played/not played radio buttons which dynamically change the colour of the div.

