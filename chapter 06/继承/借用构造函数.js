/*在子类型构造函数的内部调用超类型构造函数*/
function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
	//继承了SuperType
	SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);             //"red,blue.green,black"

var instance2 = new SubType();
alert(instance2.colors);             //"red,blue,green"