$(document).ready(function() {

	window.reginas = {};

	window.reginas.slider = ({
		init: function () {
			var heroSlider = new Swiper('.js-hero-slider', {
				speed: 400,
				navigation: {
					nextEl: '.js-hero-slider .swiper-button-next',
					prevEl: '.js-hero-slider .swiper-button-prev',
				},
				pagination: {
					el: '.js-hero-slider .swiper-pagination',
					type: 'bullets',
					clickable: true
				},
			});


			var catalogItemSlider = new Swiper('.js-catalog-slider', {
				speed: 400,
				spaceBetween: 30,
				pagination: {
					el: '.js-catalog-slider .swiper-pagination',
					type: 'bullets',
					clickable: true
				},
			});

			var galleryThumbs = new Swiper('.js-preview-thumbs', {
				spaceBetween: 0,
				slidesPerView: 4,
				loop: false,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				direction: 'vertical',
				touchRatio: 0
			});

			var galleryTop = new Swiper('.js-preview-main', {
				spaceBetween: 10,
				loop: false,
				navigation: {
					nextEl: '.js-preview-main .swiper-button-next',
					prevEl: '.js-preview-main .swiper-button-prev'
				},
				thumbs: {
					swiper: galleryThumbs
				},
			});

			if ($('.js-all-params').length) {
				$('.js-all-params').on('click', function (e) {
					var _t = $(this),
						parents = _t.parents('.form'),
						hiddenRow = parents.find('.form__row--hidden');
					if (hiddenRow.length > 0) {
						if (_t.hasClass('active')) {
							_t
								.removeClass('active')
								.text('Все параметры');
							hiddenRow.fadeOut(350);
						} else {
							_t
								.addClass('active')
								.text('Свернуть');
							hiddenRow.fadeIn(350).css('display', 'flex');
						}
					}
					e.preventDefault();
				});
			}

		}
	}).init();

	window.reginas.dotdotdot = ({
		init: function () {
			$(".inews__text").dotdotdot({
				height: 65
			});

			$(".ireviews__text").dotdotdot({
				height: 110
			});
		}
	}).init();

	window.reginas.styler = ({
		init: function () {
			$('select').styler();
		}
	}).init();

	window.reginas.burger = ({
		init: function () {
			$('.js-burger').on('click', function () {
				var _t = $(this),
					nav = _t.siblings('.nav'),
					body = $('body');
				if (!_t.hasClass('header__burger--active')) {
					_t.addClass('header__burger--active');
					body.addClass('ovh');
					nav.fadeIn('350');
				} else {
					_t.removeClass('header__burger--active');
					body.removeClass('ovh');
					nav.fadeOut('350');
				}
				return false;
			});
		}
	}).init();

	window.reginas.fancy = ({
		init: function () {
			$("[data-fancybox]").fancybox({
				lang: 'ru',
				touch: false,
				i18n: {
					'ru': {
						CLOSE: 'Закрыть',
						NEXT: 'Следующая',
						PREV: 'Предыдущая',
						ERROR: 'Запрошенный контент не может быть загружен. <br> Повторите попытку позже.',
						PLAY_START: 'Начать слайд-шоу',
						PLAY_STOP: 'Остановить слайд-шоу',
						FULL_SCREEN: 'Полный экран',
						THUMBS: 'Эскизы',
						DOWNLOAD: 'Скачать',
						SHARE: 'Поделиться',
						ZOOM: 'Увеличить'
					}
				}
			});
		}
	}).init();
});
