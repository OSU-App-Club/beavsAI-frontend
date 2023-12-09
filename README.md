# BeavsAI - Frontend Hub

## Description

BeavsAI allows you to have conversations with any course. 

The AI assistant will be able to answer course-specific questions about the course. We use syllabi from [here](https://github.com/OSU-App-Club/beavsAI-AI/tree/main/data/syllabus) to make our AI assistants.

Simply add a course from our vector store and start chatting with your new AI assistant!

*Note: Unfortunately, BeavsAI can only answer questions about courses that are in our vector store. We are working on adding more courses to our vector store.*

Additionally, only **OSU students** can use BeavsAI.


## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Contributors](#contributors)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Build Tools](#build-tools)
  - [Libraries and Utilities](#libraries-and-utilities)
  - [Miscellaneous](#miscellaneous)
  - [Clerk (Authentication)](#clerk-authentication)
  - [TypeScript](#typescript)
  - [Code Quality](#code-quality)
- [License](#license)

## Contributors

<a href="https://github.com/OSU-App-Club/beavsAI-frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=OSU-App-Club/beavsAI-frontend" />
</a>



## Installation

1. Clone the repository

```bash
git clone https://github.com/OSU-App-Club/beavsAI-frontend.git
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm run dev
```

## Usage

1. Navigate to `localhost:5173` in your browser
2. Click the Login link in the top right corner
3. Login with your ONID credentials
4. Click the Add Course button
5. Search for a course
6. Click the Add button
7. Start chatting with your new AI assistant!

## Screenshots

### Hero Dark

![Hero-dark](https://cdn.discordapp.com/attachments/1143839263117561946/1182942260044779570/Screen_Shot_2023-12-08_at_11.06.02_PM.png?ex=658687d4&is=657412d4&hm=17a34963e153786f56578766cd3f0f2d62d7afd0658cea0725e8ff5f7a55236b&)

### Hero Light

![Hero-light](https://cdn.discordapp.com/attachments/1143839263117561946/1182942260380315698/Screen_Shot_2023-12-08_at_11.06.17_PM.png?ex=658687d4&is=657412d4&hm=5f7ae0bddb91c6ef88aa3f0f09b63935edaceec686f1ba98edd06d9959b78dc8&)

### Mockup 1 Dark

![mockup1-dark](https://cdn.discordapp.com/attachments/1143839263117561946/1182942261202407434/Screen_Shot_2023-12-08_at_11.06.47_PM.png?ex=658687d5&is=657412d5&hm=c37e6a01f3a0a90b2ab2d2fd0e3e6339ed36399b7d7f7340046e3aac35603419&)

### Mockup 1 Light

![mockup1-light](https://cdn.discordapp.com/attachments/1143839263117561946/1182942260761993296/Screen_Shot_2023-12-08_at_11.06.35_PM.png?ex=658687d4&is=657412d4&hm=6444b62ebef64d280a5d4d21b1f62bea982b83f8c3cfc3018045ec99ee2b43be&)

### Mockup 2 Light

![mockup2](https://cdn.discordapp.com/attachments/1143839263117561946/1182942262401970216/Screen_Shot_2023-12-08_at_11.09.46_PM.png?ex=658687d5&is=657412d5&hm=e3eba97494ed70aa6990346377db9481ad910ed58bbf7d0f88325520263d227f&)

### How to Dark

![how-to-dark](https://cdn.discordapp.com/attachments/1143839263117561946/1182942261563109386/Screen_Shot_2023-12-08_at_11.07.00_PM.png?ex=658687d5&is=657412d5&hm=d46cf51b1986648b24d5257f74aac38616a7ba50184cfa53fa6cba305c4b9cb2&)

### How to Mobile / Light

![how-to-light](https://cdn.discordapp.com/attachments/1143839263117561946/1182942261839929484/Screen_Shot_2023-12-08_at_11.07.20_PM.png?ex=658687d5&is=657412d5&hm=950bce1a4cb9c4e5c981bc87ccb93da4029c94635b38807c49fb8cdd92b5cd5e&)

### Footer Light

![Footer](https://cdn.discordapp.com/attachments/1143839263117561946/1182942262108377118/Screen_Shot_2023-12-08_at_11.07.27_PM.png?ex=658687d5&is=657412d5&hm=4eca5012ad883282e763fed4581f361d73f9b7c148747d11a86bafa2c09475c5&)

# Tech Stack

## Frontend

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Declarative routing for React.js
- [React Query](https://react-query.tanstack.com/) - Hooks for fetching, caching, and updating data
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zustand](https://zustand.surge.sh/) - State management for React

## Build Tools

- [Vite](https://vitejs.dev/) - Fast frontend development server and bundler
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [ESLint](https://eslint.org/) - Pluggable linting utility for JavaScript and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Libraries and Utilities

- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js
- [clsx](https://github.com/lukeed/clsx) - Tiny utility for constructing class names

## Miscellaneous

- [UUID](https://github.com/uuidjs/uuid) - UUID library for JavaScript

## Clerk (Authentication)

- [@clerk/clerk-react](https://clerk.com/docs/quickstarts/react) - Clerk authentication for React applications

## TypeScript

- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

## Code Quality

- [ESLint](https://eslint.org/) - Pluggable linting utility for JavaScript and TypeScript

## License

[MIT License](./LICENSE)
