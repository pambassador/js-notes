/*匿名函数的执行环境具有全局性，因此其this对象通常指向window*/
var name = "The window";
var object = {
	name : "My object",
	getNameFunc : function() {
		return function() {
			return this.name;
		};
	}
};
alert(object.getNameFunc()());   //"The window"(在非严格模式下)

/*在几种特殊的情况下，this的值可能会意外地改变*/
var name = "The window";
var object = {
	name : 'My object',
	getName : function() {
		return this.name;
	}
};
object.getName();    //"My object"
(object.getName)();  //"My object"
(object.getName = object.getName)();   //"The window", 在非严格模式下