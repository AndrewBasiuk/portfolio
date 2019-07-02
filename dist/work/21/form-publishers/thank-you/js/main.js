"use strict";

$(function() {

    $.each( $( '.site__header-wrap' ), function() {
        new Menu ( $( this ) );
    } );

    $.each( $( '.networks' ), function(){
        new MembersGallery ( $( this ) );
    } );

    $.each( $( '.stories' ), function(){
        new StoriesGallery ( $( this ) );
    } );

    $.each($('.tabs'), function () {
        new Tabs( $( this ) );
    });

    $.each( $( '.site-form_validation' ), function() {
        new FormValidation ( $( this ) )
    } );

    $.each( $( '.site' ), function() {
        new Page ( $( this ) );
    } );

} );

let Menu = function ( obj ) {

    let _obj = obj,
        _showBtn = $( '.site__header-btn' ),
        _body = $( 'body' ),
        _window = $( window ),
        _opened = false;

    let _hide = function() {
            _opened = false;
            _obj.removeClass( 'opened' );
            _showBtn.removeClass( 'opened' );
        },
        _show = function() {
            _opened = true;
            _obj.addClass( 'opened' );
            _showBtn.addClass( 'opened' );
        },
        _addEvents = function() {

            _showBtn.on( {
                click: function( event ) {

                    event.stopPropagation();
                    if( _opened ){
                        _hide();
                    } else {
                        _show();
                    }
                    return false;
                }
            } );

            _body.on( {
                click: function() {
                    if( _opened ){
                        _hide();
                    }
                }
            } );

            _obj.on( {
                click: function( event ) {
                    event.stopPropagation();
                }
            } );

            _window.on( {
                resize: function() {
                    if( _opened ){
                        _hide();
                    }
                },
                scroll: function() {
                    if( _opened ){
                        _hide();
                    }
                }
            } );

        },
        _init = function() {
            _addEvents();
        };

    _init();

};

let MembersGallery = function ( obj ) {

    let _obj = obj,
        _swiper,
        _btnPrev = _obj.find( '.swiper-button-prev' ),
        _btnNext = _obj.find( '.swiper-button-next'),
        _swiperContainer = _obj.find( '.swiper-container' );

    let _initSwiper = function(){

            _swiper = new Swiper( _swiperContainer, {
                nextButton: _btnNext,
                prevButton: _btnPrev,
                slidesPerView: 5,
                speed: 800,
                spaceBetween: 0,
                breakpoints: {
                    540: {
                        slidesPerView: 2
                    },
                    800: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    },
                },
                autoplayDisableOnInteraction: false
            });

        },
        _init = function () {
            _initSwiper();
        };

    _init();

};

let StoriesGallery = function ( obj ) {

    let _obj = obj,
        _swiper,
        _btnPrev = _obj.find( '.swiper-button-prev' ),
        _btnNext = _obj.find( '.swiper-button-next'),
        _pagination = _obj.find( '.swiper-pagination' ),
        _swiperContainer = _obj.find( '.swiper-container' );

    let _initSwiper = function(){

            _swiper = new Swiper( _swiperContainer, {
                nextButton: _btnNext,
                prevButton: _btnPrev,
                slidesPerView: 3,
                speed: 800,
                spaceBetween: 0,
                pagination: _pagination,
                slidesPerGroup: 3,
                breakpoints: {
                    540: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                },
                autoplayDisableOnInteraction: false
            });

        },
        _init = function () {
            _initSwiper();
        };

    _init();

};

let Tabs = function (obj) {

    let _obj = obj,
        _window = $(window),
        _tabBtn = _obj.find('.tabs__controls-wrap > div'),
        _tabBtnInner = _tabBtn.find('> span'),
        _tabContent = _obj.find('.tabs__wrapper'),
        _tabContentItem = _tabContent.find('> div');

    let _showContent = function(i){
            let activeContent = _tabContentItem.eq(i);
            _tabContentItem.css({
                "display": "none"
            });
            activeContent.css({
                "display": "block"
            });
        },
        _showContentWhenLoading = function(){
            let index = _tabBtn.filter('.active').index();
            if ( index === -1 ){
                index = 0;
                _tabBtn.eq(index).addClass("active");
            }
            _showContent(index);
        },
        _showContentWhenLoad = function(){

            let activeMenuItem = _tabBtn.filter('.active');

            activeMenuItem ? _showContent(activeMenuItem.index()) : _showContent(0);

        },
        _addEvents = function () {

            _window.on({
                'load': function(){
                    _showContentWhenLoading();
                }
            });

            _tabBtnInner.on({
                click: function(){
                    let curItem = $(this),
                        parent = curItem.parent(),
                        index = parent.index();
                    _tabBtn.removeClass("active");
                    _tabBtn.eq(index).addClass("active");
                    _showContent(index);
                }
            });

        },
        _init = function () {
            _showContentWhenLoad();
            _addEvents();
        };

    _init();
};

