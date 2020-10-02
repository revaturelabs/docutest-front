# ESLint & Prettier Documentation (AirBnB Style):

### Get Started Working on Angular

To begin you need to download two extensions onto VS Code - Prettier (version 5.7.1) and ESLint (version 2.1.8).

After that simply pulling from master and receiving the latest devDependencies and running `npm install` will have you ready to develop.

### Basic Commands

`ng lint`: This command will read through your local app's files and search for lint errors and warnings and display them in the terminal.

`ng lint --fix`: This command will enable Prettier and ESLint to attempt to correct some of the simpler errors in your files.

**Shortcuts within a file to autoformat**
Mac - Shift+Option+F
Windows - Shift+Alt+F

### Things to consider

You may need to add `/* eslint-disable no-undef */` at the beginning of each component.spec.ts file

You may need to add  `/* eslint-disable max-classes-per-file */` if using multiple classes in a file

