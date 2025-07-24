# Todo-list-app

A React + Vite Progressive Web App (PWA) for a personal todo list that works offline and can be installed like a native app.


## Project Structure
```
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
```

## Prerequisites

* **Node.js** v14+ (includes `npm`/`npx`)
* **pnpm** (or `npm`) for package scripts
* **Git** (for clone workflows)
* **Docker Desktop** (if using Docker)
* A **modern browser** (Chrome, Edge, Firefox) with PWA support


## Quick Reference: All Access Methods to:
## 📦 Build & Install as a PWA

### 1. Development Mode (Hot Reload)

```bash
pnpm install        # (or npm install)
pnpm run dev        # serves at http://localhost:5173
```

---

### 2. Build & Preview Locally (Production Bundle)

```bash
pnpm install
pnpm run build      # generates dist/
pnpm run preview    # serves at http://localhost:4173
```

---

### 3. GitHub Pages (Static Hosting)

In `package.json`, add:

```json
"homepage": "https://Turb08.github.io/Todo_list_app",
"scripts": {
  "predeploy": "pnpm run build",
  "deploy":   "gh-pages -d dist"
}
```

Then:

```bash
git push
pnpm run deploy
```

Visit and install:

```
https://Turb08.github.io/Todo_list_app/
```

Click the browser **Install** icon.

---

### 4. NPX CLI (No Local Files)

```bash
npx turb-todo-list-app   # pulls from npm@latest, serves at port 4173
```

---

### 5. Global or Linked CLI

```bash
npm install -g turb-todo-list-app  # or use npm link inside the project
turb-todo-list-app                # serves at port 4173
```

---

### 6. One-liner Bash Script (No Clone)

```bash
curl -fsSL https://raw.githubusercontent.com/Turb08/Todo_list_app/main/run-todo.sh | bash
```

---

### 7. Clone + Bash Script (macOS/Linux/Git Bash)

```bash
git clone https://github.com/Turb08/Todo_list_app.git
cd Todo_list_app
chmod +x run-todo.sh   # if needed
./run-todo.sh
```

---

### 8. Clone + Batch Script (Windows)

```powershell
git clone https://github.com/Turb08/Todo_list_app.git
cd Todo_list_app
.\run-todo.bat
```

---

### 9. Docker (Root-Based Build, No Prefix)

```bash
docker pull sharehhhn18/todo-list-app:root
docker run -it --rm -p 4173:80 sharehhhn18/todo-list-app:root
# browse to http://localhost:4173
```

---

### 10. Docker (GitHub-Pages Base)

```bash
docker pull sharehhhn18/todo-list-app:latest
docker run -it --rm -p 4173:80 sharehhhn18/todo-list-app:latest
# browse to http://localhost:4173/Todo_list_app/
```

---

## Ports & URLs Summary

| Method                      | URL/Port                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------ |
| Dev Mode                    | [http://localhost:5173](http://localhost:5173)                                       |
| Prod Preview / CLI / Docker | [http://localhost:4173](http://localhost:4173)                                       |
| GitHub Pages                | [https://Turb08.github.io/Todo\_list\_app/](https://Turb08.github.io/Todo_list_app/) |

---

After development, follow these steps to install the PWA:

**Install**

   * In Chrome/Edge, visit the URL, click the “Install” icon in the address bar, or menu → *Install My Todo List*.
   * On Windows: Pin via Edge (Apps → Install this site as an app) for a custom icon, or create a shortcut (see below).

### Optional: Native Shortcut (Windows)

1. Create a Desktop shortcut targeting:

   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:4173
   ```
2. Right-click → Properties → Change Icon → point to `/public/icons/to-do-list.png`.
3. Pin to taskbar.

---

## 🔄 Updates & Offline

* **Offline support:** After installing the PWA, the app works without any server or terminal running.
* **Auto-update:** Rebuild (`pnpm run build`) and the service worker will fetch new assets on next reload.
* All commands will start the PWA at [http://localhost:4173](http://localhost:4173). Open that URL in your browser and click “Install” to add it as a standalone app.

---

Keep this README handy and pick the method that fits your setup. Make better uss of this offline-first Todo List PWA! 
