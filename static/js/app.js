define(['jquery'], function ($) {
    'use strict';

    var App = {
        headerOffset: 84,

        initialize: function () {
            App.createElements();
            App.attachEvents();
        },

        createElements: function () {
            App.hamburger = $('.hamburger');
            App.navList = $('.nav-list');
            App.navLinks = $('nav a');
        },

        attachEvents: function () {
            App.hamburger.click(App.onNavListClick);
            App.navLinks.click(App.onNavLinkClick);
        },

        onNavListClick: function () {
            App.navList.toggleClass('active');
        },

        onNavLinkClick: function (e) {
            var target = $($(e.currentTarget).attr('href'));

            if (App.navList.hasClass('active')) {
                App.navList.removeClass('active');
            }

            $('html, body').animate({
                scrollTop: target.offset().top - App.headerOffset
            }, 300);
        }
    };

    return App;
});