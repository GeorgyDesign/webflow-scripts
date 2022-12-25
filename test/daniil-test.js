import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
/*spline.load('https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode').then(() => {
		spline.emitEvent('scroll', 'Mark (Scroll Event)');
	}); */

spline
	.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode")
	.then(() => {
		document.querySelector(".scroll").addEventListener("scroll", () => {
			spline.emitEvent("scroll");
		});
	});
