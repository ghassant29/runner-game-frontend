socket.on("switch-to-it", () => {
  window.location.href = "game/index.html";
});
const qrImg = document.getElementById("qr-img");
qrImg.addEventListener("click", () => {
  window.location.href = "contols/index.html";
});
