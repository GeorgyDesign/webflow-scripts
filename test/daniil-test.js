import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
/* spline.load('https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode').then(() => {
		spline.emitEvent('scroll', 'Mark (Scroll Event)');
	}); */

spline
	.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode")
	.then(() => {
		function getScrollPosition() {
			return {
				x: window.pageXOffset || document.documentElement.scrollLeft,
				y: window.pageYOffset || document.documentElement.scrollTop
			};
		}

		window.addEventListener("scroll", () => {
			const { x, y } = getScrollPosition();
			spline.emitEvent("scroll", "ScrollEvent");
		});
	});
