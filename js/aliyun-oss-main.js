
// var applyTokenDo = function(func,e,callback,preback,ak,aks){
// 	var client = new OSS.Wrapper({
//       region: 'oss-cn-hangzhou',
//       secure: true, 
//       accessKeyId: 'WowuD1ECUyB3n81l',
//       accessKeySecret: 'boTGMCyZe86U3M7qRYtgl4MjReFqAH',
//       bucket: 'hipay'
//     });

//     func(client,e,callback,preback);
// }
var client = new OSS.Wrapper({
  	region: 'oss-cn-hangzhou',
  	secure: true, 
  	accessKeyId: 'WowuD1ECUyB3n81l',
  	accessKeySecret: 'boTGMCyZe86U3M7qRYtgl4MjReFqAH',
  	bucket: 'hipay'
});

/*
   上传文件，随机生成文件名，回写urlB,urlA
   client     oss初始化参数
   e          上传文件对象
   callback   回调函数回写 
*/
var uploadFile = function (client,e,callback,preback) {
	var file = e.target.files[0];
    if (!file) {
        tipInformation("上传的文件不存在！",function(){})
        //layer.close(index)
        return;
    }
    if (file.type != 'image/jpg' && file.type != 'image/png' && file.type != 'image/jpeg') {
        tipInformation("图片仅支持JPG、JPEG、PNG格式",function(){})
        
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        tipInformation("上传图片的大小最大为5M！",function(){});
        return;
    }
	// console.log('fileId: %j', file.id);
	preback&&preback(e);
//	var pos = file.name.lastIndexOf(".");
//	var suffix = file.name.substring(pos);
//	var key = Math.floor(Math.random() * 10000000000000000 + 1000000000000000).toString() + suffix;
//	console.log(file.name + "==>>" + key);
	//client.multipartUpload(key, file).then(function (result) {
		//console.log('upload success: %j', result);
		//callback && callback(key);
	//});
	// debugger;
	popDataAjaxImg(e, callback)
}

/**
 * 下载文件
 */
var downloadFile = function (client) {
	
	var objectKey = $("#fileurl").val();
	var saveAs = $("#orgfile").val();
	console.log(objectKey + ' => ' + saveAs);
	var result = client.signatureUrl(objectKey, {
	  expires: 3600,
	  response: {
	    'content-disposition': 'attachment; filename="' + saveAs + '"'
	  }
	});
	console.log(result);
	window.location = result;
}

/**
 * 下载文件
 */
var downloadFile1 = function (client,fileUrl,saveAs) {
	
	var objectKey = fileUrl;
	var saveAs = saveAs;
	console.log(objectKey + ' => ' + saveAs);
	var result = client.signatureUrl(objectKey, {
	  expires: 3600,
	  response: {
	    'content-disposition': 'attachment; filename="' + saveAs + '"'
	  }
	});
	console.log(result);
	window.location = result;
}


function popDataAjaxImg(imgFile, func) {
   
    var data = new FormData(), file = imgFile.target.files[0]
    data.append("file", file)
    $.ajax({
        url : fixed_url+"enjoy/file/uploadImg",
        type : 'POST',
        data : getParam(data),
        dataType : 'JSON',
        cache : false,
        processData : false,
        contentType : false,
        success : function(data) {
            //layer.close(index);
        	
        	console.log('upload success: %j', data.msg);
            func&func(data.msg);
        },
        error : function(xhr) {
            //layer.close(index);
            tipInformation("上传失败:" + xhr.status,function(){});
            $("#loading,#loading02").hide();
        }
    })
}

function getParam(param, type) {
    type = type || "app";
    if (param == null || param == "") {
        return {
            client : type
        };
    } else if (typeof param == "string") {
        return param.indexOf("client=") > -1 ? param : (param + "&client=" + type);
    } else if (typeof param == "object") {
        if (!param.client) {
            param.client = type;
        }
        return param;
    }
}