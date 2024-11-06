/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger.js */ "./src/js/components/burger.js");
/* harmony import */ var _components_video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/video.js */ "./src/js/components/video.js");
/* harmony import */ var _components_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container.js */ "./src/js/components/container.js");
/* harmony import */ var _components_fixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fixed.js */ "./src/js/components/fixed.js");





/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-burger]');
  const burgerMenu = document.querySelector('.burger__menu');
  const closeIcon = document.querySelector('.burger__menu-close--icon'); // Иконка для закрытия
  const body = document.body;
  burgerBtn.addEventListener('click', () => {
    // Переключаем активное состояние
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    // Блокируем или разблокируем скролл
    body.classList.toggle('no-scroll');

    // Меняем стиль бургер-кнопки на крестик
    const lines = burgerBtn.querySelectorAll('.burger__line');
    lines.forEach(line => line.classList.toggle('cross', burgerBtn.classList.contains('active')));
  });

  // Функция для закрытия меню
  const closeMenu = () => {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
    body.classList.remove('no-scroll');
    burgerBtn.setAttribute('aria-expanded', 'false');
    const lines = burgerBtn.querySelectorAll('.burger__line');
    lines.forEach(line => line.classList.remove('cross'));
  };

  // Добавляем обработчик клика для закрытия меню на иконку крестика
  if (closeIcon) {
    closeIcon.addEventListener('click', closeMenu);
  }
});

/***/ }),

/***/ "./src/js/components/container.js":
/*!****************************************!*\
  !*** ./src/js/components/container.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const contact_container = document.querySelector('.contact-container');
contact_btn.addEventListener('click', () => {
  contact_container.classList.toggle('visible');
});
close_btn.addEventListener('click', () => {
  contact_container.classList.remove('visible');
});

/***/ }),

/***/ "./src/js/components/fixed.js":
/*!************************************!*\
  !*** ./src/js/components/fixed.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', () => {
  const recordBtn = document.querySelector('.fixed-record-btn');
  const secondSection = document.querySelector('#second-section');
  window.addEventListener('scroll', () => {
    const secondSectionTop = secondSection.getBoundingClientRect().top;
    if (secondSectionTop <= window.innerHeight / 2) {
      recordBtn.classList.add('visible');
    } else {
      recordBtn.classList.remove('visible');
    }
  });
});

/***/ }),

/***/ "./src/js/components/video.js":
/*!************************************!*\
  !*** ./src/js/components/video.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.services__video');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5
  });
  observer.observe(video);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map