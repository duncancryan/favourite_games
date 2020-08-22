document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-game-form');
  form.addEventListener('submit', formHandler);

});

const formHandler = function (event) {
  event.preventDefault();
  const gameList = document.querySelector('#game-list');
  const title = event.target.title.value;
  const studio = event.target.studio.value;
  const metacriticScore = event.target.metacritic-score.value;
  const myScore = event.target.my-score.value;
  const genre = event.target.genre.value;
};