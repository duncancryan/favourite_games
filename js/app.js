document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-game-form');
  form.addEventListener('submit', formHandler);

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
  const titlePara = document.createElement("p");
  const studioPara = document.createElement("p");
  const metacriticPara = document.createElement("p");
  const myScorePara = document.createElement("p");
  const genrePara = document.createElement("p");

  titlePara.textContent = `Title: ${title}`;
  studioPara.textContent = `Studio: ${studio}`;
  metacriticPara.textContent = `MetacCritic Score: ${metacritic}`;
  myScorePara.textContent = `My Score: ${myScore}`;
  genrePara.textContent = `Genre: ${genre}`;

  newGame.appendChild(titlePara);
  newGame.appendChild(studioPara);
  newGame.appendChild(metacriticPara);
  newGame.appendChild(myScorePara);
  newGame.appendChild(genrePara);

  gameList.appendChild(newGame);

  event.target.reset();
};