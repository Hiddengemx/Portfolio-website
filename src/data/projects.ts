import { IProjects } from "./types";

export const projects: IProjects[] = [
  {
    title: "Pomodoro timer",
    description: "Pomodoro timer written with Typescript & Rust",
    url: "https://github.com/CatalystoEyes/Pomodoro-timer",
    technologies: ["Tauri", "React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    title: "Webpack template",
    description: "Webpack template for React and Typescript projects",
    url: "https://github.com/CatalystoEyes/Webpack-template",
    technologies: ["Webpack", "React", "TypeScript", "SCSS", "Babel.js"],
  },
  {
    title: "PasswordWizard",
    description: "Service that generates a random password via bcrypt",
    url: "https://github.com/CatalystoEyes/PasswordWizard",
    technologies: ["Vue", "Express", "Tailwind", "Vite"],
  }
];
