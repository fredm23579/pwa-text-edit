
  <div align="center">
  <h1 align="center">PWA Text Editor</h1>
  <h3>Codebase for the pwa-text-edit platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=for-the-badge" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=for-the-badge" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-npm%20%20Node%20Package%20Manager%20-004E89?logo=npm%20%20Node%20Package%20Manager%20&style=for-the-badge" alt='npm (Node Package Manager)\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-concurrently-004E89?logo=concurrently&style=for-the-badge" alt='concurrently\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-nodemon-004E89?logo=nodemon&style=for-the-badge" alt='nodemon"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Description](#-description)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [   Repo Link](#-repo-link) 
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Description

 This project is a full-stack web application with a client and server directory structure. The client directory contains the frontend code, while the server directory contains the backend code. The project uses Node.js and Express.js for the server, and React for the client. The project also includes a webpack configuration file for building the client-side code.

---

## 🌟 Features

 Full-stack web application, PWA, Node.js, Express.js, webpack, frontend, backend, client-side, server-side, directory structure, package.json, server, routes, htmlRoutes.js, server.js

---

## 📁 Repository Structure

```sh
├── .gitignore
├── .npmrc
├── client
│   ├── .eslintrc
│   ├── .gitignore
│   ├── favicon.ico
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── css
│   │   │   └── style.css
│   │   ├── images
│   │   │   └── logo.png
│   │   └── js
│   │       ├── database.js
│   │       ├── editor.js
│   │       ├── header.js
│   │       ├── index.js
│   │       └── install.js
│   ├── src-sw.js
│   └── webpack.config.js
├── package.json
└── server
    ├── package.json
    ├── routes
    │   └── htmlRoutes.js
    └── server.js

```

---

##    Repo Link

- [Link](https://github.com/fredm23579/pwa-text-edit)

## 💻 Code Summary

<details><summary>\client\src\js</summary>

| File | Summary |
| ---- | ------- |
| database.js |  The code initializes an IndexedDB database called jate and provides methods for adding and retrieving data from the database. |
| editor.js |  The code defines a class that initializes a CodeMirror editor and sets its value to the content of IndexedDB or localStorage, with a fallback to a default header. It also listens for changes to the editor's value and saves it to localStorage when the editor loses focus. |
| header.js |  The code defines a constant variable `header` that stores a string containing a header for a text editor, with the purpose of being exported for use in other parts of the program. |
| index.js |  The code initializes an editor instance and sets its content from a database, using a spinner to indicate loading. It also registers a service worker for offline support. |
| install.js |  The code adds an event listener to the `beforeinstallprompt` event, which is triggered when a user attempts to add a PWA to their home screen. It also adds a click event listener to an element with the ID buttonInstall that shows the install prompt and logs the user's response to the install prompt. |

</details>

---

<details><summary>\client</summary>

| File | Summary |
| ---- | ------- |
| src-sw.js |  The code defines a service worker that caches pages, assets, and images using Workbox libraries. It pre-caches the app's assets and routes requests to the appropriate cache based on the request mode and destination. |
| webpack.config.js |  The code defines a Webpack configuration file for a Progressive Web App (PWA) that generates an HTML file, injects a custom service worker, and generates a manifest file. |

</details>

---

<details><summary>\server\routes</summary>

| File | Summary |
| ---- | ------- |
| htmlRoutes.js |  The code exports a function that sets up a route for the root URL ('/') and sends an HTML file located in the '../client/dist' directory as a response. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code sets up an Express.js server on port 3000 and serves static files from the ../client/dist directory, as well as parsing URL-encoded and JSON data using middleware functions. |

</details>

---

## 🚀 Getting Started

 To get started with this project, follow these steps:<br>

```bash 
git clone https://github.com/fredm23579/pwa-text-edit.git

```

1. Install the necessary dependencies by running `npm install` in both the client and server directories.
2. Start the development server by running `npm run start:dev` in the root directory. This will start both the client and server development servers simultaneously.
3. In a separate terminal window, navigate to the client directory and start the client development server by running `npm run client`.
4. Open your web browser and navigate to `http://localhost:3000` to view the application.
5. Make changes to the code as needed, and the client and server development servers will automatically reload the application with the latest changes.
6. When you are ready to build the application for production, run `npm run build` in the client directory to generate a production-ready bundle of JavaScript files.
7. Copy the contents of the `client/build` directory to the `server/public` directory.
8. Start the production server by running `npm run start` in the root directory. This will start the server and serve the application on `http://localhost:5000`.

That's it! You should now have a fully functional full-stack web application using Node.js, Express.js, React, and Webpack.


