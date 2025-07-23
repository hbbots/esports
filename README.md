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

## 📸 App Screenshots

| Home Screen | Dark Mode | Tournament List |
|-------------|-----------|-----------------|
| ![Home](https://github.com/hbbots/esports/blob/main/DEMO/home.png?raw=true) | ![Dark](https://github.com/hbbots/esports/blob/main/DEMO/dark.png?raw=true) | ![Tournaments](https://github.com/hbbots/esports/blob/main/DEMO/tournaments.png?raw=true) |

| Tournament Details | Create Tournament | Profile |
|--------------------|-------------------|---------|
| ![Details](https://github.com/hbbots/esports/blob/main/DEMO/detail.png?raw=true) | ![Create](https://github.com/hbbots/esports/blob/main/DEMO/create.png?raw=true) | ![Profile](https://github.com/hbbots/esports/blob/main/DEMO/profile.png?raw=true) |

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

