// 线上地址
// var fixed_url="";   
   
// 测试地址
var fixed_url="";

// 公共参数
var project_url=fixed_url+"film-fhjy/";

var client="app",
    authtoken = "";
//手机号码正则
var regPhone = /^1[0-9]\d{9}$/;
//css Map  
var cssHash = {
    base:[{href:"css/base.css",version: "2017080704"}],
    index:[{href:"css/index.css",version: "2017080702"}],
    swiper:[{href:"css/swiper-3.4.2.min.css", version: "2017080702"}]
}
//js Map  
var jsHash = {
    jquery:[{url:"js/jquery-1.7.2.min.js",version: "2017080202"}],
    common:[{url:"js/common.js",version: "2017080806"}],
    swiper:[{url:"js/swiper-3.4.2.jquery.min.js", version: "2017080402"}]
}

// 封装ajax,ajaxRequest('GET', url, true, data, callback);
function ajaxRequest(method, url, async, data, callback) {
    var this_url=fixed_url+url;
    var request = $.ajax({
        type: method,
        url: this_url,
        async:async,
        dataType: 'json',
        data:data,
        success: callback
    });
}
function ajaxRequestFilm(method, url, async, data, callback) {
    var this_url=project_url+url;
    var request = $.ajax({
        type: method,
        url: this_url,
        async:async,
        dataType: 'json',
        data:data,
        success: callback
    });
}
 
//根据传入的key，动态生成css加载语句  
function loadCss(sKey) {  
    var node = cssHash[sKey];  
    for(var i =0;i < node.length; i ++) {  
        document.writeln('<link rel="stylesheet" type="text/css" href="'+node[i].href+'?version='+node[i].version+'">');  
    }  
}
//根据传入的key，动态生成js加载语句  
function loadJs(sKey) {  
    var node = jsHash[sKey];
    for(var i =0;i < node.length; i ++) {
        document.writeln('<script type="text/javascript" src="'+node[i].url+'?version='+node[i].version+'"></script>');
    } 
}  
