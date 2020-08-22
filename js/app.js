document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-game-form');
  form.addEventListener('submit', formHandler);

});

const formHandler = function (event) {
  event.preventDefault();
  
  const gameList = document.querySelector('#game-list');
  
  const title = event.target.title.value;
  const studio = event.target.studio.value;
  const metacritic = event.target.metacritic-score.value;
  const myScore = event.target.my-score.value;
  const genre = event.target.genre.value;

  const newGame = document.createElement("li");
  const titlePara = document.createElement("p");
  const studioPara = document.createElement("p");
  const metacriticPara = document.createElement("p");
  const myScorePara = document.createElement("p");
  const genrePara = document.createElement("p");

  titlePara.textContent = title;
  studioPara.textContent = studio;
  metacriticPara.textContent = metacritic;
  myScorePara.textContent = myScore;
  genrePara.textContent = genre;

  newGame.appendChild(titlePara);
  newGame.appendChild(studioPara);
  newGame.appendChild(metacriticPara);
  newGame.appendChild(myScorePara);
  newGame.appendChild(genrePara);
};