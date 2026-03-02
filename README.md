## 📘 Project Description

**Franly’s React Social Media** is a streamlined social media application built using the modern web stack:

* **React 18** + **TypeScript**
* **Vite** as the fast build tool and bundler
* **Tailwind CSS** for modern, utility-first styling
* **Firebase** (Authentication, Firestore, Storage) as the backend-as-a-service

### Key Features

1. **User Authentication:** Registration and secure login.
2. **Content Creation:** Create and share text or image-based posts.
3. **Live Timeline:** A main feed displaying the latest posts in real-time.
4. **User Profiles:** Dedicated account pages to view personal profiles and post history.
5. **Responsive UI:** Seamless navigation via a mobile-friendly `Navbar` component.

### Project Structure

```text
src/
 ├─ assets/         ← Static assets (images, icons)
 ├─ components/     ← Reusable UI components (Navbar.tsx, etc.)
 ├─ config/         ← Firebase configuration (firebase.ts)
 ├─ pages/          ← Main application views/routes
 └─ App.tsx, main.tsx, etc.

```

This project serves as an excellent portfolio piece, a learning resource for React + Firebase integration, or a foundation for more complex social media platforms.

---

## ⚙️ Setup & Installation

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Franly-s-React-Social-Media

```

### 2. Install dependencies

```bash
npm install

```

### 3. Create a Firebase Project

* Go to the [Firebase Console](https://console.firebase.google.com/).
* Click **"Add project"** and follow the setup wizard.
* Add a **Web App** (click the `</>` icon) to your project.

### 4. Get your Firebase Configuration

Once the web app is created, Firebase will provide a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

```

### 5. Configure `firebase.ts`

Open `src/config/firebase.ts` and paste your credentials.

```typescript
// src/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

```

> **⚠️ Security Tip**: Avoid committing your actual API keys to GitHub. Use environment variables (`.env`) for production apps.

### 6. Run the development server

```bash
npm run dev

```

### 7. View the App

Open `http://localhost:5173` in your browser to see the application in action.

---

## 📁 Repository Notes

* The `firebase.ts` file in this repository is intentionally left blank or uses placeholders to protect sensitive credentials.
* Always refer to this README for the setup process.
* A `.env.example` file is included as a template if you prefer using environment variables.

---

Would you like me to create the `.env.example` file content for you as well?

Visit this project [here](https://react-social-media-7b56c.web.app/).

![preview](/preview.png)
