const delayOneDown = 2400; // delay between sections
const delayTwoUp = 1500; // delay between sections

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
			console.log("s-0-down");
			document.querySelector(".s-0-down — 🙈 Hero • SoV ").click();
			/* document.querySelector('.s-1-down-test').click(); */

			clearTimeout(timeoutId);

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayOneDown);
			return scrollDelay;
		}

		//leave animation: 1↑0
		else if (origin.index == 1 && direction == "up") {
			console.log("s-1-up");
			document.querySelector(".s-1-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delayTwoUp);
			return scrollDelay;
		}

		//leave animation: 1↓2 👍🏻
		else if (origin.index == 1 && direction == "down") {
			console.log("s-1-down — 🙉 Intro (sticky) • SiV (p2)");
			document.querySelector(".s-1-down").click();

			/* timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay; */
		}

		//leave animation: 2↑1
		else if (origin.index == 2 && direction == "up") {
			console.log("s-2-up");
			document.querySelector(".s-2-up").click();

			timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay;
		}

		//leave animation: 2↓3
		else if (origin.index == 2 && direction == "down") {
			console.log("s-2-down");
			document.querySelector(".s-2-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 3↑2
		else if (origin.index == 3 && direction == "up") {
			console.log("s-3-up");
			document.querySelector(".s-3-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 3↓4
		else if (origin.index == 3 && direction == "down") {
			console.log("s-3-down");
			document.querySelector(".s-3-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 4↑3
		else if (origin.index == 4 && direction == "up") {
			console.log("s-4-up");
			document.querySelector(".s-4-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
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
			console.log("s-x-down");
			document.querySelector(".s-x-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 6↑5
		else if (origin.index == 6 && direction == "up") {
			console.log("s-6-up");
			document.querySelector(".s-6-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}

		//leave animation: 6↓7
		else if (origin.index == 6 && direction == "down") {
			console.log("s-6-down");
			document.querySelector(".s-6-down").click();

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 7↑6
		else if (origin.index == 7 && direction == "up") {
			console.log("s-7-up");
			document.querySelector(".s-7-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
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

			/*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
		}

		//leave animation: 10↑9
		else if (origin.index == 10 && direction == "up") {
			console.log("s-10-up");
			document.querySelector(".s-10-up").click();

			/* timeoutId = setTimeout(function () {
				scrollDelay = true;
				fullpage_api.moveTo(destination.index + 1);
				scrollDelay = false;
			}, delay);
			return scrollDelay; */
		}
	},

	// afterLoad — perfoming a function when the section is centered or full viewport height
	afterLoad: function (origin, destination, direction, trigger) {
		console.log("origin: " + origin.index); // debugging; check the console for the section

		var origin = this;

		//load animation: 0↓1
		if (origin.index == 0 && direction == "down") {
			console.log("s-1-center — 0↓1 —");
			document.querySelector(".s-1-center").click();
		}

		//load animation: 1↑0
		if (origin.index == 1 && direction == "up") {
			console.log("s-0-center — 1↑0 —");
			document.querySelector(".s-0-center").click();
		}

		//load animation: 1↓2
		if (origin.index == 1 && direction == "down") {
			console.log("s-2-center — 1↓2 —");
			document.querySelector(".s-2-down").click();
		}

		//load animation: 2↑1
		if (origin.index == 2 && direction == "up") {
			console.log("s-1-center — 2↑1 —");
			document.querySelector(".s-1-center").click();
		}

		//load animation: 2↓3
		if (origin.index == 2 && direction == "down") {
			console.log("s-3-center — 2↓3 —");
			document.querySelector(".s-3-center").click();
		}

		//load animation: 3↑2
		if (origin.index == 3 && direction == "up") {
			console.log("s-2-center — 3↑2 —");
			document.querySelector(".s-2-center").click();
		}

		//load animation: 3↓4
		if (origin.index == 3 && direction == "down") {
			console.log("s-4-center — 3↓4 —");
			document.querySelector(".s-4-center").click();
		}

		//load animation: 4↑3
		if (origin.index == 4 && direction == "up") {
			console.log("s-3-center — 4↑3 —");
			document.querySelector(".s-3-center").click();
		}

		//load animation: 4↓5
		if (origin.index == 4 && direction == "down") {
			console.log("s-4-center — 4↓5 —");
			document.querySelector(".s-4-center").click();
		}

		//load animation: 5↑4
		if (origin.index == 5 && direction == "up") {
			console.log("s-4-center — 5↑4 —");
			document.querySelector(".s-4-center").click();
		}

		//load animation: 5↓6
		if (origin.index == 5 && direction == "down") {
			console.log("s-6-center — 5↓6 —");
			document.querySelector(".s-5-center").click();
		}

		//load animation: 6↑5
		if (origin.index == 6 && direction == "up") {
			console.log("s-5-center — 6↑5 —");
			document.querySelector(".s-5-center").click();
		}

		//load animation: 6↓7
		if (origin.index == 6 && direction == "down") {
			console.log("s-7-center — 6↓7 —");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 7↑6
		if (origin.index == 7 && direction == "up") {
			console.log("s-6-center — 7↑6 —");
			document.querySelector(".s-6-center").click();
		}

		//load animation: 7↓8
		if (origin.index == 7 && direction == "down") {
			console.log("s-8-center — 7↓8 —");
			document.querySelector(".s-8-center").click();
		}

		//load animation: 8↑7
		if (origin.index == 8 && direction == "up") {
			console.log("s-7-center — 8↑7 —");
			document.querySelector(".s-7-center").click();
		}

		//load animation: 8↓9
		if (origin.index == 8 && direction == "down") {
			console.log("s-9-center — 8↓9 —");
			document.querySelector(".s-9-center").click();
		}

		//load animation: 9↑8
		if (origin.index == 9 && direction == "up") {
			console.log("s-8-center — 9↑8 —");
			document.querySelector(".s-8-center").click();
		}

		//load animation: 9↓10
		if (origin.index == 9 && direction == "down") {
			console.log("s-10-center — 9↓10 —");
			document.querySelector(".s-10-center").click();
		}

		//load animation: 10↑9
		if (origin.index == 10 && direction == "up") {
			console.log("s-9-center — 10↑9 —");
			document.querySelector(".s-9-center").click();
		}
	}
});
