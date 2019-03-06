//检测插件（在IE中无效）
function hasPlugin(name) {
	name = name.toLowerCase();
	for(var i=0; i<navigator.plugins.length; i++) {
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}
//检测flash
alert(hasPlugin("Flash"));
//检测QuickTime
alert(hasPlugin("QuickTime"));

//检测IE中的插件
function hasIEPlugin(name) {
	try {
		new ActiveXObject(name);
		return true;
	} catch (ex) {
		return false;
	}
}
//检测flash
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
//检测QuickTime
alert(hasIEPlugin("QuickTime.QuickTime"));


//典型的做法是针对每个插件分别创建检测函数，而不是使用前面介绍的通用方法
//检测所有浏览器中的Flash
function hasFlash() {
	var result = hasPlugin("Flash");
	if(!result) {
		result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
	}
	return result;
}

//检测所有浏览器中的QuickTime
function hasQuickTime() {
	var result = hasPlugin("QuickTime");
	if(!result) {
		result = hasIEPlugin("QuickTime.QuickTime");
	}
	return result;
}

//检测Flash
alert(hasFlash());
//检测QuickTime
alert(hasQuickTime());
