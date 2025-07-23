## 📦 Build & Install as a PWA

Once you’ve finished working on the project, follow these steps to turn it into a standalone Progressive Web App:

### 1. Build the Production Bundle  
```bash
# Install dependencies (if you haven’t already)
pnpm install

# Build your app
pnpm run build
This outputs a fully static bundle into dist/.

2. Serve the dist/ Folder Locally
You need a local HTTP server so the PWA manifest and service worker can register properly. You can use Vite’s built-in preview or any static server:

bash
Copy
Edit
# Option A: Vite preview (no extra install)
pnpm run preview
# → serves at http://localhost:4173 by default

# Option B: http-server (install if needed)
pnpm add -D http-server
npx http-server dist
# → serves at http://localhost:8080 by default
Open the served URL in your browser (e.g. http://localhost:4173).

3. Fresh Start (Optional but Recommended)
If you’ve previously installed/registered the PWA during development, clear the old service worker and cache so you get the latest icons & code:

Open DevTools (F12) → Application → Service Workers → Unregister

In Application → Clear storage → click Clear site data

4. Install the App to Your Machine
Chrome / Edge on Desktop
Visit your app URL (e.g. http://localhost:4173).

Look for the Install icon in the address bar (a “+” or computer-phone icon), or open the browser menu → Install My Todo List.

Or, if you wish to have your own icon in the desktop since chrome stores it's own chrome hosted window image, 
you can use Microsoft Edge to install PWA and configure your preferred icon.

If you already have Edge:

 http://localhost:4173 in Edge.

Click the “... → Apps → Install this site as an app.”

Go to Start Menu, find your “My Todo List” entry, right-click → Pin to Taskbar.

Now you should see your proper icon on the taskbar.

Your PWA will launch in its own window and appear in your OS’s Start menu / Applications.



But if you prefer to use Chrome, refer to this task below ->

Tip (Chrome): Chrome’s taskbar pin will still show the Chrome icon. If you want your custom icon there, you can create a manual Windows shortcut (see below).

5. (Optional) Create a Native-Style Shortcut with Your Icon
If you want a true desktop shortcut (so your icon appears in the taskbar):

Create a .lnk shortcut on your Desktop:

Target:

arduino
Copy
Edit
"C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:4173
Right-click the shortcut → Properties → Change Icon → point to one of your /public/icons/icon-512.png (Windows will convert it).

Pin that shortcut to your taskbar.

6. Usage & Updates
Offline: After first load + install, the app works offline—no terminal needed.

Updates: Whenever you rebuild (pnpm run build), the service worker will fetch the new assets on next launch/reload.

Enjoy your very own installable, offline-first Todo List PWA! 🚀


```
Added project Tree for a brief understanding of project structure

Todo-list-app
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ public
│  ├─ icons
│  │  ├─ checklist.png
│  │  ├─ checktasks.png
│  │  └─ to-do-list.png
│  └─ vite.svg
├─ README.md
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