class Renderer {
  render(user) {
    this._renderMainUser(user);
    this._renderFriends(user.friends);
    this._renderQuote(user.quote);
    this._renderPokemon(user.pokemon);
    this._renderAbout(user.about);
  }

  _renderMainUser(user) {
    const mainDiv = document.getElementById("main-user");
    mainDiv.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>${user.city}, ${user.state}</p>
        <img src="${user.picture}" alt="User Picture"/>`;
  }

  _renderFriends(friends) {
    const friendsDiv = document.getElementById("friends");
    friendsDiv.innerHTML =
      "<h3>Friends:</h3><ul>" +
      friends.map((f) => `<li>${f.firstName} ${f.lastName}</li>`).join("") +
      "</ul>";
  }

  _renderQuote(quote) {
    const quoteDiv = document.getElementById("quote");
    quoteDiv.innerHTML = `
    <h3>Favorite Quote:</h3>
    <blockquote>"${quote}"<br><em>- Kanye West</em></blockquote>`;
  }

  _renderPokemon(pokemon) {
    const pokeDiv = document.getElementById("pokemon");
    pokeDiv.innerHTML = `
      <h3>Favorite Pokemon: ${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}" />
    `;
  }

  _renderAbout(text) {
    const aboutDiv = document.getElementById("about-me");
    aboutDiv.innerHTML = `
      <h3>About Me</h3>
      <p>${text}</p>
    `;
  }
}

export default Renderer;
