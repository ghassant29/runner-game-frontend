const btnPlay = document.querySelector(".play-btn");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const upBtn = document.querySelector(".up");
btnPlay.addEventListener("click", () => {
  console.log("hello");
  socket.emit("switch-to-game");
});
rightBtn.addEventListener("click", () => {
  socket.emit("right");
});
leftBtn.addEventListener("click", () => {
  socket.emit("left");
});
upBtn.addEventListener("click", () => {
  socket.emit("up");
});
socket.on("game-over", () => {
  window.location.href =
    "https://cdn3.whatculture.com/images/2019/09/cb26e1358ff928f7-600x338.jpg";
});
