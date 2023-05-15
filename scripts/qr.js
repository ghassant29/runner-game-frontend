socket.on("switch-to-it", () => {
  window.location.href = "game/index.html";
});
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.location.href = "controls/index.html";
});
