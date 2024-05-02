window.onload = function () {
    const startButton = document.querySelector("#start-button");
    const restartButton = document.querySelector("#restart-button");
    const winButton = document.querySelector("#win-button");

    let game;

    startButton.addEventListener("click", function () {
        startGame();
    });

    restartButton.addEventListener("click", function () {
        restartGame();
    });
    winButton.addEventListener("click", function () {
        restartGame();
    });

    function startGame() {
        game = new Game();
        game.start();
    }

    function restartGame() {
        location.reload();
    }

    function movePlayer(event) {
        switch (event.key) {
            case "ArrowLeft":
                game.player.directionX = -3;
                break;
            case "ArrowRight":
                game.player.directionX = 3;
                break;
            case "ArrowUp":
                game.player.directionY = -3;
                break;
            case "ArrowDown":
                game.player.directionY = 3;
                break;
            case " ":
                game.shoot();
                break;
        }
    }

    window.addEventListener("keydown", movePlayer);

    function stopPlayer() {
        game.player.directionX = 0;
        game.player.directionY = 0;
    }

    window.addEventListener("keyup", stopPlayer);

    /*const music = document.querySelector("#music");
    function playMusic() {
        music.play;
    }
    function pauseMusic() {
        music.pause();
    }
    function adjustVolume() {
        music.volume = volume;
    }

    playMusic();*/
};



    /*cómo hago referencia a las vidas del finalboss para terminar el juego ?¿
    no puedo pasar del update al bossupdate.
    el movimiento del finalboss es raro y se sale de la pantalla.
    los disparos del boss no salen del boss.*/