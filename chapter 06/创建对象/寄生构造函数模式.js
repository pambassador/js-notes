/*寄生构造模式和工厂模式一样，除了使用new操作符并把包装函数叫做构造函数*/
function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();    //"Nicholas"

/*寄生构造函数模式可以在特殊的情况下用来为对象创建构造函数，假设我们想创建一个具有额外方法的特殊数组*/
function SpecialArray() {
	//创建数组
	var values = new Array();
	//添加值
	values.push.apply(values, arguments);
	//添加方法
	values.toPipedString = function() {
		return this.join("|");
	};
	//返回数组
	return values;
}

var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString());     //"red|blue|green"