// 页面加载动画
function loadAnimation(){
    var circle_html="";
    circle_html+='<div id="load-animation" class="mask-wrap load-animation">';
    circle_html+='    <div>';
    circle_html+='        <img src="images/bear.gif" width="85" height="85"/>';
    circle_html+='        <p>数据处理中</p>';
    circle_html+='    </div>';
    circle_html+='</div>';
    $("body").append(circle_html);
}
// 无数据
function dataTip(msg){
    var html="";
    html+='<div id="no-data" class="no-data">';
    html+='<div>';
    html+='    <img src="images/cat.png" width="85" height="85"/>';
    html+='    <p>'+msg+'</p>';
    html+='</div>';
    html+='</div>';
    return html;
}
// 提示信息
function tipInformation(message,callback1,color,btn1,btn2,callback2,tip,tipcolor) {
    
    var html_mask="",
        html="",
        btn_html=""
        close_tip_html="",
        cancel_tip_html="";
    if(!color){//mssage颜色
        color="#f0b20c";
    }
    if(!btn1){
        btn1="确定";
    }
    if(!btn2){
        btn2=false;
    }
    if(!tip){//tip颜色
        tip="提示";
    }
    if(!tipcolor){
        tipcolor="#000";
    }
    html_mask+='<div id="tip-information" class="mask-wrap tip-information"></div>';
    html+='<div>';
    html+='    <p class="tip" style="color: '+tipcolor+';">'+tip+'</p>';
    html+='    <p class="message" style="color: '+color+';">'+message+'</p>';
    html+='</div>';
    btn_html+='<div class="mui-flex btns">';
    btn_html+='</div>';
    btn1_html='<input type="button" value="'+btn1+'" class="cell btn1"/>';
    btn2_html='<input type="button" value="'+btn2+'" class="cell btn2"/>';

    var $html_mask = $(html_mask);
    var $html = $(html);
    var $btn_html = $(btn_html);
    var $btn1_html = $(btn1_html);
    var $btn2_html = $(btn2_html);

    $btn_html.append($btn1_html);
    if(btn2){
        $btn_html.append($btn2_html);
    }
    $html.append($btn_html);
    $html_mask.append($html);
    $("body").append($html_mask);
   
    // 点击确定按钮
    $btn1_html.on("click", function(){
        $("#tip-information").remove();
        callback1&&callback1();
    })
    // 点击取消按钮
    $btn2_html.on("click", function(){
        $("#tip-information").remove();
        callback2&&callback2();
    }) 
}

// 返回顶部
function backToTop(){
    var html='<div id="back-to-top" class="back-to-top"><span></span></div>';
    var $html = $(html);
    $("body").append($html);
    $html.on("click", function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    })
    // 返回顶部按钮
    // window.onscroll = function () {
    //     if($(window).scrollTop()>10){
    //         $html.fadeIn();
    //     }else{
    //         $html.fadeOut();
    //     }
    // }
}

// touch事件
function tap(element,fn){
    var startTx, startTy;
    element.bind('touchstart',function(e){
        var touches = e.originalEvent.targetTouches[0];
        startTx = touches.pageX;
        startTy = touches.pageY;
    });
    
    element.bind('touchend',function(e){
        var touches = e.originalEvent.changedTouches[0];
        endTx = touches.pageX,
        endTy = touches.pageY;
        // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
        if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
            fn();
        }
    });
}

// search事件
function inputSearch(element,fn){
    element.bind('input propertychange', function() {  
        fn();
    });
    document.onkeydown = function(e){
        if((e.keyCode || e.which) == 13){
            fn();
        }
    }
}

// swiper轮播图
function swiperCarousel(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay : 2000,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper  
        observeParents:true,//修改swiper的父元素时，自动初始化swiper  
        autoplayDisableOnInteraction : false//用户操作swiper之后，是否禁止autoplay
    });
    mySwiper.startAutoplay(); 
    $(".swiper-container").hover(function(){
        mySwiper.stopAutoplay(); 
    },function(){
        mySwiper.startAutoplay(); 
    });
}
// 判断机型,1表示Android,0表示ios
function ismobile(){
    var u = navigator.userAgent, app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
            try{
                if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
                    return '0';
                }else{
                    return '1';
               }
            }catch(e){}
        }
    }else if( u.indexOf('iPad') > -1){
        return '0';
    }else{
        return '1';
    }
}

