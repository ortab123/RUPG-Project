# 🌀 RUPG – Random User Profile Generator

An interactive profile generator that fetches random user data from multiple public APIs. With a single click, it displays a complete profile: user info, friends, a Kanye quote, favorite Pokémon, and a fun "About Me" paragraph.

---

## 🚀 Features

- Integrates with **four external APIs**:
  - [Random User Generator](https://randomuser.me/)
  - [Kanye Rest API](https://api.kanye.rest/)
  - [PokeAPI](https://pokeapi.co/)
  - [Bacon Ipsum API](https://baconipsum.com/)
- Clean and modern UI.
- Save users to `localStorage`.
- Load saved users via a dropdown menu.
- Capitalized Pokémon names using a simple built-in function.
- Modular architecture based on **MVC (Model-View-Controller)**.
- Clean, well-structured, and easily extendable codebase.

---

## 📁 Project Structure

```
rupg-project/
├── index.html
├── main.js
├── style.css
├── src/
│ ├── model/
│ │ ├── user.js
│ │ └── apiManager.js
│ ├── view/
│ │ └── renderer.js
│ ├── controller/
│ │ └── controller.js
```

---

## 🛠️ Technologies Used

- Vanilla JavaScript (ES6+)
- HTML5 & CSS3
- Modular MVC structure
- `fetch` API with async/await
- DOM manipulation
- `localStorage` for persistent user saving

---

## ▶️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rupg-project.git
   Open index.html in your browser (no server needed).
   ```

Click "Generate User" to fetch and display a random profile.

Use the "Save" and "Load" buttons to store and retrieve users from your browser's localStorage.

✅ Extra Features Implemented
1.Capitalize Pokémon name using a custom capitalize() function.
2.Store multiple users in localStorage with unique keys.
3.Load users from a dynamic dropdown menu.
4.Full error handling and fallback UI for API failures.
5.Neat1 and modular folder structure for scalability.

📝 Notes
1.This project runs fully on the client-side – no backend required.
2.APIs used are all public and do not require authentication.
3.You can easily add more APIs or extend the profile content.
