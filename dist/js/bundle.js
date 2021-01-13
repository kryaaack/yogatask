/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/***/ ((module) => {

function calc() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
})

restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
})

place.addEventListener('change', function() {
    if (persons.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
})
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ ((module) => {

function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', sendForm);
    contactForm.addEventListener('submit', sendForm);



    function sendForm(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let obj = {};
                    data.forEach(function(value, key) {
                        obj[key] = value;
                    })
                    let json = JSON.stringify(obj);
                 

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    })
                    request.send(json);
                })
            }

            let inn;
            if (event.target == form) {
                inn = input;
            }
            else if (event.target == contactForm) {
                inn = contactInput;
            }

          postData(formData)
            .then(function() {
                statusMessage.innerHTML = message.loading;
            })
            .then(function() {
                statusMessage.innerHTML = message.success;
            })
            .catch(function() {
                statusMessage.innerHTML = message.failure;
            })



            for (let i = 0; i < inn.length; i++) {
                    inn[i].value = '';
                }
    }

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

function modal() {
    let btn = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    more = document.querySelectorAll('.description-btn');

btn.addEventListener('click', openModal);
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', openModal);
}
close.addEventListener('click', closeModal);

function openModal() {
    overlay.style.display = 'block';
    btn.classList.add = 'more-splash';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.style.display = '';
    btn.classList.remove = 'more-splash';
    document.body.style.overflow = '';
}
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function slider() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    dots = document.querySelectorAll('.dot'),
    dotsWrap = document.querySelector('.slider-dots'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(function(item) {
            item.style.display = 'none';
        });

        dots.forEach(function(item) {
            item.classList.remove('dot-active');
        });

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    })

    next.addEventListener('click', function() {
        plusSlides(1);
    })

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length +1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    })
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
    let allTabs = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    allTabs.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/***/ ((module) => {

function timer() {
    let deadline = '2021-12-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                function addZero(num){
                    if(num <= 9) {
                        return '0' + num;
                    } else return num;
                };

                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);


                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    }

    setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");
    let form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");
    let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");
    let slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js");
    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");
    let timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map