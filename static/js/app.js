define(['jquery'], function ($) {
    'use strict';

    var App = {
        primaryGray: '#cacaca',

        sublayerTop: 80,

        mapBreakpoint: 500,

        accomodationBreakpoint: 1150,

        usBreakpoint: 1800,

        initialize: function () {
            App.createElements();
            App.drawCrystal(App.whenCrystal, '#cacaca', App.drawWhenCrystal);
            App.attachEvents();
            App.activeSublayer = App.introEl;
            App.onWindowScroll();
        },

        createElements: function () {
            App.whenCrystal = $('.when-crystal.crystal')[0];
            App.windowEl = $(window);
            App.sublayer = $('.sublayer');
            App.registryLink = $('.registry-link');
            App.registryList = $('.registry-list');
        },

        attachEvents: function () {
            App.windowEl.on('touchmove', App.onWindowScroll);
            App.windowEl.scroll(App.onWindowScroll);
            App.registryLink.click(App.onRegistryClick);
        },

        onWindowScroll: function () {
            var scrollTop = App.windowEl.scrollTop(),
                currentTop = parseInt(App.sublayer.css('top'), 10),
                offset;

            if (scrollTop > App.mapBreakpoint && scrollTop < App.accomodationBreakpoint) {
                offset = - (App.sublayerTop + scrollTop - App.mapBreakpoint);
            } else if (scrollTop >= App.accomodationBreakpoint && scrollTop < App.usBreakpoint) {
                offset = - 350 - (scrollTop / 3);
            } else if (scrollTop >= App.usBreakpoint) {
                offset = - (App.sublayerTop + scrollTop - 930);
            } else {
                offset = App.sublayerTop - (scrollTop / 3);
            }

            App.sublayer.css('top', offset);
        },

        onRegistryClick: function () {
            if (App.registryLink.hasClass('active')) {
                App.registryLink.removeClass('active');
                App.registryList.removeClass('open');
            } else {
                App.registryLink.addClass('active');
                App.registryList.addClass('open');
            }
        },

        drawCrystal: function ($el, color, draw) {
            var ctx = $el.getContext('2d');

            ctx.canvas.width = 301;
            ctx.canvas.height = 251;

            draw(ctx);

            ctx.closePath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = color;
            ctx.stroke();
        },

        drawWhenCrystal: function (ctx) {
            ctx.beginPath();
            ctx.moveTo(1, 50);
            ctx.lineTo(100, 1);
            ctx.lineTo(200, 20);
            ctx.lineTo(299, 175);
            ctx.lineTo(260, 249);
            ctx.lineTo(40, 150);
            ctx.lineTo(1, 50);
        }
    };

    return App;
});