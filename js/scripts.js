const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".game-over-text");
const scoreText = document.querySelector(".score");

let score = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudsPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "85px";
    mario.style.marginLeft = "40px";

    gameOver.innerHTML = "Game Over";
    gameOver.style.display = "block";
    gameOver.style.position = "absolute";
    gameOver.style.top = "50%";
    gameOver.style.left = "50%";
    gameOver.style.transform = "translate(-50%, -50%)";
    gameOver.style.fontSize = "3rem";
    gameOver.style.color = "red";
    gameOver.style.fontFamily = "Calibri";

    clearInterval(loop);
  } else if (pipePosition < 0) {
    score += 1;
    scoreText.textContent = `Score: ${score}`;
  }
}, 10);

document.addEventListener("keydown", jump);
