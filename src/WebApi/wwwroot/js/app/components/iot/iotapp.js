var data1 =0;
define(['knockout', 'dataservice', 'config', 'postbox', 'toastr'],
    function (ko, dataService, config, postbox, toastr) {
        return function (params) {
           
            var demo1 = ko.observable();
            var demo2 = ko.observable();
            var SeeMore2 = ko.observable();
            var sdata = ko.observableArray([]);
            var getJson = ko.observable(params ? params.txtiot : undefined);
            var page = ko.observable();
            var nextUrl = ko.observable();
            var lu = ko.observable()
            //var vOneLS = localStorage.getItem("vOneLocalStorage ");
            
            /*while (typeof window.data3 == 'undefined') {
                console.log("wait for loading json");
            }*/
            //console.log(window.data3);
            
            //sdata(window.data3);
            
            
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'http://192.168.1.56:8089?callback=iotapp.myCallbackFunction';
            var h = document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
            
            var changeButtonText = function () {
                
                };
            var setData = function (result) {};
           
            var change1 = function () {
                
            }
            console.log(myCallbackFunction());
            //console.log(tryiot());
            /*
            function myCallbackFunction(data) {
                console.log(data);
            }
            function myCallbackFunction(data) {
                $('body').text(data);
            }
            */
            //SeeMore2(window.data2);
            var change = function () {
                //myCall.clickB();
                //console.log(window.data1);
                //SeeMore2(window.data2);
                //var xhr = new XMLHttpRequest();
               // xhr.open('GET', 'http://192.168.1.56:8089/LED=OFF/', true);
               // xhr.send();
                //sdata(window.data3)
            }
            setTimeout(function () {
                console.log(data1);
                sdata(data1);
            }, 2000);
            
               // console.log(change());
                //var buttonText = ko.observable(change());
            return {
                demo1,
                demo2, SeeMore2, change, changeButtonText, sdata

            };
        };
    });
function myCallbackFunction(data) {
    console.log(data);
    data1 = data;
}