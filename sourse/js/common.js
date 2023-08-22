"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	// let defaultSl = {
	// 	spaceBetween: 0,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},
	// 	watchOverflow: true,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: ' .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 		// renderBullet: function (index, className) {
	// 		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		// }
	// 	},
	// }

	// new Swiper('.breadcrumb-slider--js', {
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	watchOverflow: true
	// });

	// const swiper4 = new Swiper('.sBanners__slider--js', { // если не используешь методы swiper  - можно обращаться без нее к Swiper
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,

	// });



	


	let headSlider = document.querySelector('.headerBlock__slider--js');
	if (headSlider) { 
		new Splide(headSlider, {
			type    : 'loop',
			perPage : 1,
			autoplay: true,
		} ).mount();
	}

	let rewSlider = document.querySelector('.sRews__slider--js');
	if (rewSlider) { 
		new Splide(rewSlider, {
			type    : 'loop',
			perPage : 1,
			perMove : 1,
			autoplay: true,
			mediaQuery: 'min',
			breakpoints: {
				768: {
					perPage: 2,
				},
				
				1200: {
					perPage: 3,
				},

			}
		} ).mount();
	}

	let sContentSliders = document.querySelectorAll('.default-slider-js');
	if (sContentSliders.length > 0) { 
		for (const sContentSlider of sContentSliders) {
			new Splide(sContentSlider, {
				// type    : 'loop',
				rewind    : true,
				rewindByDrag    : true,
				perPage : 1,
				perMove : 1,
				gap: 56,
				// autoplay: true,
				// mediaQuery: 'min',
				// breakpoints: {
				// 	768: {
				// 		perPage: 2,
				// 	},
					
				// 	1200: {
				// 		perPage: 3,
				// 	},
	
				// }
			} ).mount();
		}
	};

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }