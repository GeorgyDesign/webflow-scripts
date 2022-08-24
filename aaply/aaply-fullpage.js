const delayExtra = 3000; // delay between sections
const delayLonger = 2000; // delay between sections
const delayLong = 1700; // delay between sections
const delayShort = 1000; // delay between sections

let scrollDelay = false; // initial state, i.e., no scroll delay

let timeoutId;
let animationIsFinished = false;

// fullpage.js initialization
new fullpage("#fullpage", {
	/* responsiveWidth: 766, */
	scrollingSpeed: 700,
	scrollBar: true, // disabling “scrollBar: true” will allow using scrollable section
	fitToSection: false,

	// onLeave - perfoming a function when leaving a section, i.e. going from one section to another
	onLeave: function (origin, destination, direction, trigger) {
		console.log("origin: " + origin.index); // debugging; check the console for the section

		let curTime = new Date().getTime();

		var origin = this;

		//leave animation: 0↓1 👍🏻
		if (origin.index == 0 && direction == "down") {
			console.log("s-0-down — 0↓1 — 🙈 Hero • SoV ");
			document.querySelector(".s-0-down").click();
			/* document.querySelector('.s-1-down-test').click(); */

			clearTimeout(timeoutId);

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayLong);
			return scrollDelay;
		}

		//leave animation: 1↑0 👍🏻
		else if (origin.index == 1 && direction == "up") {
			console.log("s-1-up — 1↑0 — 🙉 Intro (sticky) • SoV (p1/2)");
			document.querySelector(".s-1-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 1↓2 👍🏻
		else if (origin.index == 1 && direction == "down") {
			console.log("s-1-down — 1↓2 — 🙉 Intro (sticky) • Switch (p1→2)");
			document.querySelector(".s-1-down").click();
		}

		//leave animation: 2↑1 👍🏻
		else if (origin.index == 2 && direction == "up") {
			console.log("s-2-up — 2↑1 — 🙉 Intro (sticky) • Switch (p2→1)");
			document.querySelector(".s-2-up").click();
		}

		//leave animation: 2↓3
		else if (origin.index == 2 && direction == "down") {
			console.log("s-2-down — 2↓3 — 🙉 Intro (sticky) • SoV (p1/2)");
			document.querySelector(".s-2-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 3↑2
		else if (origin.index == 3 && direction == "up") {
			console.log("s-3-up — 3↑2 — 🙈 Transition • SoV");
			document.querySelector(".s-3-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 3↓4
		else if (origin.index == 3 && direction == "down") {
			console.log("s-3-down — 3↓4 — 🙈 Transition • Lottie SoV");
			document.querySelector(".s-3-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayExtra);
			return scrollDelay;
		}

		//leave animation: 4↑3
		else if (origin.index == 4 && direction == "up") {
			console.log("s-4-up — 4↑3 — 🎦 Lottie • Map (p1) SoV");
			document.querySelector(".s-4-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayShort);
			return scrollDelay;
		}

		//leave animation: 4↓5
		else if (origin.index == 4 && direction == "down") {
			console.log("s-4-down");
			document.querySelector(".s-4-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 5↑4
		else if (origin.index == 5 && direction == "up") {
			console.log("s-5-up");
			document.querySelector(".s-5-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 5↓6
		else if (origin.index == 5 && direction == "down") {
			console.log("s-5-down");
			document.querySelector(".s-5-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 6↑5
		else if (origin.index == 6 && direction == "up") {
			console.log("s-6-up — 6↑5 — ⚒️ Editor • SoV");
			document.querySelector(".s-6-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 6↓7
		else if (origin.index == 6 && direction == "down") {
			console.log("s-6-down — 6↓7 — ⚒️ Editor • SoV");
			document.querySelector(".s-6-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 7↑6
		else if (origin.index == 7 && direction == "up") {
			console.log("s-7-up");
			document.querySelector(".s-7-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 7↓8
		else if (origin.index == 7 && direction == "down") {
			console.log("s-7-down");
			document.querySelector(".s-7-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 8↑7
		else if (origin.index == 8 && direction == "up") {
			console.log("s-8-up");
			document.querySelector(".s-8-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 8↓9
		else if (origin.index == 8 && direction == "down") {
			console.log("s-8-down");
			document.querySelector(".s-8-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 9↑8
		else if (origin.index == 9 && direction == "up") {
			console.log("s-9-up");
			document.querySelector(".s-9-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 9↓10
		else if (origin.index == 9 && direction == "down") {
			console.log("s-9-down");
			document.querySelector(".s-9-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 10↑9
		else if (origin.index == 10 && direction == "up") {
			console.log("s-10-up — 10↑9 — ⚒️ Tools • SoV");
			document.querySelector(".s-10-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 10↓11
		else if (origin.index == 10 && direction == "down") {
			console.log("s-10-down — 10↓11 — ⚒️ Tools • SoV");
			document.querySelector(".s-10-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1000);
			return scrollDelay;
		}

		//leave animation: 11↑10
		else if (origin.index == 11 && direction == "up") {
			console.log("s-11-up — 11↑10 —");
			document.querySelector(".s-11-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 900);
			return scrollDelay;
		}

		//leave animation: 11↓12
		else if (origin.index == 11 && direction == "down") {
			console.log("s-11-down — 11↓12 —");
			document.querySelector(".s-11-down").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 900);
			return scrollDelay;
		}

		//leave animation: 12↑11
		else if (origin.index == 12 && direction == "up") {
			console.log("s-12-up — 12↑11 —");
			document.querySelector(".s-12-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, 1600);
			return scrollDelay;
		}
	},

	// afterLoad — perfoming a function when the section is centered or full viewport height
	afterLoad: function (origin, destination, direction, trigger) {
		console.log("origin: " + origin.index); // debugging; check the console for the section

		var origin = this;

		//load animation: 0↓1 👍🏻
		if (origin.index == 0 && direction == "down") {
			console.log("s-1-center — 0↓1 — 🙉 Intro (sticky) • SiV (p1)");
			document.querySelector(".s-1-center").click();
		}

		//load animation: 1↑0 👍🏻
		if (origin.index == 1 && direction == "up") {
			console.log("s-0-center — 1↑0 — 🙈 Hero • SiV");
			document.querySelector(".s-0-center").click();
		}

		//load animation: 2↓3
		if (origin.index == 2 && direction == "down") {
			console.log("s-3-center-up — 2↓3 — 🙈 Transition • SiV");
			document.querySelector(".s-3-center-up").click();
		}

		//load animation: 3↑2 👍🏻
		if (origin.index == 3 && direction == "up") {
			console.log("s-2-center — 3↑2 — 🙉 Intro (sticky) • SiV (p2)");
			document.querySelector(".s-2-center").click();
		}

		//load animation: 3↓4
		if (origin.index == 3 && direction == "down") {
			console.log("s-4-center-up — 3↓4 — 🎦 Lottie • Map (p1) SiV");
			document.querySelector(".s-4-center-up").click();
		}

		//load animation: 4↑3
		if (origin.index == 4 && direction == "up") {
			console.log("s-3-center-down — 4↑3 — 🙈 Transition • Lottie SiV");
			document.querySelector(".s-3-center-down").click();
		}

		//load animation: 5↓6
		if (origin.index == 5 && direction == "down") {
			console.log("s-6-center — 5↓6 — ⚒️ Editor • SiV");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 6↑5
		if (origin.index == 6 && direction == "up") {
			console.log("s-5-center-down — 6↑5 — 🎦 Lottie • Map (p2) SiV");
			document.querySelector(".s-5-center-down").click();
		}

		//load animation: 6↓7
		if (origin.index == 6 && direction == "down") {
			console.log("s-7-center — 6↓7 — 🎦 Lottie • Map (p3)");
			document.querySelector(".s-7-center").click();
		}

		//load animation: 7↑6
		if (origin.index == 7 && direction == "up") {
			console.log("s-6-center — 7↑6 — ⚒️ Editor • SiV");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 8↑7
		if (origin.index == 8 && direction == "up") {
			console.log("s-7-center — 8↑7 — 🎦 Lottie • Map (p3)");
			document.querySelector(".s-7-center").click();
		}

		//load animation: 8↓9
		if (origin.index == 8 && direction == "down") {
			console.log("s-9-center — 8↓9 — 🎦 Lottie • Map (p5)");
			document.querySelector(".s-9-center").click();
		}

		//load animation: 9↓10
		if (origin.index == 9 && direction == "down") {
			console.log("s-10-center — 9↓10 — ⚒️ Tools • SiV");
			document.querySelector(".s-10-center").click();
		}

		//load animation: 10↑9
		if (origin.index == 10 && direction == "up") {
			console.log("s-9-center — 10↑9 — 🎦 Lottie • Map (p5)");
			document.querySelector(".s-9-center").click();
		}

		//load animation: 10↓11
		if (origin.index == 10 && direction == "down") {
			console.log("s-11-center — 10↓11 —");
			document.querySelector(".s-11-center").click();
		}

		//load animation: 11↑10
		if (origin.index == 11 && direction == "up") {
			console.log("s-10-center — 11↑10 —");
			document.querySelector(".s-10-center").click();
		}

		//load animation: 11↓12
		if (origin.index == 11 && direction == "down") {
			console.log("s-12-center — 11↓12 —");
			document.querySelector(".s-12-center").click();
		}

		//load animation: 12↑11
		if (origin.index == 12 && direction == "up") {
			console.log("s-11-center — 12↑11 —");
			document.querySelector(".s-11-center").click();
		}
	}
});
