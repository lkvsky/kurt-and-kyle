require.config({

    paths: {
        jquery: 'lib/jquery'
    }

});

require(['app'], function(App){
    App.initialize();
});