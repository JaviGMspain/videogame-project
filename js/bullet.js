class Bullet {
  constructor(gameScreen, x, y, img) {
    this.gameScreen = gameScreen;
    this.left = x;
    this.top = y;
    this.width = 10;
    this.height = 20;
    this.speed = 5;
    this.element = document.createElement("img");

    this.element.src = img;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
    this.force = 1;
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top -= 3;
    this.updatePosition();
  }

  didCollide(opponent) {
    const playerRect = this.element.getBoundingClientRect();
    const opponentRect = opponent.element.getBoundingClientRect();

    if (
      playerRect.left < opponentRect.right &&
      playerRect.right > opponentRect.left &&
      playerRect.top < opponentRect.bottom &&
      playerRect.bottom > opponentRect.top
    ) {

      return true;
    } else {
      return false;
    }
  }
}

