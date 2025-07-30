class APIManager {
  async getUsers() {
    const res = await fetch("https://randomuser.me/api/?results=7");
    if (!res.ok) {
      throw new Error("❌ Failed to fetch user data.");
    }
    const data = await res.json();
    return data.results;
  }

  async getQuote() {
    const res = await fetch("https://api.kanye.rest");
    if (!res.ok) {
      throw new Error("❌ Failed to fetch quote.");
    }
    const data = await res.json();
    return data.quote;
  }

  async getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!res.ok) {
      throw new Error("❌ Failed to fetch Pokémon data.");
    }
    const data = await res.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  }

  async getAboutMe() {
    const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
    if (!res.ok) {
      throw new Error("❌ Failed to fetch 'About Me' section.");
    }
    const data = await res.json();
    return data[0];
  }
}

export default APIManager;
