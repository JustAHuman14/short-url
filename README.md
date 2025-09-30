# Project Setup

## Prerequisites
Node.js (v16 or higher recommended)  
npm

## Installation
Clone the repository and install dependencies:

git clone <repo-url>
cd <project-folder>
npm install

## Build
Compile TypeScript and generate Tailwind CSS:

npm run build

This will compile TypeScript files into `dist/` and process Tailwind CSS from `public/input.css` to `public/output.css`.

## Development Mode
For live updates during development, run the following in separate terminals:

npx tailwindcss -i ./public/input.css -o ./public/output.css --watch
tsc --watch