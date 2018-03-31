/*
var myCallbackFunction = function (data) {
    //demo1 = data.temp;
    console.log(data);
    return data;
}
*/
define(['jquery', 'postbox', 'config','myCallback'], function ($, postbox, config, myCallback) {
    //var data;
    
    var clickB = function (result) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://192.168.1.56:8089?callback=iotapp.myCallbackFunction';
        var h = document.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
    }
    //console.log(clickB(data));
    return {
        clickB
    };
});