function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
/*从本质上讲，object()对传入其中的对象作了一次浅0复制*/
var person = {
	name : "Nicholas",
	friends : ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);               //"Shelby,Court,Van,Rob,Barbie"

/*ECMAScript5新增了Object.create()方法规范化了原型式继承*/
var person = {
	name : "Nicholas",
	friends : ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"