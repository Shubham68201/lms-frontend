# LMS Frontend

## 📦 Setup Instructions

### 1️⃣ Clone the Project
```bash
git clone https://github.com/singhsanket143/lms-frontend-hn.git
```

### 2️⃣ Move Into the Directory
```bash
cd lms-frontend-hn
```

### 3️⃣ Install Dependencies
```bash
npm i
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```

---

## 🎨 TailwindCSS Setup

📄 *Follow official TailwindCSS documentation*

### 1️⃣ Install TailwindCSS
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2️⃣ Create Tailwind Config File
```bash
npx tailwindcss init
```

### 3️⃣ Add File Extensions to `content` in `tailwind.config.js`
```js
content: [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./index.html",
],
```

### 4️⃣ Add Tailwind Directives to `index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5️⃣ Add Plugins in `tailwind.config.js`
```js
plugins: [
  require("daisyui"),
  require("@tailwindcss/line-clamp")
];
```

---

## 🔌 Additional Plugins & Dependencies
Install commonly used packages:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

---

## ⚙️ ESLint Auto Import Sort Setup

### Install Simple Import Sort Plugin
```bash
npm i -D eslint-plugin-simple-import-sort
```

### Add Rule in `.eslint.cjs`
```js
'rules': {
  'simple-import-sort/imports': 'error',
}
```

### Add Plugin in `.eslint.cjs`
```js
plugins: [
  // ...other plugins
  'simple-import-sort'
]
```

---

## 💾 Enable Auto Import Sorting in VS Code

### Open `settings.json` in VSCode  
Add:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

---