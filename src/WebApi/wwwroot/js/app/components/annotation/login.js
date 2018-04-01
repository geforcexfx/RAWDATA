define(['knockout', 'dataservice', 'config', 'postbox', 'toastr'],
    function (ko, dataService, config, postbox, toastr) {
        return function (params) {
            var pets = ko.observableArray([]);
            var Uname = ko.observable(params ? params.text : undefined);
            var Upass = ko.observable(params ? params.text : undefined);

            dataService.getUser(function (data) {
                pets(data);
                console.log(data);
            });
            var update = function () {
                return Uname, Upass;
                
                    

            }
            var check = function () {
                update();
                console.log(Uname());
                console.log(pets()[6].userName);
                console.log(Upass());
                //var totalPage = total() / 10;
                //set the limit
                //console.log(Uname().localeCompare(pets()[6].userName))
                //if (Uname().localeCompare(pets()[6].userName) == 0 && Upass().localeCompare(pets()[6].password) == 0) {
                    toastr.warning('Correct, you are now logged in');
                    postbox.publish(config.events.cvcomment);

                //}
                //else {
                //   toastr.warning('Error, try again');
               // }
                /*
                if (page() < totalPage && page().match(/^-?\d+$/)) {
                    dataService.getHistoryPage(page,
                        function (result) {
                            setData(result);
                        });
                }
                else {
                    toastr.warning('PLease enter valid Value! max: ' + parseInt(totalPage) + ' page(s)');

                }
                */
            }
           
            return {
                pets,
                Uname,Upass,
                check
                
            };
        };
    });