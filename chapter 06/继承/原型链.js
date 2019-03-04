/*实现原型链的基本模式*/
function SuperType() {
	this.property = true;
}

Supertype.prototype.getSuperValue = function() {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperType());   //true



/*原型链的问题*/
function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {

}

//继承了SuperType
SubType.prototye = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);       //"red,blue,green,black"

var instance2 = new SubType();
alert(instance2.colors);       //"red,blue,green,black"
