function MyObject() {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}

	//特权方法
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
}

function Person(name) {
	this.getName = function() {
		return name;
	};
	this.setName = function(value) {
		name = value;
	};
}

var person = new Person("Nicholas");
alert(person.getName());       //"Nicholas"
person.setName("Greg");
alert(person.getName());       //"Greg"