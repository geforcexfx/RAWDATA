define(['knockout', 'dataservice', 'config', 'postbox', 'toastr'],
    function (ko, dataService, config, postbox, toastr) {
        return function (params) {
            var pet = ko.observableArray([]);
            var uname = ko.observable(params ? params.text : undefined);
            var upass = ko.observable(params ? params.text : undefined);

            dataService.getUser(function (data) {
                pet(data);
                console.log(data);
            });
            var update = function () {
                return uname, upass;
                
                    

            }
            var check = function () {
                update();
                                
                if (Uname().localeCompare(pets()[6].userName) == 0 && Upass().localeCompare(pets()[6].password) == 0) {
                    toastr.warning('Correct, you are now logged in');
                    postbox.publish(config.events.anologin);

                }
                else {
                   toastr.warning('Error, try again');
                }
               
            }
           
            return {
                pet,
                uname,upass,
                check
                
            };
        };
    });