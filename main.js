import Controller from "./src/controller/controller.js";

const controller = new Controller();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate-btn").addEventListener("click", () => {
    controller.init();
  });
});
