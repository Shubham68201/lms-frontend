# LMS Frontend

## 📦 Setup Instructions

### 1️⃣ Clone the Project

```bash
git clone https://github.com/Shubham68201/lms-frontend.git
```

### 2️⃣ Move Into the Directory

```bash
cd lms-frontend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

---

## 🎨 TailwindCSS Setup

### 1️⃣ Install TailwindCSS

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

### 2️⃣ Create Tailwind Config File

```bash
npx tailwindcss init
```

### 3️⃣ Configure `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
};
```

### 4️⃣ Add Tailwind Directives in `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 💜 Additional Dependencies

```bash
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

---

## ⚙️ ESLint + Auto Import Sort Setup

### 1️⃣ Install Simple Import Sort Plugin

```bash
npm i -D eslint-plugin-simple-import-sort
```

### 2️⃣ Configure ESLint (Flat Config)

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

---

## �� Enable Auto Import Sorting in VS Code

Add this to your `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "eslint.alwaysShowStatus": true
}
```

> ⚠️ Make sure the ESLint extension is installed and enabled in VS Code.

---

## 🔧 Notes

* ESLint + simple-import-sort will automatically reorder imports on save.
* Tailwind + DaisyUI is configured with `line-clamp` support.
* Run `npm run lint` to check ESLint issues manually.
* Run `npm run build` to create a production build.
