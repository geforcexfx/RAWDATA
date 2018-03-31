/*
define(['jquery', 'postbox'], function ($, postbox) {
    var data;
 */
var imported = document.createElement('script');
imported.src = '/js/app/services/postbox.js';
document.head.appendChild(imported);
console.log(imported);
var data1, data2,data3;
var tempa;
var sta;
var myCallbackFunction = function (data) {
    
    
    //demo1 = data.temp;
    console.log(data.stat);
    
   // console.log(postbox);
   // console.log(data1);
    //postbox.publish("jsoniot", { data });
    tempa = data.temp;
    sta = data.stat;
    //window.data1 = tempa;
    //window.data2 = sta;
    //window.data3 = data;
    localStorage.setItem("vOneLocalStorage", data);
    
    return data1;

}
console.log(data1)

/*return {
    data, myCallbackFunction
};
});*/
