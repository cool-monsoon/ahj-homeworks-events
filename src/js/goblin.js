export default class Goblin {
  constructor() {
    this.position = -1;
  }

  randomPosition() {
    const cells = document.querySelectorAll('.cell');
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    const activeCell = document.querySelector('.active');
    if (activeCell) {
      activeCell.classList.remove('active');
      this.position = -1;
    }
    randomCell.classList.add('active');
    this.position = randomCell;
    return this.position;
  }

  hideGoblin() {
    this.position = -1;
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
      if (cell.classList.contains('active')) {
        cell.classList.remove('active');
      }
      this.position = -1;
    }
  }
}
