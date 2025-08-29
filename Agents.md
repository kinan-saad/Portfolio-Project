# AGENTS.MD

This file provides instructions for AI agents working on this project.

## Project Overview

This is a portfolio website built with React and Vite. It showcases my projects, skills, and experience.

## Setup and Installation

To set up the project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Building the Project

To create a production build, run:

```bash
npm run build
```
The output will be in the `dist` directory. You can preview the production build with `npm run preview`.

## Linting and Code Style

This project uses ESLint to enforce code style and quality.

*   **Run the linter:**
    ```bash
    npm run lint
    ```
*   **Configuration:** The ESLint configuration is in `eslint.config.js`.
*   **Style:** Please follow the existing coding style. The project uses standard React and JavaScript conventions.

## Testing

There are currently no automated tests in this project. When adding new features, please consider adding corresponding tests.

## Pull Request Guidelines

Before submitting a pull request, please ensure that:
1.  The code lints without errors (`npm run lint`).
2.  The project builds successfully (`npm run build`).
3.  The changes are consistent with the project's architecture and coding style.
