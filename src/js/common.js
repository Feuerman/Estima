$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(500).fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

$(document).ready(function(){
	'use strict';

	$('.company-slider').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
		arrows: true,
		fade: true,
		nextArrow: '.company-slider__nav-next',
		prevArrow: '.company-slider__nav-prev'
	});

	$('.company-slider').on('beforeChange', function(slick, currentSlide, nextSlide) {				
		var blockChangeBG = $('.main-page-bg__changeImage');
		var arrBgImage = ["url('img/bg__main--first.jpg')", "url('img/bg__main--first-1.jpg')", "url('img/bg__main--first-2.jpg')"];
		var randImage = Math.floor(Math.random() * arrBgImage.length);
		$(blockChangeBG).css('background-image', arrBgImage[randImage]);	
	});

	$('.main-menu-slider').slick({
		arrows: true,
		nextArrow: '.main-menu-slider-nav__arrows-right',
		prevArrow: '.main-menu-slider-nav__arrows-left',
		slidesToShow: 2,
		rows: 3
	});

	$('.main-catalog-slider').slick({
		arrows: true,
		nextArrow: '.main-catalog-slider--next',
		prevArrow: '.main-catalog-slider--prev'
	});

	$('.main-news-slider').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
		arrows: false,
		dots: true
	});

	var btnNavNews = $('.main-news-nav');

	$(btnNavNews).on('click', function(e) {
		e.preventDefault();
		var action = $(this).data('action'),
			tabs = $('.tabs--main-news');
		tabsSelection(action, tabs);
	});

	function tabsSelection(action, tabs) {
		var activeElIndex = $(tabs).find('.active').parent('.tabs__item').index();
		switch (action) {
			case 'prev':
				$(tabs).find('.tabs__item').eq(activeElIndex - 1).find('.tabs__link').trigger('click');	
				break;
			case 'next':
				$(tabs).find('.tabs__item').eq(activeElIndex + 1).find('.tabs__link').trigger('click');					
				break;
			default:
				break;
		}
	}

	$('.main-news-slider-mobile').slick({
		arrows: false,
		dots: true
	});			

	$('.main-portfolio-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		arrows: true,
		nextArrow: '.main-portfolio-slider--next',
		prevArrow: '.main-portfolio-slider--prev',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});	

	$('.cart-slider').slick({
		arrows: false,
		dots: false,	
		asNavFor: '.cart-slider-thumb'	
	});

	$('.cart-slider-thumb').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: '.cart-slider--next',
		prevArrow: '.cart-slider--prev',
		asNavFor: '.cart-slider',
		responsive: [
			{
			breakpoint: 768,
			settings: {
				dots: true,
					dotsClass: 'custom_paging',
					customPaging: function (slider, i) {
						return  '<span class="custom_paging__current">' + (i + 1) + '</span>' + '/' + slider.slideCount;
					}
				}
			}
		]		
	});

	$('.model-top-slider').slick({
		arrows: false,
		dots: true,	
		appendDots:'.model-top-slider__nav',	
		cssEase: 'ease-in-out',
		speed: 1000
	});

	$('.model-slider').slick({
		arrows: false,
		dots: false,		
		cssEase: 'ease-in-out',
		speed: 1000,		
		asNavFor: '.model-slider-thumbs',
	});

	$('.model-slider-thumbs').slick({
		draggable: false,
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: true,
  		focusOnSelect: true,
		nextArrow: '.model-slider--next',
		prevArrow: '.model-slider--prev',
		dots: false,	
		cssEase: 'ease-in-out',
		speed: 1000,
		asNavFor: '.model-slider',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}
		]	
	});

	$('.recommend-slider').slick({
		infinity: true,
		swipeToSlide: true,
		touchThreshold: 5,
		slidesToShow: 5,
		arrows: true,
		nextArrow: '.recommend-slider--next',
		prevArrow: '.recommend-slider--prev',
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
				}		
			},
			{
				breakpoint: 440,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});	

	$('.catalog-menu-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		rows: 2,
		arrows: true,
		nextArrow: '.catalog-menu-slider__arrows-right',
		prevArrow: '.catalog-menu-slider__arrows-left',
		responsive: [
			{
			breakpoint: 1200,
			settings: {	
					slidesToShow: 3,
				}
			},
			{
			breakpoint: 800,
			settings: {	
					slidesToShow: 2,
				}
			},
			{
			breakpoint: 550,
			settings: {	
					slidesToShow: 1,
				}
			}
		]
	});	

	var currentWidth = $('body').width();

	if (currentWidth > 992) {
		onSliders();

		$('body').on('mousewheel', function(event) {
		    if (event.deltaY > 0) {
		    	$('.main-page-slider').slick('slickPrev');	
		    } else {
		    	$('.main-page-slider').slick('slickNext');
		    }
		});
	}

	function onSliders() {
		$('.main-page-bg-slider').slick({
			arrows: false,
			infinite: false,
			cssEase: 'ease-in-out',	
			fade: true,
			settings: 'slick',
			responsive: [
				{
				breakpoint: 9999,
				settings: 'slick'
				},
				{
				breakpoint: 992,
				settings: 'unslick'
				}
			]
		});

		$('.main-page-slider').slick({
			asNavFor: '.main-page-bg-slider',
			slidesToShow: 1,
			arrows: true,
			nextArrow: '.main-bottom-nav__next-page',
			prevArrow: '',
			infinite: false,
			dots: true,
			appendDots:'.main-pagination',
			draggable: false,
			fade: true,
			cssEase: 'ease-out',
			settings: 'slick',
			responsive: [
				{
				breakpoint: 999999,
				settings: 'slick'
				},
				{
				breakpoint: 992,
				settings: 'unslick'
				}
			]
		});
	}

	function offSliders() {
		$('.main-page-bg-slider').slick('unslick');
		$('.main-page-slider').slick('unslick');
	}
	// Sliders ---start
	

	var themeObject = {
		siteLogo: $('.site-logo'),
		iconAuth: $('.icon__auth'),
		iconSearch: $('.icon__search'),
		btnMenu: $('.main-menu-button'),
		slideContent: $('.main-page-slider__item'),
		mainPagination: $('.main-pagination'),
		copyright: $('.copyright')
	}

	$('.main-page-bg-slider').on('beforeChange', function(slick, currentSlide, nextSlide) {		
		setTimeout(function () {
			var currentSlideIndex,
				currentItem,
				currentPage,
				currentPageData;

			currentSlideIndex = currentSlide.currentSlide;
			currentItem = currentSlide.$slides[currentSlideIndex];
			currentPage = $(currentItem).attr('data-current-page');
			currentPageData = setThemeData(currentPage);

			switchTheme(currentPageData);
		}, 100);	
		
	});

	function setThemeData(currentPage) {
		var pageData = {
			siteLogo: 'dark-theme',
			iconAuth: 'dark-theme',
			iconSearch: 'dark-theme',
			btnMenu: 'dark-theme',
			slideContent: 'dark-theme',
			mainPagination: 'dark-theme',
			copyright: 'dark-theme'
		};
		var btnNextPage = $('.main-bottom-nav__next-page');

		$(btnNextPage).removeClass('animate');
		$(btnNextPage).removeClass('reverse');

		switch (currentPage) {
			case 'main':
				pageData.siteLogo = 'dark-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'dark-theme';
				pageData.mainPagination = 'dark-theme';
				pageData.copyright = 'dark-theme';
				$(btnNextPage).addClass('animate');
				break;
			case 'main-catalog':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-documents':
				pageData.siteLogo = 'dark-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'dark-theme';
				pageData.mainPagination = 'dark-theme';
				pageData.copyright = 'dark-theme';
				playvideo();
				break;
			case 'main-portfolio':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				$(btnNextPage).addClass('reverse')	
				break;
			case 'main-news':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-about':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'dark-theme';
				pageData.iconSearch = 'dark-theme';
				pageData.btnMenu = 'dark-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			case 'main-contacts':
				pageData.siteLogo = 'light-theme';
				pageData.iconAuth = 'light-theme';
				pageData.iconSearch = 'light-theme';
				pageData.btnMenu = 'light-theme';
				pageData.slideContent = 'light-theme';
				pageData.mainPagination = 'light-theme';
				pageData.copyright = 'light-theme';
				break;
			default:								
				break;
		}
		return pageData;
	};

	var bgVideo = document.getElementById("bgVideo");

	if (currentWidth > 992 && bgVideo) {
		bgVideo.autoplay = true;		
	};

	function playvideo(full) {
		if (full) {
			bgVideo.volume = 1;
			if (bgVideo.requestFullscreen) {
            bgVideo.requestFullscreen();
	       } else if (bgVideo.mozRequestFullScreen) {
	            bgVideo.mozRequestFullScreen();
	        } else if (bgVideo.webkitRequestFullscreen) {
	            bgVideo.webkitRequestFullscreen();
	       }
	       bgVideo.currentTime = 0;
			bgVideo.play();
		} else {
			bgVideo.volume = 0;
			bgVideo.currentTime = 26;
			bgVideo.play();
		}
			
	}

	$('.bg-video-button').on('click', function() {
		playvideo('full');
	});

	var onfullscreenchange =  function(e){
	  var fullscreenElement = 
	    document.fullscreenElement || 
	    document.mozFullscreenElement || 
	    document.webkitFullscreenElement;
	  var fullscreenEnabled = 
	    document.fullscreenEnabled || 
	    document.mozFullscreenEnabled || 
	    document.webkitFullscreenEnabled;
	  if(!fullscreenElement) {
	  	bgVideo.volume = 0;
	  }
	}

	// Событие об изменениии режима
	if (bgVideo){
		bgVideo.addEventListener("webkitfullscreenchange", onfullscreenchange);
		bgVideo.addEventListener("mozfullscreenchange",    onfullscreenchange);
		bgVideo.addEventListener("fullscreenchange",       onfullscreenchange);
	}

	function switchTheme(data) {
		var themeClassList = 'dark-theme light-theme';
		for(var key in data){
			themeObject[key].removeClass(themeClassList).addClass(data[key]);			
		}
	}
	// Sliders ---end

	// Events ---start
	var modalDefault = {
		autoOpen: false,
		hide: { effect: "fade" },
		show: { effect: "fade" },
		position: 'absolute',
		open: function(){
			var that = $(this);
			$(this).find('.box-modal_close').on('click', function() {				
				$(that).dialog('close');
			});
			$('html').addClass('ui-dialog-open');
		},
		close: function() {
			$('html').removeClass('ui-dialog-open');
		}
	};

	var searchModal = $('#search-modal'),
		mainMenu = $('#main-menu-modal'); 


	$(searchModal).dialog(modalDefault);
	$(mainMenu).dialog(modalDefault);

	$('.btn-modal').click(function(event) {
		event.preventDefault();
		var targetModal = $(this).data('target-modal');
		$('#' + targetModal).dialog('open');
	});

	// $(window).resize(function () {
	// 	$('.ui-dialog').css({
	// 		'width': $(window).width(),
	// 		'height': $(window).height(),
	// 		'left': '0px',
	// 		'top':'0px'
	// 	});
	// }).resize(); 


	var btnMenulvl1 = $('.main-menu-lvl-1__link--isChild'),
		btnMenulvl2 = $('.main-menu-lvl-2__link');

	$(btnMenulvl1).on('click', function(e) {
		e.preventDefault();
		var targetBlockId = $(this).attr('href');

		$(btnMenulvl1).removeClass('active');
		$(this).addClass('active');

		$('.main-menu-lvl-2').removeClass('active');
		$(targetBlockId).addClass('active');
	});

	$(btnMenulvl2).on('click', function(e) {
		e.preventDefault();

		$(btnMenulvl2).removeClass('active');
		$(this).addClass('active');
		
		$('.main-menu-slider-wrap').addClass('active');
		$('.main-menu-slider').slick('slickGoTo', 1);

	});

	var btnCatalogMenu = $('.btn-catalog-menu'),
		catalogMenuContainer = $('.catalog-menu-wrap');

	$(btnCatalogMenu).on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(catalogMenuContainer).toggleClass('active');
	});
	
	var btnTabs = $('.tabs__link'),
		tabsItem = $('.main-news');

	$(btnTabs).on('click', function(e) {
		e.preventDefault();
		var targetTab = $(this).attr('href');

		$(btnTabs).removeClass('active');
		$(this).addClass('active');

		$(tabsItem).removeClass('active');
		$(targetTab).addClass('active');
	});

	var documentsTabsLink = $('.documents-tabs__item'),
		documentsTabsContent = $('.documents-tabs-content__item');

	tabs(documentsTabsLink, documentsTabsContent); 

	function tabs (tabs, content) {
		$(tabs).eq(0).addClass('active');
		$(content).eq(0).addClass('active');

		$(tabs).on('click', function(event) {
			event.preventDefault();
			var index = $(this).index();

			$(tabs).removeClass('active');
			$(content).removeClass('active');

			$(this).addClass('active');
			$(content).eq(index).addClass('active');

		});
	}



	var btnVideoModal = $('.main-production-video__modal');

	$(btnVideoModal).on('click', function(event) {
		event.preventDefault();
		var videoURL = $(this).data('video-url');
		
		showVideoModal(videoURL);

		// iframe(width="160" height="100" src="?playsinline=1&controls=0" frameborder="0" allowfullscreen)
	});

	function showVideoModal(url) {
		var video = $('<iframe/>', {
		    src: url,
		    frameborder: 0,
		    allowfullscreen: 'allowfullscreen'
		});

		$(video).css({
			width: '100%',
			height: '80vh'
		});

		var modal = $('<div/>', {
		    class: 'modal-video container',
		    html: video
		}).appendTo('body');		
	}
	

	var btnScrollUp = $('.scroll-up__button');

	$(btnScrollUp).on('click', function() {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0},1000);
	});	

	var header = $('.header'),        
		headerHeight = $('.header').height()*2;        
     
    $(window).scroll(function(){        
    	var topScroll = $(this).scrollTop(); 
         
        if (topScroll < headerHeight) {
            $(header).removeClass('header-fixed');
        } else {
            $(header).addClass('header-fixed');
        }
    });

    var btnCatalogMenu = $('.catalog-header__current-category'),
		catalogMenu = $('.catalog-header-menu');

	$(btnCatalogMenu).on('click', function() {
		$(catalogMenu).toggleClass('active');
	});

	var btnPersonalMenu = $('.personal-menu-btn'),
		personalMenu = $('.personal-menu');

	$(btnPersonalMenu).on('click', function() {
		$(personalMenu).toggleClass('active');
	});

	var btnFilterMobile = $('.catalog-filter-mobile__button'),
		filterMobile = $('.catalog-filter');
		
	$(btnFilterMobile).on('click', function() {
		$(filterMobile).toggleClass('active');
	});

	var shareBtn = $('.share-block__btn-open'),
		sharePanel = $('.share-block__panel');

	$(shareBtn).on('click', function(event) {
		event.preventDefault();
		$(sharePanel).toggleClass('active');
	});
	// Events ---end

	// Custom select ---start

	$('.catalog-filter-item__checkbox input').styler();
	$('.personal-form__subscribe input').styler();

	
	// Custom select ---end

	// Flexibility ---start

	// flexibility(document.querySelector('.header.main-row .container'));
	// flexibility(document.querySelector('.header__panel'));

	// Flexibility ---end
});