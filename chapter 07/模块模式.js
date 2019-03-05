var singleton = function(){
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	//特权/公有方法和属性
	return {
		publivProperty : true,
		publicMethod : function () {
			privateVariable++;
			return privateFunction();
		}
	};
}();

/*增强的模块模式*/
var singleton = function() {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	//创建对象
	var object = new CustomType();
	//添加特权/公有属性和方法
	object.publicProperty = true;
	object.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
	//返回这个对象
	return object;
}();

var appplication = function() {
	//私有变量和函数
	var components = new Array();
	//初始化
	components.push(new BaseComponent());
	//创建application的一个局部副本
	var app = new BaseComponent();
	//公共接口
	app.getComponentCount = function() {
		return components.length;
	};
	app.registerComponent = function(component) {
		if(typeof component ==  "object") {
			components.push(component);
		}
	};
	//返回这个副本
	return app;
}();