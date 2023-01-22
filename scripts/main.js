import Game from "./modules/game.js";
import Player from "./modules/player.js";

const selectors = {
  startGameButton: document.getElementById("start-game-btn"),
  startingPage: document.getElementById("starting-page"),
};

const main = () => {
  const player = new Player();
  selectors.startGameButton.addEventListener("click", () => {
    selectors.startingPage.style.display = "none";
    player.getPlayerStatsPage();
  });
  const game = new Game(player);
};

window.onload = () => {
  main();
};
