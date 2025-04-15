# Senior SWE (Front-End Web) Example Project

This is an example project for the Senior SWE Front-End Web roles at Internet2.edu, built by Scott Shannon.

## Hosting

The app is deployed to Netlify here: https://beautiful-naiad-4bf836.netlify.app/

## Process

This is the process I went through when building out this project. I began at 10am on Monday, April 14.

1. Examined the requirements document.
    - Research [CodeMirror](https://codemirror.net)
    - Research [Carbon Design System](https://carbondesignsystem.com/)
    - Layout seemed straightfoward, so I decided to implement CDS from the start.
2. Created the Vue app (`npm create vue@latest`) with `Vue Router`
    - Added Carbon Design System (CDS) and CodeMirror 6 as dependencies.
    - Cleaned up the default Vue files into starter files for this project.
      - I wouldn't normally use global CSS files for such a small app, but I wanted to show a little bit of structure if this were part of something larger.
      - Set up the routes (`/` and `/yaml-editor`)
      - Created an AppHeader.vue component
3. Implemented AppHeader component using CDS.
    - Only hiccup here was deciding how much to get into CDS with it. For the AppHeader, I decided to use as much as I could.
    - CDS responsiveness kept hiding the navigation on smaller screens, so I opted to disable that with some override CSS, since the navigation will fit on a mobile device anyway.
    - `CvHeaderMenuItem` doesn't appear to use Vue Router to determine it's `active` state, so I had to implement that manually. Not ideal.
4. Implemented the Home page.
    - Opted to use Flex to handle the layout of the content area. 
5. Implemented the YAML editor page with a basic editor setup.
    - Installed a YAML language package for CodeMirror. This appears to have support built-in for basic syntax highlighting. Potential room for improvement on this.
    - Added support for tab indentation.
    - Added linting using the `js-yaml` package
      - The `onWarning` callback function didn't seem to work, so it's only catching the first error thrown by the `load` method.
    - Added some basic autocomplete suggestions.
      - I used the YAML in the wireframe as a guide for the suggestions. I would more likely use an expected schema to provide better autocomplete suggestions.
      - I'm also considering looking into making it dynamic, based on past values entered into the editor, but without knowing a schema, that could be much more complex.
6. Fine-tuning of some CSS and some comments.

Total Dev Time: About 6.5 hours.
There was some additional time I didn't count just learning the basics of CodeMirror and Carbon Design System.

## Known Issues / Enhancements
- I would like to add better syntax highlighting. The settings that come with `@codemirror/lang-yaml` seems pretty minimal. There appears to be a `legacy-modes` package that uses language setup from CodeMirror 5, but I opted not to dig further at this time.
- There is a known bug where `js-yaml` returns a position for an error that is greater than the length of the content (e.g. "RangeError: Invalid position 16 in document of length 15"). The editor still functions, but doesn't catch the JS error. 

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
