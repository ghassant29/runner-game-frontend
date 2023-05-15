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
