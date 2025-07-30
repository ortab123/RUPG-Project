import APIManager from "../model/apiManager.js";
import User from "../model/user.js";
import Renderer from "../view/renderer.js";

class Controller {
  constructor() {
    this.apiManager = new APIManager();
    this.renderer = new Renderer();
  }

  async generateUser() {
    const errorDiv = document.getElementById("error-message");
    errorDiv.style.display = "none";

    try {
      const users = await this.apiManager.getUsers();
      const quote = await this.apiManager.getQuote();
      const pokemon = await this.apiManager.getRandomPokemon();
      const about = await this.apiManager.getAboutMe();

      const user = new User(users[0], users.slice(1), quote, pokemon, about);
      this.renderer.render(user);

      document.getElementById("main-user").style.display = "block";
      document.getElementById("friends").style.display = "block";
      document.getElementById("quote").style.display = "block";
      document.getElementById("pokemon").style.display = "block";
      document.getElementById("about-me").style.display = "block";

      document.getElementById("welcome-screen")?.remove();
      document.getElementById("generate-btn").style.display = "block";
    } catch (err) {
      errorDiv.textContent = err.message;
      errorDiv.style.display = "block";
    }
  }

  init() {
    document.getElementById("generate-btn").addEventListener("click", () => {
      this.generateUser();
    });
  }
}

export default Controller;
