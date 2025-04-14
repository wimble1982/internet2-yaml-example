# Senior SWE (Front-End Web) Example Project

This is an example project for the Senior SWE Front-End Web roles at Internet2.edu, built by Scott Shannon.

## Process

This is the process I went through when building out this project. I began at 10am on Monday, April 14.

1. Examine the requirements document.
  - Research [CodeMirror](https://codemirror.net)
  - Research [Carbon Design System](https://carbondesignsystem.com/)
2. Create the Vue app (`pnpm create vue@latest`) with `Vue Router`
  - Add Carbon Design System (CDS) and CodeMirror as dependencies.
  - Cleaned up the default Vue files into starter files for this project.
    - Setting up the routes
    - Created an AppHeader.vue component
3. Implement AppHeader component using CDS.
4. Implement Home page.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
