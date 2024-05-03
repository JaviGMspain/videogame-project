class FinalBoss {
    constructor(gameScreen, img) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 600);
        this.top = 0;
        this.height = 150;
        this.width = 150;
        this.speed = 5;
        this.lives = 20;
        this.direction = 1;

        this.element = document.createElement("img");

        this.element.src = img;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);

        this.moveInterval = setInterval(() => {
            this.move();
        }, 100);
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }

    move() {
        

        let newLeft = this.left + (this.direction * this.speed)

        if (newLeft >= 0 && newLeft <= 600) {
            this.left = newLeft;
        } else {
          this.left = this.left;
        }

        this.updatePosition();
    }
}
