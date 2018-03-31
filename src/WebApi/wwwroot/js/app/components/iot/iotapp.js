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
            var lu = ko.observable();
            var selected = ko.observable();
            //var vOneLS = localStorage.getItem("vOneLocalStorage ");
            
            /*while (typeof window.data3 == 'undefined') {
                console.log("wait for loading json");
            }*/
            //console.log(window.data3);
            
            //sdata(window.data3);
            var buttonText = ko.observable();

            var changeButtonText = ko.observable();
            
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'http://192.168.1.56:8089?callback=iotapp.myCallbackFunction';
            var h = document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
            
            
            var setData = function (result) {};
           
            var change1 = function () {
                
            }
            changeButtonText = function () {
                if (buttonText().localeCompare('ON') == 0) {
                    buttonText('OFF');
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'http://192.168.1.56:8089/LED=ON/', true);
                    xhr.send();
                    
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.src = 'http://192.168.1.56:8089?callback=iotapp.myCallbackFunction';
                    var h = document.getElementsByTagName('script')[0];
                    h.parentNode.insertBefore(s, h);

                    setTimeout(function () {
                        console.log(data1);
                        sdata(data1);
                        console.log(buttonText());

                    }, 1000);
                    //sdata(data1);
                    //console.log(data1);
                }
                else {
                    buttonText('ON');
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'http://192.168.1.56:8089/LED=OFF/', true);
                    xhr.send();

                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.src = 'http://192.168.1.56:8089?callback=iotapp.myCallbackFunction';
                    var h = document.getElementsByTagName('script')[0];
                    h.parentNode.insertBefore(s, h);

                    setTimeout(function () {
                        console.log(data1);
                        sdata(data1);
                        console.log(buttonText());

                    }, 1000);
                    //sdata(data1);
                    //console.log(data1);
                }
            }
           
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
                
                if (data1.stat == 0) {
                    buttonText('OFF');
                    
                }
                else {
                    buttonText('ON');
                  
                }
                console.log(buttonText());
                
            }, 2000);
            
              
            return {
                demo1,
                demo2, SeeMore2, change, changeButtonText, sdata, buttonText

            };
        };
    });
function myCallbackFunction(data) {
    console.log(data);
    data1 = data;
}