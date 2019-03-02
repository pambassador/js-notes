/*动态原型模式，把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型（浸在必要的情况下）*/
function Person(name, age, job) {
	//属性
	this.name = name;
	this.age = age;
	this.job = job;
	//方法
	if(typeof this.sayName != "funciton") {
		Person.prototype.sayName = function() {
			alert(this.name);
		};
	}
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();