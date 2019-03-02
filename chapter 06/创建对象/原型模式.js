/*原型模式*/
function Person() {
}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};

var person1 = new Person();
person1.sayName();      //"Nicholas"

var preson2 = new Person();
person2.sayName();     //"Nicholas"

alert(person1.sayName == person2.sayName);     //true

/*更简单的原型语法*/
function Person() {
}

Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Sotware Engineer",
	sayName : function() {
		alert(this.name);
	}
};

var friend = new Person();

/*上面的代码本质上重写了默认的prototype对象，因此constructor属性不再指向Person函数。*/
alert(friend.constructor == Person);     //false

/*可重设constructor的值解决以上问题*/
function Person() {
}

Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	friends : ["Shelby", "Court"],
	sayName : function() {
		alert(this.name);
	}
};
//重设构造函数，只适用于ECMAScript5兼容的浏览器
Object.defineProperty(Person.prototype, "constructor", {
	enumerable: false,
	value: Person
});
 /*存在的问题*/
 var person1 = new Person();
 var person2 = new Person();

 person1.friends.push("Van");

 alert(person1.friends);    //"Shelby,Court,Van"
 alert(person2.friends);    //"Shelby,Court,Van"
 alert(person1.friends === person2.friends);  //true