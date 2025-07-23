# Open Source Project 
🏆 Tournament App

A sleek and modern React Native app built with Expo Router, allowing users to browse, join, and create game tournaments. Supports real-time data via Firebase, light/dark themes, and user authentication.


---

📱 Features

🔍 Browse games and tournaments

✨ Light & dark theme support

🔐 Firebase authentication (Anonymous & Email/Password)

🧑‍💼 Create and manage tournaments

📦 Firebase Firestore database

⚡ Real-time updates

📱 Responsive and modern UI with Expo + Tailwind-like styling



---

---


🛠️ Tech Stack

React Native with Expo Router

Firebase (Auth + Firestore)

React Context API for global theming


TypeScript


---

## 📸 App Screenshots

| Splash Screen | White Mode | Search |
|-------------|-----------|-----------------|
| ![Splash](https://github.com/hbbots/esports/blob/main/DEMO/Splash%20Screen.png?raw=true) | ![Light Mode](https://github.com/hbbots/esports/blob/main/DEMO/White%20Mode%20(2).png?raw=true) | ![Search](https://github.com/hbbots/esports/blob/main/DEMO/Search.png?raw=true) |

| Create Tournamnt  |Delete Tournament  | My Tournaments |
|--------------------|-------------------|---------|
| ![Create ](https://github.com/hbbots/esports/blob/main/DEMO/Create%20Tournament%20Page.png?raw=true) | ![Delete](https://github.com/hbbots/esports/blob/main/DEMO/Delete%20Tournament%20Page.png?raw=true) | ![My Tournaments](https://github.com/hbbots/esports/blob/main/DEMO/Mytournaments.png?raw=true) | 

| Login | Register  | Settings |
|--------------------|-------------------|---------|
| ![Login](https://github.com/hbbots/esports/blob/main/DEMO/Login.png?raw=true) | ![Register](https://github.com/hbbots/esports/blob/main/DEMO/Register.png?raw=true) | ![Profile](https://github.com/hbbots/esports/blob/main/DEMO/White%20Mode.png?raw=true) |

| Tournament List  | Tournament Details |  Privacy&Policy |
|-------------|-----------|-----------------|
| ![Tournament List](https://github.com/hbbots/esports/blob/main/DEMO/Tournaments%20list.png?raw=true) | ![Details](https://github.com/hbbots/esports/blob/main/DEMO/Tournaments%20detaisl%20page.png?raw=true) | ![Privacy & Policy ](https://github.com/hbbots/esports/blob/main/DEMO/Privacy%20%26%20POLICY.png?raw=true) |
---


🛠️ Tech Stack

React Native with Expo Router

Firebase (Auth + Firestore)

React Context API for global theming


TypeScript


---

🚀 Getting Started

1. Clone the repository

git clone https://github.com/yourusername/tournament-app.git
cd tournament-app

2. Install dependencies

npm install

3. Start the development server

npx expo start

4. Set up Firebase

Create a Firebase project

Enable Authentication and Firestore

Replace firebaseConfig in /firebaseConfig.ts with your own credentials



---

```bash
📂 Project Structure

app/
  ├── (tabs)/           // Bottom tab screens
  │   ├── Home.tsx
  │   ├── Profile.tsx
  │   ├── Settings.tsx
  ├── games/
  │   ├── index.tsx     // Game list
  │   └── [game].tsx    // Tournaments by game
  ├── tournament/
  │   └── [id].tsx      // Tournament detail page
  ├── CreateTournament.tsx
  ├── Login.tsx
  └── Register.tsx
firebaseConfig.ts
context/
  └── ThemeContext.tsx
```

---

🧑‍💻 Contributing

Contributions are welcome! Feel free to:

Fork the repo

Create a new branch

Submit a pull request


Please open an issue first for any major changes.


---

