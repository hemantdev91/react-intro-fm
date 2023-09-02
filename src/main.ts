import "./style.css";
import { createRoot } from "react-dom/client";
import React from "react";
import Pet from "./pet.ts";

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const pets = [
  { name: "Luna", breed: "Havanese", animal: "Dog" },
  { name: "Pepper", breed: "Cockatiel", animal: "Bird" },
  { name: "Doink", breed: "Mix", animal: "Cat" },
];

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  React.createElement("div", { style: { marginLeft: "15px" } }, [
    React.createElement("h1", {}, "Adopt Me!!!"),
    ...pets.map((pet) => {
      return React.createElement(Pet, { ...pet });
    }),
  ]),
);
