﻿(function (undefined) {
    require.config({
        baseUrl: "js",
        paths: {
            "jquery": "lib/jquery/dist/jquery.min",
            "knockout": "lib/knockout/dist/knockout",
            "text": "lib/requirejs-text/text",
            "boostrap": "lib/boostrap/lib/js/dist/bootstrap.min",
            "toastr": "lib/toastr/toastr.min",
            "dataservice": "app/services/dataService",
            "postbox": "app/services/postbox",
            "config": "app/config",
            "jqcloud2": "lib/jqcloud2/dist/jqcloud.min",
            "myCallback": "app/services/callb",
            "myCall": "lib/cl"

        },
        shim: {
            "bootstrap": { "deps": ['jquery'] }
        }
    });

    require(['knockout'], function (ko) {
        ko.components.register("my-app", {
            viewModel: { require: 'app/components/app/app' },
            template: { require: 'text!app/components/app/appView.html' }
        });
        ko.components.register("annotation-list",
        {
            viewModel: { require: "app/components/annotation/annotationList" },
            template: { require: "text!app/components/annotation/annotationListView.html" }
        });
        ko.components.register("annotation-details",
        {
            viewModel: { require: "app/components/annotation/annotationDetails" },
            template: { require: "text!app/components/annotation/annotationDetailsView.html" }
        });
        ko.components.register("search-list",
        {
            viewModel: {
                require: "app/components/search/search"
            },
            template: { require: "text!app/components/search/searchView.html" }
        });
        ko.components.register("search-detail", {
            viewModel: { require: 'app/components/search/searchDetail' },
            template: { require: 'text!app/components/search/searchDetailView.html' }
        });

        ko.components.register('search-history',
            {
                viewModel: { require: 'app/components/history/historyList' },
                template: { require: 'text!app/components/history/historyListView.html' }
            });
        ko.components.register("word-cloud",
        {
            viewModel: { require: "app/components/wordcloud/wordcloud" },
            template: { require: "text!app/components/wordcloud/wordcloudView.html" }
        });
        ko.components.register("about",
        {
            template: { require: "text!app/components/about/about.html" }
        });
        ko.components.register("iot",
        {
            viewModel: { require: "app/components/iot/login" },
            template: { require: "text!app/components/iot/loginView.html" }
        });
        ko.components.register("loggedin",
       {
           viewModel: { require: "app/components/iot/iotapp" },
           template: { require: "text!app/components/iot/iotView.html" }
       });
        ko.components.register("cv",
       {
          viewModel: { require: "app/components/CV/CVapp" },
           template: { require: "text!app/components/CV/CV.html" }
       });
        ko.components.register("anologin",
        {
            viewModel: { require: "app/components/annotation/anologin" },
            template: { require: "text!app/components/annotation/anologinView.html" }
        });
        ko.components.register("comment",
        {
            viewModel: { require: "app/components/CV/commentapp" },
            template: { require: "text!app/components/CV/commentView.html" }
        });
        
    });

    require(['knockout'], function (ko) {
        ko.applyBindings();
    });

})();