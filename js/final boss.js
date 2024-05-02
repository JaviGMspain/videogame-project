class FinalBoss {
    constructor(gameScreen, img) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 600);
        this.top = 0;
        this.height = 150;
        this.width = 150;
        this.speed = 5;
        this.lives = 10;
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

        // if (this.top < 20) {
        //     this.top += this.speed;
        // } else {
        //     this.left = newLeft;
        // }

        this.updatePosition();
    }

    /*Shoot() {
        const bullet = new Opponent1()
    }*/

}


/*bossUpdate() {
    this.counter++;
    this.opponents.forEach((opponent, index) => {
      opponent.move();
      if (opponent.top >= this.gameScreen.offsetHeight - 10) {
        this.opponents.splice(index, 1);
        opponent.element.remove();
      }

      //if (this.score === 10) this.youWin = true;


      if (this.player.didCollide(opponent)) {

        opponent.element.remove();

        this.opponents.splice(index, 1);


        this.lives--;
        const livesCounter =
          this.gameScreen.parentElement.querySelector("#lives");
        livesCounter.innerText = this.lives;
        if (this.lives === 0) this.gameIsOver = true;
      }
    }
    );

    this.player.move();
    if (this.counter % this.generationSpeed === 0) {
        this.opponents.push(new FinalBoss(this.gameScreen, '/images/final boss.png'));
      }

    if (this.counter % 200 === 0) {
      this.opponents.push(new Opponent1(this.gameScreen, '/images/misil1.png'));
    }

    if (this.counter % 300 === 0) {
      this.opponents.push(new Opponent2(this.gameScreen, '/images/misil2.png'))
    }

    this.player.bullets.forEach((bullet, bulletIndex) => {
      bullet.move();
      if (bullet.top < 0) {
        bullet.element.remove();
        this.player.bullets.splice(bulletIndex, 1);
      }
    });

    this.player.bullets.forEach((bullet, bulletIndex) => {
      this.opponents.forEach((opponent, opponentIndex) => {
        if (bullet.didCollide(opponent)) {
          bullet.element.remove();
          this.player.bullets.splice(bulletIndex, 1);
          opponent.lives--;
          if (opponent.lives <= 0) {
            opponent.element.remove();
            this.opponents.splice(opponentIndex, 1);
            this.score += 2;
            const scoreCounter =
              this.gameScreen.parentElement.querySelector("#score");
            scoreCounter.innerText = this.score;
          }
        }
      });
    });

    this.objects.forEach((object, index) => {
      object.move();
      if (object instanceof ExtraLive && object.catch(this.player)) {
        this.lives++;
        const livesCounter =
          this.gameScreen.parentElement.querySelector(`#lives`);
        livesCounter.innerText = this.lives;
        object.element.remove();
        this.objects.splice(index, 1);
      } else if (object instanceof PowerShot && object.catch(this.player)) {
        this.player.shootPowerful();
        this.opponents.forEach((opponent, opponentIndex) => {
          this.opponents.lives -= 2;
        });
        object.element.remove();
        this.objects.splice(index, 1);
      }
    });

    if (this.counter % 400 === 0) {
      this.objects.push(new ExtraLive(this.gameScreen, `/images/extralive.png`));
    }

    if (this.counter % 500 === 0) {
      this.objects.push(new PowerShot(this.gameScreen, `/images/powershot.png`));
    }
  }    */



