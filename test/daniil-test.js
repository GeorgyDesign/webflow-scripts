import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode");

document.querySelector(".scroll").addEventListener("scroll", () => {
	spline.emitEvent("scroll", "Mark (Scroll Event)");
});
