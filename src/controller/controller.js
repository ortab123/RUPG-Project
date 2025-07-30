import APIManager from "../model/apiManager.js";

class Controller {
  constructor() {
    this.apiManager = new APIManager();
  }

  async init() {
    const users = await this.apiManager.getUsers();
    const quote = await this.apiManager.getQuote();
    const pokemon = await this.apiManager.getRandomPokemon();
    const about = await this.apiManager.getAboutMe();

    console.log("Main User:", users[0]);
    console.log("Friends:", users.slice(1));
    console.log("Quote:", quote);
    console.log("Pokemon:", pokemon);
    console.log("About Me:", about);
  }
}

export default Controller;