//手机号自动空格
function FillMobile(element) {
    var mValue = element.val().replace(/\s+/g, "");
    if (mValue != "") {
        var mLength = mValue.length;
        if (mLength <= 3) {
            element.val(mValue);
        }else {
            if (mLength <= 7) {
                element.val(mValue.substring(0, 3) + " " + mValue.substring(3, mLength));
            } else {
                element.val(mValue.substring(0, 3) + " " + mValue.substring(3, 7) + " " + mValue.substring(7, mLength));

                if(mLength==11 && regPhone.test(mValue)){
                    // 输入合法
                }else{
                    // 输入不合法
                }
            }
        }
    }
}
//身份证号合法性验证 
function validateIdCard(idCard) {  
    //15位和18位身份证号码的正则表达式  
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;  
    //如果通过该验证，说明身份证格式正确，但准确性还需计算  
    if (regIdCard.test(idCard)) {  
        if (idCard.length == 18) {  
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里  
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组  
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和  
            for (var i = 0; i < 17; i++) {  
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];  
            }  
            var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置  
            var idCardLast = idCard.substring(17);//得到最后一位身份证号码  
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X  
            if (idCardMod == 2) {  
                if (idCardLast == "X" || idCardLast == "x") {  
                    return true;  
                    //alert("恭喜通过验证啦！");  
                } else {  
                    return false;  
                    //alert("身份证号码错误！");  
                }  
            } else {  
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码  
                if (idCardLast == idCardY[idCardMod]) {  
                    //alert("恭喜通过验证啦！");  
                    return true;  
                } else {  
                    return false;  
                    //alert("身份证号码错误！");  
                }  
            }  
        }  
    } else {  
        //alert("身份证格式不正确!");  
        return false;  
    }  
}
// 输入金额校验
function checkMoney(element,digit){
    element.keyup(function () {
        var reg = $(this).val().match(/\d+\.?\d{0,2}/);
        var txt = '';
        if (reg != null) {
            txt = reg[0];
        }
        $(this).val(txt);
    }).change(function () {
        $(this).keypress();
        var v = $(this).val();
        if (/\.$/.test(v)){
            $(this).val(v.substr(0, v.length - 1));
        }
    });
    element.bind('input propertychange', function() {
        var v = $(this).val();
        if(parseInt(v)>digit){
            $(this).val(v.substr(0, 6));
        }
    })
}
// 本地存储
function setLocalStorage(key, value) {
    var storage = window.localStorage;
    storage[key] = value;
}
function getLocalStorage(key) {
    var storage = window.localStorage;
    return ("undefined" == typeof storage[key]) ? "" : storage[key];
}
// 删除本地存储
function removeLocalStorage(key){
    for(var i=0;i<key.length;i++){
        localStorage.removeItem(key[i]);
    }
}
// 获取URL参数
// var Request = getRequest(); 
// var id = Request['id'];
function getRequest() { 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
            theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]); 
        } 
    } 
    return theRequest; 
} 
// 判断页面加载来源（uub,微信，支付宝）
function isWeixinOrAlipay(){
    var ua = window.navigator.userAgent.toLowerCase();
    var channel=0;
    //判断是不是支付宝
    if (ua.match(/AlipayClient/i) == 'alipayclient') {
        // alert("Alipay");  
        channel=1;
    }
    //判断是不是微信
    if ( ua.match(/MicroMessenger/i) == 'micromessenger' ) {  
        // alert("WeiXIN");
        channel=2;
    } 
    // uub
    if ( ua.match(/UUTFClient/i) == 'uutfclient' ) {  
        // alert("uub");  
        channel=3;
    } 
    return channel;
}
//获得当前日期的后x天，通用
function nextDay(x,dates){ 

    var mydate = new Date(dates.replace(/-/g,"/"));
    var time=new Date(mydate.getTime() + x*24*60*60*1000);
    var year=time.getFullYear(); //获取完整的年份(4位,1970-????)
    var month=time.getMonth()+1; //获取当前月份(0-11,0代表1月)
    var day=time.getDate(); //获取当前日(1-31) 
    if(month<10){
        month="0"+month;
    }
    if(day<10){
        day="0"+day;
    }
    var nextdate=year+"年"+month+"月"+day+"日";
    return nextdate;
}
//获得某个时间经过x分钟之后的时间
function nextTime(x,dates){ 

    var mydate = new Date(dates.replace(/-/g,"/"));
    var time=new Date(mydate.getTime() + x*60*1000);
    var h=time.getHours(); //获取小时
    var m=time.getMinutes(); //获取分钟
    if(h<10){
        h='0'+h;
    }
    if(m<10){
        m='0'+m;
    }
    return h+":"+m;
}
// 返回某个日期的星期
function getDay(year,month,date) {
    var birthDay = new Date();
    birthDay.setFullYear(year);
    birthDay.setMonth(month-1);
    birthDay.setDate(date);
    var day = birthDay.getDay();
    switch(day){
        case 0:{
            return '星期日';//'星期日'
            break;
        }
        case 1:{
            return '星期一';//'星期一'
            break;
        }
        case 2:{
            return '星期二';//'星期二'
            break;
        }
        case 3:{
            return '星期三';//'星期三'
            break;
        }
        case 4:{
            return '星期四';//'星期四'
            break;
        }
        case 5:{
            return '星期五';//'星期五'
            break;
        }
        case 6:{
            return '星期六';//'星期六'
            break;
        }
    }
}

