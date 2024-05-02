class Opponents {
  constructor(gameScreen, img) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 700);
    this.top = 0;
    this.height = 100;
    this.width = 100;
    
    this.element = document.createElement("img");

    this.element.src = img;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}

class Opponent1 extends Opponents {
  constructor(gameScreen, img) {
      super(gameScreen, img);

    this.lives = 1;
  }

  move() {
    this.top += 1;
    this.updatePosition()
  }
}

class Opponent2 extends Opponents {
  constructor(gameScreen, img) {
    super(gameScreen, img);

    this.lives = 3;
  }
}

/*class BossBullet extends Opponents {
  constructor(gameScreen, img)
}*/

