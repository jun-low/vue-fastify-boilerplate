# vue-fastify-boilerplate

Vue.js + Fastify SSR boilerplate with Vite and ESLint 🔬

This is a starter project that I'm experimenting with, combining Vue.js for the client-side, Fastify for the server-side, Vite for a fast and efficient development environment, and ESLint for code linting and formatting.

## Getting Started
Clone this repository:

```
git clone https://github.com/jun-low/vue-fastify-boilerplate.git
```

Change into the project directory:
```
cd vue-fastify-starter
```

Install the dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```
This will start the Fastify server and the Vite development server, and the application will be accessible at `http://localhost:3000`.

### Development Workflow
Developing the client-side: When you run npm run dev, Vite will start a development server and watch for changes in your Vue.js components, styles, and client-side JavaScript files. The browser will automatically refresh (hot-reload) when you save changes.

Developing the server-side: Fastify will handle the server-side rendering (SSR) of your Vue.js application. If you make changes to the server-side code (e.g., the Fastify routes), the server will automatically restart.

## Building and Deploying
Build the application:

```
npm run build
```

Start the production server:
```
npm start
```
This will start the Fastify server in production mode, serving the pre-built assets from the dist folder.

## Tech

- [Vue.js](https://vuejs.org/): A popular and powerful JavaScript framework for building user interfaces.
- [Fastify](https://fastify.dev/): A fast and low-overhead web framework for Node.js, used for the server-side rendering (SSR).
- [Vite](https://vitejs.dev/): A modern and fast build tool that provides an excellent development experience.
- [ESLint](https://eslint.org/): A pluggable linting utility for JavaScript and Vue.js that helps maintain code quality and consistency.
 
