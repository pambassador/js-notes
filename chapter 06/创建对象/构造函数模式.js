/*构造函数模式*/
function Person(name, qge, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

/*缺点是每个方法都要在每个实例上重新创建一遍*/
alert(person1.sayName == person2.sayName); //false

/*把函数定义转移到构造函数外部来解决上面的问题*/
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    alert(this.name);
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

alert(person1.sayName == person2.sayName); //true