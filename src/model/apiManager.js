class APIManager {
  async getUsers() {
    const res = await fetch("https://randomuser.me/api/?results=7");
    const data = await res.json();
    return data.results;
  }

  async getQuote() {
    const res = await fetch("https://api.kanye.rest");
    const data = await res.json();
    return data.quote;
  }

  async getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await res.json();
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  }

  async getAboutMe() {
    const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
    const data = await res.json();
    return data[0];
  }
}

export default APIManager;
