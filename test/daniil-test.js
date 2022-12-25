import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const spline = new Application(canvas);
/* spline.load('https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode').then(() => {
		spline.emitEvent('scroll', 'Mark (Scroll Event)');
	}); */

spline
	.load("https://prod.spline.design/5z4ncQDE79uF-4V1/scene.splinecode")
	.then(() => {
		window.addEventListener("scroll", () => {
			spline.emitEvent("scroll");
		});
	});

/*function getScrollPosition() {
		return {
			x: window.pageXOffset || document.documentElement.scrollLeft,
			y: window.pageYOffset || document.documentElement.scrollTop
		};
	}
	
	// Update the position of the Spline scene based on the scroll position
	function updateScenePosition() {
		const { x, y } = getScrollPosition();
		spline.setPosition(x, y);
	} */
