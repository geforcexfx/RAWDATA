define(['knockout', 'dataservice', 'postbox', 'config', 'toastr', '../app/pagination'], function (ko, dataService, postbox, config, toastr, pagination) {
    return function (params) {
        var idc = "19";
        var postDetail = ko.observableArray([]);
        var page = ko.observable(params ? params.text : undefined);
        var getDetails = function () {
            dataService.getPostId(idc, callback);
            console.log("ok");
            console.log(callback());
      
        }
        var callback = function (data) {
           postDetail(data);
           console.log(data);
           
        };
        return {
        
            getDetails, postDetail
            
        };
    };
});
