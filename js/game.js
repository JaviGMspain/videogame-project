class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#game-end");
    this.winScreen = document.querySelector("#you-win");
    this.height = 600;
    this.width = 800;
    this.opponents = [];
    this.objects = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.youWin = false;
    this.gameIntervalId;
    this.counter = 0;
    this.gameLoopFrequency = 1000 / 60;
    this.generationSpeed = 200;
    this.finalBoss = false;
    this.finalBossGenerate = false;
    this.player = new Player(
      this.gameScreen,
      400,
      500,
      100,
      100,
      "./images/player.png"
    );
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }


  gameLoop() {
    //this.update();
    this.bossUpdate();

    /*if (this.finalBoss === true) {
      this.bossUpdate();
    } else {
      this.update();
    }*/
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameScreen.style.display = "none";
      this.endScreen.style.display = "block";
    } else if (this.youWin) {
      clearInterval(this.gameIntervalId);
      this.gameScreen.style.display = "none";
      this.winScreen.style.display = "block";
    }
  }

  update() {
    this.counter++;
    this.opponents.forEach((opponent, index) => {
      opponent.move();
      if (opponent.top >= this.gameScreen.offsetHeight - 10) {
        this.opponents.splice(index, 1);
        opponent.element.remove();
        this.score++;
        const scoreCounter =
          this.gameScreen.parentElement.querySelector("#score");
        scoreCounter.innerText = this.score;
      }

      if (this.score >= 10)  {
        console.log('not true')
        this.finalBoss = true;
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
      this.opponents.push(new Opponent1(this.gameScreen, '../images/opponent1.png'));
    }

    if (this.counter % 300 === 0) {
      this.opponents.push(new Opponent2(this.gameScreen, '../images/opponent2.png'))
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
  }

  bossUpdate() {
    this.counter++;

   

    this.opponents.forEach((opponent, index) => {
      if(opponent instanceof FinalBoss) {
        if(this.counter % 50 === 0) {

          if (Math.random() < 0.5) {
              opponent.direction = -1;
          } else {
              opponent.direction = 1;
          }
        }
       
      }
      opponent.move();
      if (opponent.top >= this.gameScreen.offsetHeight - 10) {
        this.opponents.splice(index, 1);
        opponent.element.remove();
      }

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
    if (this.counter % this.generationSpeed === 0 && !this.finalBossGenerate) {
      this.opponents.push(new FinalBoss(this.gameScreen, '/images/final boss.png'));
      this.finalBossGenerate = true;
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
            if(opponent instanceof FinalBoss) {
                console.log('dead')
                this.youWin = true;
            }
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
  }


  shoot() {
    this.player.shoot();
  }
}