let FormValidation = function( obj ) {

    let _self = this,
        _obj = obj,
        _path = _obj.attr( 'action' ),
        _inputs = _obj.find( '[required]' ),
        _select = _obj.find('select'),
        _checkBox = _obj.find('.nice-check input'),
        _feedbackError = _obj.find('.site-form__feedback'),
        _request = new XMLHttpRequest();

    let _getCookie = function(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        _ajaxRequest = function() {

            $("#referrer").val(window.location.href);
            $("#hubspotutk").val(_getCookie('hubspotutk'));
            _request.abort();
            _request = $.ajax({
                url: 'https://dashboard.mgid.com/user/self-serve-signup',
                data: _obj.serialize(),
                dataType: 'multipart/form-data',
                timeout: 20000,
                type: "POST",
                success: function () {

                    _feedbackError.empty();
                    _obj.trigger( 'reset' );
                    window.location.href = _path;

                },
                error: function ( XMLHttpRequest ) {

                    if( XMLHttpRequest.statusText !== "abort" ) {
                        let response = JSON.parse(XMLHttpRequest.responseText);
                        if (response.status === "success") {
                            window.location.href = _path;
                        } else {
                            grecaptcha.reset();
                            _feedbackError.empty().append('<span>'+ response.data +'</span>');
                        }
                    }

                }
            });

        },
        _addEvents = function() {

            _obj.on({

                'submit': function(){

                    $.each( _inputs, function(){

                        let curItem = $(this),
                            curAttr = curItem.attr( 'type' );

                        if ( curItem.val() === '' ) {
                            curItem.addClass( 'site-form__error' );
                        }

                        if ( curAttr === 'email' ){
                            let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if ( pattern.test( curItem.val() ) === false ){
                                curItem.addClass( 'site-form__error' );
                            }
                        }

                        if ( curAttr === 'url' ){
                            let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                            if ( pattern.test( curItem.val() ) === false ){
                                curItem.addClass( 'site-form__error' );
                            }
                        }

                        if ( curAttr === 'checkbox' ){

                            if ( curItem[0].checked === false ){

                                curItem.parents('.nice-check').addClass( 'site-form__error' );

                            }

                        }

                        if ( curItem.is('select') ){

                            if ( curItem.val() === null ) {
                                curItem.parents('.nice-select').addClass( 'site-form__error' );
                            }

                        }

                    } );

                    if ( _obj.find( '.site-form__error' ).length ){
                        return false;
                    } else {
                        _ajaxRequest();
                    }

                    return false;

                }

            });

            _inputs.on({

                'focus': function(){

                    let curItem = $( this );

                    if( curItem.hasClass( 'site-form__error' )){
                        curItem.removeClass( 'site-form__error' );
                    }

                }

            });

            _select.on({

                change: function() {

                    const curElem = $(this);
                    curElem.parents('.nice-select').removeClass( 'site-form__error' );

                }

            });

            _checkBox.on({

                change: function() {

                    const curElem = $(this);
                    curElem.parents('.nice-check').removeClass( 'site-form__error' );

                }

            });

        },
        _init = function () {
            _addEvents();
            _obj[ 0 ].obj = _self;
        };

    _init();

};

let Page = function( obj ) {

    let _obj = obj,
        _form = _obj.find( '.launch' ),
        _header = _obj.find( '.site__header' ),
        _menuItem = _obj.find( '.menu__item-scroll' ),
        _btnScrollToForm = _obj.find( '.goToForm' ),
        _top,
        _increase = _obj.find( '.site__increase' ),
        _footer = _obj.find( '.site__footer' ),
        _window = $( window );

    let _scrollToBlock = function( e, menuItem ) {

            let headerHeight = _header.innerHeight(),
                top = $(menuItem.attr('href')).offset().top - headerHeight;

            $('html, body').stop().animate({
                scrollTop: top
            }, 1000);
            e.preventDefault();

        },

        _calculateFooterHeight = function(){

            _increase.css({
                height: _footer.innerHeight()
            });

        },

        _scrollToForm = function( e ) {

            let top = _form.offset().top;

            $( 'html, body' ).stop().animate({
                scrollTop: top
            }, 500);
            e.preventDefault();

        },

        _addEvents = function() {

            _window.on({

                load: function(){

                    _top = _window.scrollTop();

                    _calculateFooterHeight();

                },

                scroll: function(){

                    _top = _window.scrollTop();

                },

                resize: function(){
                    _calculateFooterHeight();
                }

            });

            _btnScrollToForm.on({

                click: function( e ){

                    _scrollToForm( e );

                }

            });

            _menuItem.on({

                click: function( e ){

                    _scrollToBlock( e, $( this ) );

                }

            });

        },

        _init = function() {

            _calculateFooterHeight();
            _addEvents();

        };

    _init();

};