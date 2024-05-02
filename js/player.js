class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.bullets = [];
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += this.directionY;
        this.left += this.directionX;
    
        if (this.left < 10) {
          this.left = 10;
        }
    
        if (this.top < 10) {
          this.top = 10;
        }
    
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
          this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
    
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
          this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
    
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
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

      shoot() {
        const bullet = new Bullet(this.gameScreen, this.left + this.width / 2, this.top, `/images/bullet.png`);
        this.bullets.push(bullet)
      }

      shootPowerful() {
        const bullet = new Bullet(this.gameScreen, this.left + this.width / 2, this.top);
        this.bullets.push(bullet);
      }
}