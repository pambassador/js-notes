/*使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承*/
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
	alert(this.age);
}

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);                    //"red,blue,green,black"
instance1.sayName();                        //"Nicholas"
instance1.sayAge();                         //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);                    //"red,blue,green"
instance2.sayName();                        //"Greg"
instance2.age();                            //27