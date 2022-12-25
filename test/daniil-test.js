import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);

spline
	.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode")
	.then(() => {
		// Trigger the Spline scroll event when the user scrolls the browser window
		window.addEventListener("scroll", () => {
			spline.emitEvent("scroll", "c6e3d9a1-c95c-466b-997c-41ade7341f27");
		});
	});
