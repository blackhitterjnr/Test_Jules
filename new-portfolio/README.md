# Modern Portfolio Website

A responsive single-page portfolio website built with HTML, SCSS, Bootstrap, and Parcel. Features include reveal-on-scroll animations and a clean, modern design.

## Features

*   Modern UI Design with Reveal Animations
*   One-Page Layout (Hero, About, Projects, Contact)
*   Fully Responsive Design
*   Built with Bootstrap 5 and custom SCSS
*   Optimized with Parcel bundler
*   Dynamic year update in footer
*   Easy to customize

## Project Structure

```
new-portfolio/
├── src/
│   ├── index.html       # Main HTML file
│   ├── scss/
│   │   └── main.scss    # Main SCSS file (imports Bootstrap and custom styles)
│   └── js/
│       └── app.js       # Main JavaScript file (includes ScrollReveal init & dynamic year)
├── .gitignore           # Specifies intentionally untracked files
├── package.json         # Project dependencies and npm scripts
├── package-lock.json    # Records exact versions of dependencies
├── README.md            # This file
├── .parcel-cache/       # Parcel's cache directory (gitignored)
├── dist/                # Production build output (gitignored)
└── node_modules/        # Project dependencies (gitignored)
```

## Prerequisites

*   Node.js and npm (Node Package Manager) - [Download Node.js](https://nodejs.org/)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/new-portfolio.git
    ```
    (Replace `<repository-url>` with your actual repository URL if available)

2.  **Navigate to the project directory:**
    ```bash
    cd new-portfolio
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Development Server

1.  **Start the development server:**
    ```bash
    npm start
    ```
2.  This will open the project in your default browser, typically at `http://localhost:1234`.
3.  Changes to files in the `src/` directory (HTML, SCSS, JS) will trigger an automatic reload in the browser.

## Building for Production

1.  **Build the optimized static files:**
    ```bash
    npm run build
    ```
2.  The production-ready files will be generated in the `dist/` directory. These files can then be deployed to any static web hosting service.

## Customization

*   **Content:** Edit the HTML markup in `src/index.html` to change text, images, project details, etc.
*   **Styles:**
    *   Modify custom SCSS rules or add new ones in `src/scss/main.scss`.
    *   Customize Bootstrap by overriding its SCSS variables. You can define Bootstrap variables (e.g., `$primary`, `$body-bg`) at the top of `src/scss/main.scss` before the `@import "~bootstrap/scss/bootstrap";` line.
*   **Animations:** Adjust ScrollReveal settings (e.g., duration, delay, distance) in `src/js/app.js` within the `sr.reveal()` calls or the default configuration.
*   **Contact Information:** Update placeholder email addresses and links in `src/index.html`.
```
