class User {
  constructor(mainUser, friends, quote, pokemon, aboutText) {
    this.firstName = mainUser.name.first;
    this.lastName = mainUser.name.last;
    this.city = mainUser.location.city;
    this.state = mainUser.location.state;
    this.picture = mainUser.picture.large;
    this.quote = quote;
    this.pokemon = pokemon;
    this.about = aboutText;
    this.friends = friends.map((f) => ({
      firstName: f.name.first,
      lastName: f.name.last,
    }));
  }
}

export default User;
