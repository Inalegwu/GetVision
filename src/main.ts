import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import App from "./App.svelte";
import "./app.css";

const app = new App({
	target: document.getElementById("app"),
});

export default app;
