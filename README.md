English | [Español](README.es.md)

# Pipes-app

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)

This is a **learning and practice project** built with Angular to explore and understand how **built-in and custom pipes** work.
The application demonstrates different examples of pipes such as **text transformations, date formatting, and custom pipe implementations**, using reusable UI components and typed datasets.
The goal of this project is to practice Angular concepts like:

- Using built-in pipes
- Creating custom pipes
- Formatting data in templates
- Structuring reusable components
- Working with typed data in Angular applications

## Tech Stack

- Angular 21
- TypeScript
- Tailwind CSS
- daisyUI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Antonio-Borrero/Angular-pipes-app.git
   ```

2. Enter the project folder:
   ```bash
   cd Angular-pipes-app
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Development Server:
   ```bash
   ng serve
   ```

5. Open in browser:
   - Go to `http://localhost:4200/`.
   - The app will automatically reload when any file is modified

## Features

- Built-in Angular pipes
  - `uppercase`
  - `lowercase`
  - `titlecase`
  - `date`
  - `number`
  - `currency`
  - `i18nSelect`
  - `i18nPlural`
  - `json`
  - `keyValue`
  - `slice`
- Custom pipes
  - Toggle case pipe
  - Additional custom pipes
- Table examples using typed datasets
- Reusable card component
- Navigation with a responsive navbar
- Styled with TailwindCSS and DaisyUI

## Learning 

- How Angular pipes work
- Creating custom pipes
- Formatting data in templates
- Organizing reusable UI components
- Using typed datasets with pipes

## Project Structure

```bash
- src/
 ├───app
    ├───components             # Reusable UI components
    │   ├───card
    │   └───navbar
    ├───data                   # Example datasets used in pipe demonstrations
    ├───interfaces             # TypeScript interfaces and types
    ├───pages                  # Application pages
    │   ├───basic-page
    │   ├───custom-page
    │   ├───numbers-page
    │   └───uncommon-page
    ├───pipes                  # Custom Angular pipes
    └───services               # Application services
```

## Build

To build the production version:

```bash
ng build
```
