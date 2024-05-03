class Objects {
    constructor(gameScreen, img) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 700);
        this.top = 0;
        this.height = 50;
        this.width = 50;

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

class ExtraLive extends Objects {
    constructor(gameScreen, img) {
        super(gameScreen, img);
    }

    catch(player) {
        const playerRect = player.element.getBoundingClientRect();
        const objectRect = this.element.getBoundingClientRect();
        if (
            playerRect.left < objectRect.right &&
            playerRect.right > objectRect.left &&
            playerRect.top < objectRect.bottom &&
            playerRect.bottom > objectRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }
   
}

class PlusScore extends Objects {
    constructor(gameScreen, img) {
        super(gameScreen, img);
    }

    catch(player) {
        const playerRect = player.element.getBoundingClientRect();
        const objectRect = this.element.getBoundingClientRect();
        if (
            playerRect.left < objectRect.right &&
            playerRect.right > objectRect.left &&
            playerRect.top < objectRect.bottom &&
            playerRect.bottom > objectRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }
    
}

class Alien extends Objects {
    constructor(gameScreen, img) {
        super(gameScreen, img);
    }

    catch(player) {
        const playerRect = player.element.getBoundingClientRect();
        const objectRect = this.element.getBoundingClientRect();
        if (
            playerRect.left < objectRect.right &&
            playerRect.right > objectRect.left &&
            playerRect.top < objectRect.bottom &&
            playerRect.bottom > objectRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }
}
