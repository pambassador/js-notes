(function() {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}

	//构造函数
	MyObject = function() {};

	//公有/特权方法
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
})();

(function() {
	var name = "";
	Person = function(value) {
		name = value;
	};
	Person.prototype.getName = function() {
		return name;
	};
	Person.prototype.setName = function(value) {
		name = value;
	};
})();

var person1 = new Person("Nicholas");
alert(person1.getName());      //"Nicholas"
person1.setName("Greg");
alert(person1.getName());      //"Greg"

var person2 = new Person("Michael");
alert(person1.getName());     //"Michael"
alert(person2.getName());     //"Michael"