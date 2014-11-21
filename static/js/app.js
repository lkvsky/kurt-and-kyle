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
        },

        createElements: function () {
            App.whenCrystal = $('.when-crystal.crystal')[0];
            App.windowEl = $(window);
            App.registryLink = $('.registry-link');
            App.registryList = $('.registry-list');
        },

        attachEvents: function () {
            App.registryLink.click(App.onRegistryClick);
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