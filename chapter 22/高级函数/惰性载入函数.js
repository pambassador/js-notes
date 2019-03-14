/*重写createXHR()函数,在函数被调用时处理函数*/
function createXHR() {
	if(typeof XMLHtppRequest != "undefined") {
		createXHR = function() {
			return new XMLHttpRequest();
		};
	} else if(typeof ActiveXObject != "undefined") {
		createXHR = function() {
			if(typeof arguments.callee.activeXString != "string") {
				var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
				for(i=0,len=versions.length; i<len; i++) {
					try {
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch (ex) {
						//skip
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		};
	} else {
		createXHR = function() {
			throw new Error("No XHR object available.");
		};	
	}
	return createXHR();
}

/*在函数声明时就指定适当的函数*/
var createXHR = (function(){
	if(typeof XMLHttpRequest != "undefined"){
		return function() {
			return new XMLHttpRequest();
		};
	} else if(typeof ActiveXObject != "undefined") {
		return function() {
			if(typeof arguments.callee.activeXString != "string") {
				var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
				for(i=0,len=versions.length; i<len; i++) {
					try {
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch (ex) {
						//skip
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		};
	} else {
		return function() {
			throw new Error("No XHR object available.");
		};
	}
})();