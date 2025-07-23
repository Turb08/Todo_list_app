# Todo-list-app

A React + Vite Progressive Web App (PWA) for a personal todo list that works offline and can be installed like a native app.


## Project Structure

Todo_list_app
├─ bin
│  └─ cli.js
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ public
│  ├─ icons
│  │  └─ to-do-list.png
│  └─ vite.svg
├─ README.md
├─ run-todo.sh
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ CustomForm.jsx
│  │  ├─ EditForm.jsx
│  │  ├─ TaskItem.jsx
│  │  ├─ TaskItem.module.css
│  │  ├─ TaskList.jsx
│  │  └─ TaskList.module.css
│  ├─ hooks
│  │  └─ useLocalStorage.jsx
│  ├─ index.css
│  └─ main.jsx
└─ vite.config.js


## Prerequisites

* Node.js v14+ (includes npm)
* pnpm (or npm)
* Modern browser with PWA support (Chrome, Edge, Firefox)
* Git (for clone workflow)

##  Quick Start

Choose one of the following methods:

### 1. One-liner (no clone)

```bash
curl -fsSL https://raw.githubusercontent.com/Turb08/Todo_list_app/main/run-todo.sh | bash
```

### 2. Clone + Bash script (macOS/Linux/Git Bash)

```bash
git clone https://github.com/Turb08/Todo_list_app.git
cd Todo_list_app
chmod +x run-todo.sh   # if needed
./run-todo.sh
```

### 3. Clone + Batch script (Windows)

```powershell
git clone https://github.com/Turb08/Todo_list_app.git
cd Todo_list_app
.\run-todo.bat
```

### 4. NPX CLI (no local files)

```bash
npx turb-todo-list-app
```

### 5. Global CLI (after `npm install -g` or `npm link`)

```bash
turb-todo-list-app
```

### 6. Vite Preview (manual build & serve)

```bash
pnpm install       # once
pnpm run build     # generate dist/
pnpm run preview   # serves at http://localhost:4173
```

### 7. Dev Mode (with hot reload)

```bash
pnpm install
pnpm run dev       # serves at http://localhost:5173
```

All commands will start the PWA at [http://localhost:4173](http://localhost:4173). Open that URL in your browser and click “Install” to add it as a standalone app.

## 📦 Build & Install as a PWA

After development, follow these steps to install the PWA:

1. **Build**

   ```bash
   pnpm install
   pnpm run build
   ```
2. **Serve**

   ```bash
   pnpm run preview   # or ./run-todo.sh
   ```
3. **Install**

   * In Chrome/Edge, visit the URL, click the “Install” icon in the address bar, or menu → *Install My Todo List*.
   * On Windows: Pin via Edge (Apps → Install this site as an app) for a custom icon, or create a shortcut (see below).

### Optional: Native Shortcut (Windows)

1. Create a Desktop shortcut targeting:

   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:4173
   ```
2. Right-click → Properties → Change Icon → point to `/public/icons/to-do-list.png`.
3. Pin to taskbar.

## 🔄 Updates & Offline

* **Offline**: After install, works without internet. No terminal needed.
* **Update**: Re-run build (`pnpm run build`), then reload the app. The service worker auto-updates assets.

