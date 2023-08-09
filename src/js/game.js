import Goblin from './goblin';

export default class Game {
  constructor() {
    this.countHit = '0';
    this.countMiss = '0';
    this.count = 0;
  }

  onCellClick() {
    const cells = document.querySelectorAll('.cell');
    this.countHit = document.querySelector('.hit');
    this.countMiss = document.querySelector('.miss');

    for (let i = 0; i < cells.length; i += 1) {
      cells[i].addEventListener('click', () => {
        if (cells[i].classList.contains('active')) {
          cells[i].classList.remove('active');
          this.countHit.textContent = +this.countHit.textContent + 1;
        } else {
          this.countMiss.textContent = +this.countMiss.textContent + 1;
        }
        this.result();
        this.count = 0;
      });
    }
  }

  result() {
    const gameArea = document.querySelector('.area_container');
    this.countHit = document.querySelector('.hit');
    this.countMiss = document.querySelector('.miss');
    const goblin = new Goblin();
    if (+this.countHit.textContent === 5) {
      const winMessage = '<div class="result"> <p> Победа!</p></div>';
      gameArea.insertAdjacentHTML('beforeend', winMessage);
      goblin.hideGoblin();
      this.stop();
    } else if (+this.countMiss.textContent === 5) {
      const looseMessage = '<div class="result"> <p> Поражение!</p></div>';
      gameArea.insertAdjacentHTML('beforeend', looseMessage);
      goblin.hideGoblin();
      this.stop();
    }
  }

  start() {
    const goblin = new Goblin();
    this.countMiss = document.querySelector('.miss');
    this.onCellClick();
    this.game = setInterval(() => {
      goblin.randomPosition();
      this.countMiss.textContent = +this.countMiss.textContent + this.count;
      if (this.count !== 1) {
        setTimeout(this.count = 1, 1000);
      }
      this.result();
    }, 1000);
  }

  stop() {
    const message = document.querySelector('.result');
    if (message.classList.contains('result')) {
      clearInterval(this.game);
    }
  }
}
