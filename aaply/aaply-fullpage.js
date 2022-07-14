const delayOneDown = 2400; // задержка переключения между слайдами
const delayTwoUp = 1500; // задержка переключения между слайдами для другой секции

let scrollDelay = false; // изначальное состояние

let timeoutId;
let animationIsFinished = false;

// fullpage.js initialization
new fullpage("#fullpage", {
  /* responsiveWidth: 766, */
  scrollingSpeed: 700,
  // Disabling “scrollBar: true” will allow using scrollable section
  scrollBar: true,
  /* verticalCentered: false */
  fitToSection: false,

  // onLeave - метод, вызывающийся во время ПОКИДАНИЯ слайда
  onLeave: function (origin, destination, direction, trigger) {
    console.log("origin: " + origin.index); // узнаем в консоли текущий слайд

    let curTime = new Date().getTime();

    var origin = this;

    //после покидания раздела 1
    if (origin.index == 0 && direction == "down") {
      console.log("s-1-down и s-1-down-test");
      document.querySelector(".s-1-down").click();
      /* document.querySelector('.s-1-down-test').click(); */

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delayOneDown);
      return scrollDelay;
    }

    // после покидания раздела 2
    else if (origin.index == 1 && direction == "up") {
      console.log("s-2-up");
      document.querySelector(".s-2-up").click();

      timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delayTwoUp);
      return scrollDelay;
    }

    // после покидания раздела 2
    else if (origin.index == 1 && direction == "down") {
      console.log("s-2-down");
      document.querySelector(".s-2-down").click();

      /*timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;*/
    }

    // после покидания раздела 3
    else if (origin.index == 2 && direction == "up") {
      console.log("s-3-up");
      document.querySelector(".s-3-up").click();

      timeoutId = setTimeout(function () {
        scrollDelay = true;
        fullpage_api.moveTo(destination.index + 1);
        scrollDelay = false;
      }, delay);
      return scrollDelay;
    }
  },

  afterLoad: function (origin, destination, direction, trigger) {
    console.log("origin: " + origin.index); // узнаем в консоли текущий слайд

    var origin = this;

    //открытие секции 2 с 1
    if (origin.index == 0 && direction == "down") {
      console.log("центр s-2-center");
      document.querySelector(".s-2-center").click();
    }

    //открытие секции 2 с 1
    /*if(origin.index == 1 && direction =='down'){
        console.log("центр s-3");
        document.querySelector('.s-2-down').click();
      }*/
  }
});
