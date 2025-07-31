import APIManager from "../model/apiManager.js";
import User from "../model/user.js";
import Renderer from "../view/renderer.js";

class Controller {
  constructor() {
    this.apiManager = new APIManager();
    this.renderer = new Renderer();
    this.currentUserData = null;
  }

  async generateUser() {
    const errorDiv = document.getElementById("error-message");
    errorDiv.style.display = "none";

    try {
      const users = await this.apiManager.getUsers();
      const quote = await this.apiManager.getQuote();
      const pokemon = await this.apiManager.getRandomPokemon();
      const about = await this.apiManager.getAboutMe();

      this.currentUserData = {
        mainUser: users[0],
        friends: users.slice(1),
        quote: quote,
        pokemon: pokemon,
        about: about,
      };

      const user = new User(users[0], users.slice(1), quote, pokemon, about);
      this.renderer.render(user);
      this.updateSavedUsersDropdown();

      document.getElementById("main-user").style.display = "block";
      document.getElementById("friends").style.display = "block";
      document.getElementById("quote").style.display = "block";
      document.getElementById("pokemon").style.display = "block";
      document.getElementById("about-me").style.display = "block";

      document.getElementById("save-user-btn").style.display = "inline-block";
      document.getElementById("saved-users-dropdown").style.display =
        "inline-block";
      document.getElementById("load-user-btn").style.display = "inline-block";

      document.getElementById("welcome-screen")?.remove();
      document.getElementById("generate-btn").style.display = "block";
    } catch (err) {
      errorDiv.textContent = err.message;
      errorDiv.style.display = "block";
    }
  }

  saveCurrentUser() {
    const name = prompt("Choose a name for this user:");
    if (!name) return;

    if (!this.currentUserData) {
      alert("No user to save!");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("users")) || {};
    existing[name] = this.currentUserData;
    localStorage.setItem("users", JSON.stringify(existing));
    this.updateSavedUsersDropdown();
  }

  loadSelectedUser() {
    const name = document.getElementById("saved-users-dropdown").value;
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!name) {
      alert("Please select a user from the dropdown menu before loading.");
      return;
    }

    const userData = users[name];
    if (!userData) {
      alert("The selected user could not be found in local storage.");
      return;
    }

    if (userData) {
      const user = new User(
        userData.mainUser,
        userData.friends,
        userData.quote,
        userData.pokemon,
        userData.about
      );
      this.renderer.render(user);
    }
  }

  updateSavedUsersDropdown() {
    const dropdown = document.getElementById("saved-users-dropdown");
    const users = JSON.parse(localStorage.getItem("users")) || {};
    dropdown.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select a user --";
    dropdown.appendChild(defaultOption);

    Object.keys(users).forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      dropdown.appendChild(option);
    });

    dropdown.style.display = "inline-block";
    document.getElementById("load-user-btn").style.display = "inline-block";
  }

  init() {
    document
      .getElementById("generate-btn")
      .addEventListener("click", () => this.generateUser());
    document
      .getElementById("save-user-btn")
      .addEventListener("click", () => this.saveCurrentUser());
    document
      .getElementById("load-user-btn")
      .addEventListener("click", () => this.loadSelectedUser());
  }
}

export default Controller;
