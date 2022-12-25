import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
/* spline.load('https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode').then(() => {
		spline.emitEvent('scroll', 'Mark (Scroll Event)');
	}); */

spline
	.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode")
	.then(() => {
		// Get the current scroll position of the browser window
		function getScrollPosition() {
			return {
				x: window.pageXOffset || document.documentElement.scrollLeft,
				y: window.pageYOffset || document.documentElement.scrollTop
			};
		}

		// Trigger the Spline scroll event when the user scrolls the browser window
		window.addEventListener("scroll", () => {
			const { x, y } = getScrollPosition();
			spline.emitEvent("scroll");
		});
	});
