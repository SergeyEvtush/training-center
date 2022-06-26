/* import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]); */
const swiper = new Swiper('.main-slider', {
	/* autoHeight:true, */
	//arrows
/* 	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}, */
 //навигация по слайдам - буллеты
	/* pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		//вывод в булете номеер слайда(можно выводить все что угодно в зависимости от задачи)
		renderBullet: function (index, className) { 
			return '<span class="'+className+'" style="color:#fff;font-weght:700;">'+(index+1)+'</span>'
		},
	}, */
	grabCursor: true,
	keyboard: {
		onlyInViewport: true,
		pageUpDown:true,
	},

	//центрирование активного слайда
	centeredSlides: true,
	//бесконечный слайдер
	loop: true,
	//автопрокрутка
/* 	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		//отключить после ручного переключения
		disableOnInteraction:false,
	}, */
	//скорость переключения
 	speed: 800,
	//смена прозрачности
/* 	effect: 'fade',
	//дополнение к fade
	fadeEffect: {
		//параллельная смена прозрачности
		crossFade:true,
	}, */
	//эффект 3д куба
	/*   effect:'cube',
	  cubeEffect: {
		 sladeShadows: true, 
		 shadow: true,
		shadowOffset: 10, 
		 shadowScale:0 
 	},  */
});
const swiperProposal = new Swiper('.proposal-slider', {
	autoHeight:true,
	//arrows
/* 	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
  */
	grabCursor: true,
	keyboard: {
		onlyInViewport: true,
		pageUpDown:true,
	},
	//количество слайдов для показа
	slidesPerView: 1,
	
	centeredSlides: true,
	slidesPerGroup:1,
	//бесконечный слайдер
	loop: true,
	//автопрокрутка
/* 	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		//отключить после ручного переключения
		disableOnInteraction:false,
	}, */
	//скорость переключения
 	speed: 800,
	breakpoints: {
		460: {
			slidesPerView: 2,
			spaceBetween: 10,
			centeredSlides: false,
			
		},
		767: {
			slidesPerView: 4,
			spaceBetween: 10,
			centeredSlides: false,

		}
	},
	
});

const swiperStaff = new Swiper('.staff-slider', {
	autoHeight:true,
	grabCursor: true,
	keyboard: {
		onlyInViewport: true,
		pageUpDown:true,
	},
	//количество слайдов для показа
	slidesPerView: 1,
	
	centeredSlides: true,
	slidesPerGroup:1,
	//бесконечный слайдер
	loop: true,
	breakpointsInverse: true,
	breakpoints: {
		460: {
			slidesPerView: 2,
			spaceBetween: 10,
			centeredSlides: false,
			
		},
		767: {
			slidesPerView: 4,
			spaceBetween: 10,
			centeredSlides: false,

		}
	},
	
});
const swiperReviews = new Swiper('.reviews-slider', {
	autoHeight:true,
	grabCursor: true,
	keyboard: {
		onlyInViewport: true,
		pageUpDown:true,
	},
	//количество слайдов для показа
	slidesPerView: 1,
	
	centeredSlides: true,
	slidesPerGroup:1,
	//бесконечный слайдер
	loop: true,
	breakpointsInverse: true,
	breakpoints: {
		460: {
			
			
			
		},
		767: {
			
			

		}
	},
	
});
