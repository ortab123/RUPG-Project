import APIManager from "../model/apiManager.js";
import User from "../model/user.js";
import Renderer from "../view/renderer.js";

class Controller {
  constructor() {
    this.apiManager = new APIManager();
    this.renderer = new Renderer();
  }

  async init() {
    const users = await this.apiManager.getUsers();
    const quote = await this.apiManager.getQuote();
    const pokemon = await this.apiManager.getRandomPokemon();
    const about = await this.apiManager.getAboutMe();

    const user = new User(users[0], users.slice(1), quote, pokemon, about);

    this.renderer.render(user);
  }
}

export default Controller;
