﻿define(['knockout', 'postbox', 'config'], function (ko, postbox, config) {
    return function () {
        var menuItems = [
            { title: config.menuItems.cv, component: 'cv' },
            { title: config.menuItems.iot, component: 'iot' },
            { title: config.menuItems.search, component: 'search-list' },
            { title: config.menuItems.history, component: 'search-history' },
            { title: config.menuItems.annotations, component: 'anologin' },
            { title: config.menuItems.cloud, component: 'word-cloud' },
            { title: config.menuItems.about, component: 'about' }
            
        ];
        var currentParams = ko.observable();
        var currentComponent = ko.observable();
        var selectedMenu = ko.observable();

        var selectMenu = function (menu) {
            selectedMenu(menu);
            currentComponent(menu.component);
        };

        var isSelected = function (menu) {
            return menu === selectedMenu();
        };
        postbox.subscribe(config.events.selectSearch, function (params) {
            currentParams(params);
            console.log(params);
            currentComponent("search-list");
        });
        postbox.subscribe(config.events.changeMenu, function (title) {
            for (var i = 0; i < menuItems.length; i++) {
                if (menuItems[i].title === title) {
                    selectMenu(menuItems[i]);
                    break;
                }
            }
        });
        postbox.subscribe(config.events.loggedin, function () {
            console.log("ok");
            currentComponent("loggedin");
        });

        postbox.subscribe(config.events.anologin, function () {
            console.log("ok");
            currentComponent("annotation-list");
        });

        postbox.subscribe(config.events.comment, function () {
            console.log("ok");
            currentComponent("comment");
        });
        selectMenu(menuItems[0]);

        return {
            menuItems,
            currentComponent,
            currentParams,
            selectMenu,
            isSelected
        };
    };
});