//计算两个日期天数差的函数，通用
function dayBetween(DateOne,DateTwo){ 
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-')); 
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1); 
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-')); 

    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-')); 
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1); 
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-')); 

    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000); 
    return Math.abs(cha); 
}

//获取文档完整的高度 
function getScrollHeight() { 
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
}

//获取滚动条当前的位置 
function getScrollTop() { 
    var scrollTop = 0; 
    if (document.documentElement && document.documentElement.scrollTop) { 
        scrollTop = document.documentElement.scrollTop; 
    } 
    else if (document.body) { 
        scrollTop = document.body.scrollTop; 
    } 
    return scrollTop; 
} 

//获取当前可视范围的高度 
function getClientHeight() { 
    var clientHeight = 0; 
    if (document.body.clientHeight && document.documentElement.clientHeight) { 
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight); 
    } 
    else { 
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight); 
    } 
    return clientHeight; 
} 

// 获取服务器系统当前时间
function getSystemTime(){
    var systemtime="";
    var url="app/mapmer/getSystemTime";
    var data={}
    ajaxRequest('GET', url, false, data, callback);
    function callback(result) {
        if(result.code==200){
            systemtime=result.data.systemtime;
        }
    }
    return systemtime;//2017-08-03 10:30:47
}
// 接口返回非200调用函数
function back800Msg(code,msg){
    if(code==800){
        tipInformation(msg,function(){
            if(ismobile(1)==1){
                Android.callLogin(800);
            }else{
                jsToios("login",800);
            }
        });
    }else if(code!=801){
        tipInformation(msg);
    }
}

// 无缝滚动
function scrolling(element,liHeight,speed,delay){
    if(!speed){
        var speed = 50;//滚动的速度
    }
    if(!delay){
        var delay= 2000;
    }
    var time;
    element.scrollTop=0;
    element.innerHTML+=element.innerHTML;//克隆一份一样的内容
    function startScroll(){
        time=setInterval(function(){
            scrollUp();
        },speed);
        element.scrollTop++;
    }
    function scrollUp(){
        if(element.scrollTop % liHeight==0){
            clearInterval(time);
            setTimeout(startScroll,delay);
        }else{
            element.scrollTop++;
            if(element.scrollTop >= element.scrollHeight/2){
                element.scrollTop =0;
            }
        }
    }
    setTimeout(startScroll,delay);
}
function countDown(val,countdown){
    // 倒计时60秒
    if(!countdown){
        var countdown=60;
    }
    settime(val);
    function settime(val){
        if (countdown == 0) {
            val.prop("disabled", false); 
            val.val("发送验证码");
            countdown = 60;
            return false;
        }else{
            val.prop("disabled", true); 
            val.val(countdown+"s");
            countdown--;
        }
        setTimeout(function() {
            settime(val)
        },1000)
    } 
}