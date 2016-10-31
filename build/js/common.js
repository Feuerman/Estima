$(window).on("load",function(){var e=$("#page-preloader"),t=e.find(".spinner");t.delay(500).fadeOut(),e.delay(500).fadeOut("slow")}),$(document).ready(function(){"use strict";function e(e,t){var s=$(t).find(".active").parent(".tabs__item").index();switch(e){case"prev":$(t).find(".tabs__item").eq(s-1).find(".tabs__link").trigger("click");break;case"next":$(t).find(".tabs__item").eq(s+1).find(".tabs__link").trigger("click")}}function t(){$(".main-page-bg-slider").slick({arrows:!1,infinite:!1,cssEase:"ease-in-out",fade:!0,settings:"slick",responsive:[{breakpoint:9999,settings:"slick"},{breakpoint:992,settings:"unslick"}]}),$(".main-page-slider").slick({asNavFor:".main-page-bg-slider",slidesToShow:1,arrows:!0,nextArrow:".main-bottom-nav__next-page",prevArrow:"",infinite:!1,dots:!0,appendDots:".main-pagination",draggable:!1,fade:!0,cssEase:"ease-out",settings:"slick",responsive:[{breakpoint:999999,settings:"slick"},{breakpoint:992,settings:"unslick"}]})}function s(e){var t={siteLogo:"dark-theme",iconAuth:"dark-theme",iconSearch:"dark-theme",btnMenu:"dark-theme",slideContent:"dark-theme",mainPagination:"dark-theme",copyright:"dark-theme"},s=$(".main-bottom-nav__next-page"),a=$(".main-bottom-nav__prev-page");switch($(s).removeClass("animate"),$(s).removeClass("reverse"),$(a).removeClass("active-nav"),$(s).addClass("active-nav"),e){case"main":t.siteLogo="dark-theme",t.iconAuth="dark-theme",t.iconSearch="dark-theme",t.btnMenu="dark-theme",t.slideContent="dark-theme",t.mainPagination="dark-theme",t.copyright="dark-theme",$(s).addClass("animate");break;case"main-catalog":t.siteLogo="light-theme",t.iconAuth="light-theme",t.iconSearch="light-theme",t.btnMenu="light-theme",t.slideContent="light-theme",t.mainPagination="light-theme",t.copyright="light-theme";break;case"main-documents":t.siteLogo="dark-theme",t.iconAuth="dark-theme",t.iconSearch="dark-theme",t.btnMenu="dark-theme",t.slideContent="dark-theme",t.mainPagination="dark-theme",t.copyright="dark-theme",i();break;case"main-portfolio":t.siteLogo="light-theme",t.iconAuth="light-theme",t.iconSearch="light-theme",t.btnMenu="light-theme",t.slideContent="light-theme",t.mainPagination="light-theme",t.copyright="light-theme",$(s).addClass("reverse"),$(a).addClass("active-nav"),$(s).removeClass("active-nav");break;case"main-news":t.siteLogo="light-theme",t.iconAuth="light-theme",t.iconSearch="light-theme",t.btnMenu="light-theme",t.slideContent="light-theme",t.mainPagination="light-theme",t.copyright="light-theme";break;case"main-about":t.siteLogo="light-theme",t.iconAuth="dark-theme",t.iconSearch="dark-theme",t.btnMenu="dark-theme",t.slideContent="light-theme",t.mainPagination="light-theme",t.copyright="light-theme";break;case"main-contacts":t.siteLogo="light-theme",t.iconAuth="light-theme",t.iconSearch="light-theme",t.btnMenu="light-theme",t.slideContent="light-theme",t.mainPagination="light-theme",t.copyright="light-theme"}return t}function i(e){e?(m.volume=1,m.requestFullscreen?m.requestFullscreen():m.mozRequestFullScreen?m.mozRequestFullScreen():m.webkitRequestFullscreen&&m.webkitRequestFullscreen(),m.currentTime=0,m.play()):(m.volume=0,m.currentTime=26,m.play())}function a(e){var t="dark-theme light-theme";for(var s in e)d[s].removeClass(t).addClass(e[s])}function o(e,t){$(e).eq(0).addClass("active"),$(t).eq(0).addClass("active"),$(e).on("click",function(s){s.preventDefault();var i=$(this).index();$(e).removeClass("active"),$(t).removeClass("active"),$(this).addClass("active"),$(t).eq(i).addClass("active")})}function n(e){var t=$("<iframe/>",{src:e,frameborder:0,allowfullscreen:"allowfullscreen"});$(t).css({width:"100%",height:"80vh"});$("<div/>",{class:"modal-video container",html:t}).appendTo("body")}$(".company-slider").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!0,fade:!0,nextArrow:".company-slider__nav-next",prevArrow:".company-slider__nav-prev"}),$(".company-slider").on("beforeChange",function(e,t,s){var i=$(".main-page-bg__changeImage"),a=["url('img/bg__main--first.jpg')","url('img/bg__main--first-1.jpg')","url('img/bg__main--first-2.jpg')"],o=Math.floor(Math.random()*a.length);$(i).css("background-image",a[o])}),$(".main-menu-slider").slick({arrows:!0,nextArrow:$(this).find(".arrow-next"),prevArrow:$(this).find(".arrow-prev"),slidesToShow:2,rows:3}),$(".main-catalog-slider").slick({arrows:!0,nextArrow:".main-catalog-slider--next",prevArrow:".main-catalog-slider--prev"}),$(".news-slider.mobile").slick({autoplay:!0,autoplaySpeed:5e3,arrows:!1,dots:!0,appendDots:".news-slider-mobile-dots"}),$(".news-slider.desktop").slick({arrows:!1,dots:!0,appendDots:".news-slider-dots"});var r=$(".main-news-nav");$(r).on("click",function(t){t.preventDefault();var s=$(this).data("action"),i=$(".tabs--main-news");e(s,i)}),$(".main-news-slider-mobile").slick({arrows:!1,dots:!0}),$(".main-portfolio-slider").slick({slidesToShow:2,slidesToScroll:2,infinite:!0,arrows:!0,nextArrow:".main-portfolio-slider--next",prevArrow:".main-portfolio-slider--prev",responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".cart-slider").slick({arrows:!1,dots:!1,asNavFor:".cart-slider-thumb"}),$(".cart-slider-thumb").slick({slidesToScroll:1,slidesToShow:3,arrows:!0,focusOnSelect:!0,nextArrow:".cart-slider--next",prevArrow:".cart-slider--prev",asNavFor:".cart-slider",responsive:[{breakpoint:768,settings:{dots:!0,dotsClass:"custom_paging",customPaging:function(e,t){return'<span class="custom_paging__current">'+(t+1)+"</span>/"+e.slideCount}}}]}),$(".model-top-slider").slick({arrows:!1,dots:!0,appendDots:".model-top-slider__nav",cssEase:"ease-in-out",speed:1e3}),$(".model-slider").slick({arrows:!1,dots:!1,cssEase:"ease-in-out",speed:1e3,asNavFor:".model-slider-thumbs"}),$(".model-slider-thumbs").slick({draggable:!1,slidesToScroll:1,slidesToShow:4,arrows:!0,focusOnSelect:!0,nextArrow:$(".model-arrows .arrow-next"),prevArrow:$(".model-arrows .arrow-prev"),dots:!1,cssEase:"ease-in-out",speed:1e3,asNavFor:".model-slider",responsive:[{breakpoint:992,settings:{slidesToShow:3}}]}),$(".news-detail-slider").slick({arrows:!1,dots:!1,cssEase:"ease-in-out",speed:1e3,asNavFor:".news-detail-slider-thumbs"}),$(".news-detail-slider-thumbs").slick({draggable:!1,slidesToScroll:1,slidesToShow:5,arrows:!0,focusOnSelect:!0,nextArrow:$(".news-detail-arrows .arrow-next"),prevArrow:$(".news-detail-arrows .arrow-prev"),dots:!1,cssEase:"ease-in-out",speed:1e3,asNavFor:".news-detail-slider",responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:6}},{breakpoint:600,settings:{dots:!0,dotsClass:"custom_paging",customPaging:function(e,t){return'<span class="custom_paging__current">'+(t+1)+"</span>/"+e.slideCount}}}]}),$(".recommend-slider").slick({infinity:!0,swipeToSlide:!0,touchThreshold:5,slidesToShow:5,arrows:!0,nextArrow:".recommend-slider--next",prevArrow:".recommend-slider--prev",responsive:[{breakpoint:850,settings:{slidesToShow:3}},{breakpoint:440,settings:{slidesToShow:2}}]}),$(".catalog-menu-slider").slick({slidesToShow:4,slidesToScroll:2,rows:2,arrows:!0,nextArrow:".catalog-menu-slider__arrows-right",prevArrow:".catalog-menu-slider__arrows-left",responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:550,settings:{slidesToShow:1}}]}),$(".history-slider").slick({arrows:!0,dots:!1,cssEase:"ease-in-out",fade:!0,speed:1e3,asNavFor:".history-slider-years, .history-slider-bg",nextArrow:$(".history-slider-arrows .arrow-next"),prevArrow:$(".history-slider-arrows .arrow-prev")}),$(".history-slider-years").slick({slidesToScroll:1,slidesToShow:10,arrows:!1,vertical:!0,adaptiveHeight:!0,focusOnSelect:!0,dots:!1,cssEase:"ease-in-out",speed:1e3,asNavFor:".history-slider, .history-slider-bg",responsive:[{breakpoint:600,settings:{vertical:!1,arrows:!0,slidesToScroll:1,slidesToShow:3,centerMode:!0}}]}),$(".history-slider-bg").slick({slidesToShow:1,arrows:!1,dots:!1,cssEase:"ease-in-out",speed:1e3});var l=$("body").width();l>992&&(t(),$("body").on("mousewheel",function(e){e.deltaY>0?$(".main-page-slider").slick("slickPrev"):$(".main-page-slider").slick("slickNext")}));var c=$(".main-bottom-nav__prev-page");$(c).on("click",function(e){e.preventDefault(),$(".main-page-slider").slick("slickGoTo",0)});var d={siteLogo:$(".site-logo"),iconAuth:$(".icon__auth"),iconSearch:$(".icon__search"),btnMenu:$(".main-menu-button"),slideContent:$(".main-page-slider__item"),mainPagination:$(".main-pagination"),copyright:$(".copyright")};$(".main-page-bg-slider").on("beforeChange",function(e,t,i){setTimeout(function(){var e,i,o,n;e=t.currentSlide,i=t.$slides[e],o=$(i).attr("data-current-page"),n=s(o),a(n)},100)});var m=document.getElementById("bgVideo");l>992&&m&&(m.autoplay=!0),$(".bg-video-button").on("click",function(){i("full")});var h=function(e){var t=document.fullscreenElement||document.mozFullscreenElement||document.webkitFullscreenElement;document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled;t||(m.volume=0)};m&&(m.addEventListener("webkitfullscreenchange",h),m.addEventListener("mozfullscreenchange",h),m.addEventListener("fullscreenchange",h));var u={autoOpen:!1,hide:{effect:"fade"},show:{effect:"fade"},position:"absolute",open:function(){var e=$(this);$(this).find(".box-modal_close").on("click",function(){$(e).dialog("close")}),$("html").addClass("ui-dialog-open")},close:function(){$("html").removeClass("ui-dialog-open")}},g=$("#search-modal"),p=$("#main-menu-modal");$(g).dialog(u),$(p).dialog(u),$(".btn-modal").click(function(e){e.preventDefault();var t=$(this).data("target-modal");$("#"+t).dialog("open")});var v=$(".main-menu__link--isChild"),w=$(".main-menu-sub__link");$(v).on("click",function(e){e.preventDefault(),$(this).addClass("active"),$(".main-menu-sub").addClass("active")}),$(w).on("click",function(e){e.preventDefault(),$(w).removeClass("active"),$(this).addClass("active"),$(".main-menu-slider-wrap").addClass("active"),$(".main-menu-slider").slick("slickGoTo",1)});var k=$(".btn-catalog-menu"),b=$(".catalog-menu-wrap");$(k).on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(b).toggleClass("active")});var f=$(".btn-menu-dropdown"),_=$(".menu-dropdown a");$(f).on("click",function(e){$(this).siblings(".menu-dropdown").toggleClass("active")}),$(_).on("click",function(e){var t=$(this).text();$(this).parents(".menu-dropdown").toggleClass("active"),$(this).parents(".menu-dropdown").siblings(".btn-menu-dropdown").text(t)});var C=$(".tabs__item"),S=$(".news-content");o(C,S);var y=$(".documents-tabs__item"),T=$(".documents-tabs-content__item");o(y,T);var y=$(".documents-page-tabs__item"),T=$(".documents-tabs-content__item");o(y,T);var x=$(".main-production-video__modal");$(x).on("click",function(e){e.preventDefault();var t=$(this).data("video-url");n(t)});var A=$(".scroll-up__button");$(A).on("click",function(){event.preventDefault(),$("html, body").animate({scrollTop:0},1e3)});var E=$(".header"),F=2*$(".header").height();$(window).scroll(function(){var e=$(this).scrollTop();e<F?$(E).removeClass("header-fixed"):$(E).addClass("header-fixed")});var k=$(".catalog-header__current-category"),D=$(".catalog-header-menu");$(k).on("click",function(){$(D).toggleClass("active")});var L=$(".personal-menu-btn"),M=$(".personal-menu");$(L).on("click",function(){$(M).toggleClass("active")});var P=$(".catalog-filter-mobile__button"),q=$(".catalog-filter");$(P).on("click",function(){$(q).toggleClass("active")});var N=$(".share-block__btn-open"),O=$(".share-block__panel");$(N).on("click",function(e){e.preventDefault(),$(O).toggleClass("active")}),$(".catalog-filter-item__checkbox input").styler(),$(".personal-form__subscribe input").styler()});