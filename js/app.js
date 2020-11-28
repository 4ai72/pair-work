// swiper

// var mySwiper = new Swiper('.swiper-container', {
//     autoHeight: true,
//     // autoplay: {
// 	// 	delay: 3000,
// 	// 	stopOnLastSlide: false,
// 	// 	disableOnInteraction: false,
// 	// 	reverseDirection: false
// 	// },
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true
// 	}
// });

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	slidesPerView: 4,
	spaceBetween: 0,
	initialSlide: 2,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	  },
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  });