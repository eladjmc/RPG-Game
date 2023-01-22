import MainMap from "./map.js";
import Player from "./player.js";
const windowDisplay = {
    playerStats: true,
    globalMap: false,
    village: false,
    billBoard: false,
    FightScene: false,
    gameOver: false,
};
const selectors = {
    PlayerStatsDoneButton: document.querySelector(".player-stats-page .done-stats-btn"),
    globalMapSection: document.querySelector(".world-map"),
}

export default class Game {
    constructor(player) {
        this.player = player;
        this.listeners();

      }
      listeners(){
        selectors.PlayerStatsDoneButton.addEventListener("click", ()=>{
            this.player.leavePlayerStatsPage();
            selectors.globalMapSection.style.display='flex';
        })


      }
}