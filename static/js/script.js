$(document).ready(function () {

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
				}
			});

			var sliderAction = new Swiper('.js-swiper-action', {
				speed: 400,
				spaceBetween: 0,
				pagination: {
					el: '.action .swiper-pagination',
					type: 'bullets',
					clickable: true
				}
			});

			var catalogItemSlider = new Swiper('.js-catalog-slider', {
				speed: 400,
				spaceBetween: 30,
				pagination: {
					el: '.js-catalog-slider .swiper-pagination',
					type: 'bullets',
					clickable: true
				}
			});

			var galleryThumbs = new Swiper('.js-preview-thumbs', {
				spaceBetween: 0,
				slidesPerView: 4,
				loop: false,
				freeMode: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				direction: 'vertical',
				touchRatio: 0,
				breakpoints: {
					450: {
						slidesPerView: 2,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						touchRatio: 1,
						direction: 'horizontal',
					},
					650: {
						slidesPerView: 3,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						touchRatio: 1,
						direction: 'horizontal',
					},
					1070: {
						slidesPerView: 4,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						touchRatio: 1,
						direction: 'horizontal',
					}
				}
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
				}
			});

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

	window.reginas.form = ({
		maxValInputs: function maxValInputs() {
			var maxValInputs = document.querySelectorAll(".js-input-numb");
			var _loop = function _loop(maxValInput) {
				var plus = maxValInput.nextElementSibling.nextElementSibling,
					minus = maxValInput.nextElementSibling,
					step = maxValInput.getAttribute("data-steps"),
					max = maxValInput.getAttribute("data-max"),
					min = maxValInput.getAttribute("data-min");
				if (!maxValInput.getAttribute("data-init")) {
					maxValInput.addEventListener("keydown", function (e) {
						var validArr = [46, 8, 9, 27, 13, 110, 190];
						if (validArr.indexOf(e.keyCode) !== -1 || e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode >= 35 && e.keyCode <= 39) {
							return
						}
						if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
							e.preventDefault()
						}
					});
					maxValInput.addEventListener("focusout", function (e) {
						if (+maxValInput.value > +max) maxValInput.value = max;
						if (+maxValInput.value < +min) maxValInput.value = min;
						var eventChange = new Event("change");
						maxValInput.dispatchEvent(eventChange)
					});
					plus.addEventListener("click", function () {
						if (+maxValInput.value < +max) maxValInput.value = +maxValInput.value + +step;
						var eventChange = new Event("change");
						maxValInput.dispatchEvent(eventChange)
					});
					minus.addEventListener("click", function () {
						if (+maxValInput.value > +min) maxValInput.value = +maxValInput.value - +step;
						var eventChange = new Event("change");
						maxValInput.dispatchEvent(eventChange)
					})
				}
				maxValInput.setAttribute("data-init", 1);
			};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;
			try {
				for (var _iterator = maxValInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var maxValInput = _step.value;
					_loop(maxValInput)
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return()
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError
					}
				}
			}
		},
		init: function () {
			var _th = this;
			this.maxValInputs();

			$('.js-validate').submit(function (e) {
				if (!_th.checkForm($(this))) {
					return false;
				}
			});
		},

		checkForm: function (form) {
			var checkResult = true;
			form.find('.warning').removeClass('warning');
			form.find('input, textarea, select').each(function () {
				if ($(this).data('req')) {
					switch ($(this).data('type')) {
						case 'checkbox':
							if (!$(this).is(':checked')) {
								$(this).siblings('label').addClass('warning');
								checkResult = false;
							}
							break;
						case 'mobile':
							if ($.trim($(this).val()).length < 17) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						case 'email':
							var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
							if (!re.test($(this).val())) {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
						case 'select':
							if (!$(this).parent().hasClass('changed')) {
								$(this).parent().addClass('warning');
								checkResult = false;
							}
							break;
						default:
							if ($.trim($(this).val()) === '') {
								$(this).addClass('warning');
								checkResult = false;
							}
							break;
					}
				}
			});
			return checkResult;
		}
	}).init();

	window.crlv.mask = ({
		init: function () {
			$('.js-phone-mask').mask('+7 (000) 000-00-00');
		}
	}).init();

	window.reginas.obj = ({

		compare: function () {

			function GetDataActiveSlide(selector) {
				var parents = $(selector).parents('.compare__row'),
					activeSlideData = $(selector).find('.swiper-slide-active').data();
				parents.find('.compare__cell--eng .raiting__ind').css('width', (activeSlideData.eng ? activeSlideData.eng : 0) + '%');
				parents.find('.compare__cell--gap .raiting__ind').css('width', (activeSlideData.gap ? activeSlideData.gap : 0) + '%');
				parents.find('.compare__cell--trunk .raiting__ind').css('width', (activeSlideData.trunk ? activeSlideData.trunk : 0) + '%');
				parents.find('.compare__cell--mile .raiting__ind').css('width', (activeSlideData.mile ? activeSlideData.mile : 0) + '%');
				parents.find('.compare__cell--price .compare__cell-text span').text((activeSlideData.price ? (activeSlideData.price).toLocaleString() : '0'));
			}

			$('.js-swiper-comapre-cars').each(function () {
				var _t = $(this),
					$btnPrev = _t.parent('.compare__cell').find('.swiper-button-prev')[0],
					$btnNext = _t.parent('.compare__cell').find('.swiper-button-next')[0];

				new Swiper(_t[0], {
					speed: 400,
					spaceBetween: 0,
					navigation: {
						nextEl: $btnNext,
						prevEl: $btnPrev
					},
					on: {
						init: function () {
							GetDataActiveSlide(this.$wrapperEl[0]);
						},
						slideChangeTransitionEnd: function () {
							GetDataActiveSlide(this.$wrapperEl[0]);
						}
					}
				});

			});

		},

		tabs: function () {

			var flagAnim = true,
				tabsPar = $('.js-tabs'),
				tabsBtn = tabsPar.find('.tabs__nav-button'),
				tabsItem = tabsPar.find('.tabs__list-item');

			function swiperTabsInit() {
				if (!$('.swiper-active .js-swiper-tabs').hasClass('swiper-initialized')) {
					var sliderTabs = new Swiper('.swiper-active .js-swiper-tabs', {
						speed: 400,
						spaceBetween: 0,
						pagination: {
							el: '.swiper-active .swiper-pagination',
							type: 'bullets',
							clickable: true
						},
						on: {
							init: function () {
								this.el.classList.add('swiper-initialized');
							}
						}
					});
				}
			}

			swiperTabsInit();

			tabsBtn.on('click', function (e) {
				var _t = $(this),
					_tData = _t.data('tabs-nav');

				if (flagAnim && !_t.hasClass('tabs__nav-button--active')) {
					flagAnim = false;
					tabsBtn.removeClass('tabs__nav-button--active');
					_t.addClass('tabs__nav-button--active');
					tabsItem.stop().fadeOut(350, function () {
						$(this).removeClass('tabs__list-item--active swiper-active');
					});
					setTimeout(function () {
						$('.tabs__list-item[data-tabs-item="' + _tData + '"]')
							.stop()
							.fadeIn(300, function () {
								$(this).addClass('swiper-active');
								swiperTabsInit();
								flagAnim = true;
							});
					}, 350);
				}
				e.preventDefault();
			});
		},

		swiperIcatalog: function () {

			$('.js-swiper-icatalog').each(function () {
				var _t = $(this),
					$btnPrev = _t.parent('.icatalog__slider').find('.swiper-button-prev')[0],
					$btnNext = _t.parent('.icatalog__slider').find('.swiper-button-next')[0];

				new Swiper(_t[0], {
					speed: 400,
					spaceBetween: 32,
					slidesPerView: 4,
					noSwiping: true,
					simulateTouch: false,
					navigation: {
						nextEl: $btnNext,
						prevEl: $btnPrev
					},
					breakpoints: {
						450: {
							slidesPerView: 1
						},
						767: {
							slidesPerView: 2
						},
						1023: {
							slidesPerView: 3
						},
					}
				});

			});

		},

		init: function () {

			if ($('.js-tabs').length) this.tabs();

			if ($('.js-swiper-comapre-cars').length) this.compare();

			if ($('.js-swiper-icatalog').length) this.swiperIcatalog();

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

			$(".js-form-reset").on('click', function (e) {
				$(this).parents('form')[0].reset();
				e.preventDefault();
			});

			$('.js-open-filter').click(function () {
				$(this).toggleClass('active');
				$('.auction__filter').slideToggle();
			});

			$('.js-toggle-overview-text').on('click', function (e) {
				var _t = $(this),
					hiddenText = _t.siblings('.overview__text-hidden');
				if (hiddenText.length) {
					if (_t.hasClass('active')) {
						_t
							.removeClass('active')
							.text('Узнать больше');
						hiddenText.slideUp(300);
					} else {
						_t
							.addClass('active')
							.text('Свернуть');
						hiddenText.slideDown(300);
					}
				}
				e.preventDefault();
			});

			return this;
		}

	}).init();

});
