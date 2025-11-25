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
npm install -D tailwindcss@3 postcss autoprefixer
```

### 2️⃣ Create Tailwind Config File
```bash
npx tailwindcss init -p
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

---

## 🔌 Additional Plugins & Dependencies
Install commonly used packages:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

---