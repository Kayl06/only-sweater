import "./index.css";
import "./assets/fonts/Hiragino Mincho Pro W6.otf";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(el);

root.render(<App />);
