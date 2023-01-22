const selectors = {
  playerStatsPage: document.querySelector(".player-stats-page"),
  playerStats: {
    maxHp: document.querySelector(".player-stats-page .player-max-hp"),
    str: document.querySelector(".player-stats-page .player-str"),
    dex: document.querySelector(".player-stats-page .player-dex"),
    def: document.querySelector(".player-stats-page .player-def"),
    freePoints: document.getElementById("free-points-display"),
    doneButton: document.querySelector(".player-stats-page .done-stats-btn"),
    addStatsButtons: {
      allButtons: document.querySelectorAll(".add-stat-btn"),
      maxHp: document.getElementById("add-hp"),
      str: document.getElementById("add-str"),
      dex: document.getElementById("add-dex"),
      def: document.getElementById("add-def"),
    },
  },

};
const statsDictionary = {
  hp: 'hp',
  str: 'str',
  dex: 'dex',
  def: 'def',
};

export default class Player {
  constructor(name='Player') {
    this.maxHp = 100;
    this.currentHp = 100;
    this.name = name;
    this.str = 10;
    this.dex = 10;
    this.def = 2;
    this.xp = 0;
    this.lvl = 1;
    this.freePoints = 3;
    this.playerStatsWindowHandler();
  }

  isStatsWindowClosed(){ 
    return selectors.playerStatsPage.style.display == 'none'
  }

  getPlayerStatsPage() {
    selectors.playerStatsPage.style = "display:flex";
  }
  leavePlayerStatsPage() {
    selectors.playerStatsPage.style = "display:none";
  }

  playerStatsWindowHandler() {
    this.updatePlayerStatsUI();
    selectors.playerStats.addStatsButtons.maxHp.addEventListener("click", ()=>{
        this.addStat(statsDictionary.hp);
    });
    selectors.playerStats.addStatsButtons.str.addEventListener("click", ()=>{
        this.addStat(statsDictionary.str);
    });
    selectors.playerStats.addStatsButtons.dex.addEventListener("click", ()=> {
        this.addStat(statsDictionary.dex);
    });
    selectors.playerStats.addStatsButtons.def.addEventListener("click", ()=>{
        this.addStat(statsDictionary.def);
    });
  }

  addStat(statStr){
    if(this.freePoints > 0){
        this.freePoints--;
    switch (statStr) {
        case statsDictionary.hp:
            this.maxHp += 10;
            this.currentHp = this.maxHp;
            break;
        case statsDictionary.str:
            this.str += 1;
            break;

        case statsDictionary.dex:
            this.dex += 1;
            break;

        case statsDictionary.def:
            this.def += 1;
            break;
    
        default:
            break;
    }
    this.updatePlayerStatsUI();
    }
  }

  updatePlayerStatsUI() {
    selectors.playerStats.freePoints.textContent = `${this.freePoints}`;
    selectors.playerStats.maxHp.textContent = ` ${this.maxHp}`;
    selectors.playerStats.str.textContent = ` ${this.str}`;
    selectors.playerStats.dex.textContent = ` ${this.dex}`;
    selectors.playerStats.def.textContent = ` ${this.def}`;
    if (this.freePoints > 0) {
      selectors.playerStats.addStatsButtons.allButtons.forEach((button) => {
        button.style.display = "flex";
      });
    }
  }
}
