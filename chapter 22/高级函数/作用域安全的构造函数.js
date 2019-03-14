/*当使用new操作符调用函数时，构造函数内用到的this对象会指向新创建的对象实例*/
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
}
var person = new Person("Nicholas", 29, "Software Engineer");

/*当不使用new操作符直接调用函数*/
var person1 = Person("Nicholas", 29, "Software Engineer");
alert(window.name);      //"Nicholas";
alert(person1.name);     //undefined,爆错

/*创建一个作用域安全的函数解决上面的问题*/
function Person(name, age, job) {
	if(this instanceof Person) {
		this.name = name;
		this.age = age;
		this.job = job;
	} else {
		return new Person(name, age, job);
	}
}
var person1 = Person("Nicholas", 29, "Software Engineer");
alert(window.name);     //""
alert(person1.name);    //"Nicholas"
var person2 = new Person("Shelby", 34, "Ergonomist");
alert(person2.name);    //"Shelby"

/*如果使用构造函数窃取模式的继承且不使用原型链，那么这个继承很可能被破坏*/
function Polygon(sides) {
	if(this instanceof Polygon) {
		this.sides = sides;
		this.getArea = function() {
			return 0;
		};
	} else  {
		return new Polygon(sides);
	}
}
function Rectangle(width, height) {
	Polygon.callZ(this, 2);
	this.wodth = width;
	this.height = height;
	this.getArea = function() {
		return this.width * this.height;
	};
}
var rect = new Rectangle(5, 10);
alert(rect.sides);          //undefined

/*构造函数窃取结合使用原型链或者寄生组合则可以解决上面的问题*/
function Polygon(sides) {
	if(this instanceof Polygon){
		this.sides = sides;
		this.getArea = function() {
			return 0;
		};
	} else {
		return new Polygon(sides);
	}
}
function Rectangle(width, height) {
	Polygon.call(this, 2);
	this.width = width;
	this.height = height;
	this.getArea = function () {
		return this.width * this.height;
	};
}
Rectangle.prototype = new Polygon();
var rect = new Rectangle(5, 10);
alert(rect.sides);   //2