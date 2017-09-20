// 获取authtoken
function getToken(token){
    authtoken=token;
}

// 获取定位城市
function getCityName(cityname){
	region=cityname;
}
if(ismobile(1)==1){
	Android.callGetCityName("");
}else{
	jsToios("getCityName");
}

// 获取账号姓名和手机号
function getInfoDetail(name,phone){
}
if(ismobile(1)==1){
    Android.callgetInfoDetail();
}else{
    jsToios("getInfoDetail");
}

// 拨打电话
if(ismobile(1)==1){
	Android.call(telephone);
}else{
	jsToios("tel",telephone);
}

// 通讯录返回调用函数
function getInfoDetail2(name,phone){	
}
if(ismobile(1)==1){
    Android.callPhone();
}else{
    jsToios("callPhone");
}

// 刷新页面
if(ismobile(1)==1){
	setTimeout(function(){
		Android.shouldRefresh();
	},100)
}else{
    setTimeout(function(){
		jsToios("shouldRefresh");
	},100)
}

// 返回上页
if(ismobile(1)==1){
    Android.goBack(1);
}else{
    jsToios("opennew","","",1);
}

// 地图导航
if(ismobile(1)==1){
	Android.callMapActivity(this_lat,this_lng,this_address,this_href);
}else{
	var para="getMapLatAndLon('" + this_lat + "','" + this_lng + "','" + this_address +"');"
	jsToios("opennew_map",this_href,para);
}

// 点击返回调用函数
function backClickFun(){    
}
if(ismobile(1)==1){
    Android.addBackAction("backClickFun()");
}else{
    jsToios("addBackAction","backClickFun()");
}

// 被返回页面被返回时执行方法
if(ismobile(1)==1){
    Android.viewAppearAction("getMessage()");
}else{
    jsToios("viewAppearAction","getMessage()");
}

// 登录绑卡
if(ismobile(1)==1){
    Android.callLogin();
}else{
    jsToios("login");
}
if(ismobile(1)==1){
    Android.callLogin(800);
}else{
    jsToios("login",800);
}
if(ismobile(1)==1){
    Android.toLogin();
}else{
    jsToios("toLogin");
}
if(ismobile(1)==1){
    Android.toCard();
}else{
    jsToios("toCard");
}
if(ismobile(1)==1){
	Android.isRegister();
}else{
	jsToios("isRegister");
}

// 话费充值页
if(ismobile(1)==0){
	setTimeout(function(){
		jsToios("showWebNav",0);
	},1000);
	top_height=64;
}else{
	if(window.Android.showWebNav){
		Android.showWebNav(false);
	}
	top_height=75;
}

// 支付函数
if(ismobile(1)==1){
    Android.thirdToPay(merno,para,thirdtype,amt);
}else{
    jsToios("thirdToPay",merno,para,thirdtype,amt);
}
// 支付返回调用函数
function applyOrderReturn(flag,this_orderid,msg){
}
// 支付点叉叉调用函数
function payCancel(pram){
}
if(ismobile(1)==1){
    if(window.Android.setPayOrder){
        Android.setPayOrder(money,prdordno,paytype,bakseq,merno,"","");
    }else{
        Android.callOrderDeilsActivity(money,prdordno,paytype,bakseq,merno);
    }
}else{
    jsToios("pay",money,prdordno,paytype,bakseq,merno);
}

if(ismobile(1)==1){
	Android.callOrderDeilsActivity(pay_money,order_no,paytype,bakseq);
}else{
	jsToios("pay",pay_money,order_no,paytype,bakseq);
}
if(ismobile(1)==1){
	Android.callOrderDeilsActivity(pay_money,order_no,paytype,bakseq,merNo);
}else{
	jsToios("pay",pay_money,order_no,paytype,bakseq,merNo);
}

// 打开新页面
if(ismobile()==1){
    Android.callWebView(this_href,para);
}else{
    jsToios("opennew",this_href,para);
}
if(ismobile(1)==1){
    Android.callDetail(this_url,para);
}else{
    jsToios("opennew",this_url,para);
}
if(ismobile(1)==1){
    Android.callWindWebView(this_url,para);
}else{
    jsToios("opennew_fullscreen",this_url,para);
}
if(ismobile(1)==1){
    Android.callSpecialDetail(this_url,para,isjump);
}else{
    jsToios("opennew",this_url,para,"token");
}
if(ismobile(1)==1){
	Android.callSpecialDetail(this_url,para,1,1);
}else{
    jsToios("opennew",this_url,para,1);
}

// 显示标题
if(ismobile(1)==0){
	jsToios("title",this_title);
}
if(ismobile(1)==1){
	Android.showWebTitle();
}else{
	setTimeout(function(){
		jsToios("showWebTitle");
	},100);
}


if(ismobile(1)==1){
	setTimeout(function(){
    	Android.errorMsg(msg);
    }, 1000 );
}else{
	setTimeout(function(){
		jsToios("error",msg);
	}, 1000 );
}

if(ismobile(1)==1){
	if(window.Android.showScanOnly){
		Android.showScanOnly();
	}
}else{
    jsToios("showScanOnly");
}

if(ismobile(1)==1){
	Android.releaseController(this_url,para);
}else{
	jsToios("releaseController",3);
}

if(ismobile(1)==1){
    Android.setReturnPageUrl(this_url,para);
}
if(ismobile(1)==1){
    Android.returnMyorder(this_url,para);
}else{
    jsToios("returnBack",this_url,para,-2);
}
if(ismobile(1)==1){
	Android.goBack();
}else{
	jsToios("payReturn");
}
if(ismobile(1)==1){
    Android.callPlaneReturn(para);
}else{
    jsToios("planeReturn",para);
}
if(ismobile(1)==1){
    Android.callBackhome();
}else{
    jsToios("backhome");
}

if(ismobile(1)==1){
    Android.callOrder(order_id);
}else{
    jsToios("order",order_id);
}

if(ismobile(1)==1){
    Android.callMyorder();
}else{
    jsToios("myorder");
}


// 去缴纳交通罚款
if(ismobile(1)==1){
    Android.toPayTrafficTicket();
}else{
    jsToios("toPayTrafficTicket");
}

// 附近详情扫码
if(ismobile()==1){
    Android.callNearDeilsActivity(this_href,para,this_custId);
}else{
    jsToios("opennew_scan",this_href,para,this_custId);
}
var para="getDetail('" + this_custId+ "','" + syscode +"');";
if(ismobile(1)==1){
	Android.callFuelNearDeilsActivity(this_href,para,this_custId);
}else{
	jsToios("opennew_scan",this_href,para,this_custId);
}
// 进入附近二级页
if(ismobile(1)==1){
	var href=file_url_near+"nearby_list02.html?id="+id+"&type="+type;
	Android.setTypeActivity(id,type,href);
}else{
	var href=file_url_near+"nearby_list02.html";
	var para="getLatAndLonAndType('" + lat + ";" + lon + ";" + region + ";" + id + ";" + type + "');"
	jsToios("opennew_location",href,para);
}
// 进入评论列表页
var para="getDetail('" + this_custId +"');";
if(ismobile(1)==1){
	Android.callCommentList(this_href,para);
}else{
	jsToios("opennew",this_href,para);
}
// 进入帮助列表详情
if(ismobile(1)==1){
	Android.callHelpDeilsActivity(uuid,href);
}else{
	var para="getDetailById('" + uuid + "');"
	jsToios("opennew",href,para);
}
