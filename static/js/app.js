define(['jquery'], function ($) {
    'use strict';

    var App = {
        primaryGray: '#cacaca',

        initialize: function () {
            App.createElements();
            App.drawCrystal(App.whenCrystal, '#cacaca', App.drawWhenCrystal);
            // App.drawCrystal(App.whereCrystal, '#1a1a1a', App.drawWhereCrystal);
            App.attachEvents();
            App.activeSublayer = App.introEl;
            App.onWindowScroll();
        },

        createElements: function () {
            App.whenCrystal = $('.when-crystal.crystal')[0];
            App.whereCrystal = $('.where-crystal.crystal')[0];
            App.windowEl = $(window);
            App.introEl = $('.intro');
            App.whenEl = $('.where');
        },

        attachEvents: function () {
            App.windowEl.scroll(App.onWindowScroll);
        },

        onWindowScroll: function () {
            var scrollTop = App.windowEl.scrollTop();

            if (scrollTop > 600 && App.activeSublayer !== App.whenEl) {
                App.activeSublayer.addClass('hide');
                App.whenEl.removeClass('hide');
                App.activeSublayer = App.whenEl;
            }

            if (scrollTop <= 600 && App.activeSublayer !== App.introEl) {
                App.activeSublayer.addClass('hide');
                App.introEl.removeClass('hide');
                App.activeSublayer = App.introEl;
            }

            if (App.activeSublayer.hasClass('hide')) {
                App.activeSublayer.removeClass('hide');
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
        },

        drawWhereCrystal: function (ctx) {
            ctx.beginPath();
            ctx.moveTo(10, 40);
            ctx.lineTo(200, 20);
            ctx.lineTo(250, 100);
            ctx.lineTo(299, 175);
            ctx.lineTo(150, 249);
            ctx.lineTo(1, 150);
            ctx.lineTo(10, 40);
        }
    };

    return App;
});