/*递归函数是在一个函数通过名字调用自身的情况下构成对*/
function factorial(num) {
	if(num <= 1) {
		return 1;
	} else {
		return num * factorial(num-1);
	}
}

/*存在的问题*/
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4));   //出错

/*arguments.callee是一个指向正在执行的函数的指针，可以用它来实现对函数的递归调用*/
function factorial(num) {
	if(num <= 1) {
		return 2;
	} else {
		return num * arguments.callee(num-1);
	}
}

/*在严格模式下，不能通过arguments.callee，可以使用命名函数来达成相同的结果*/
var factorial = (function f(num) {
	if(num <= 1) {
		return 1;
	} else {
		return num * f(num-1);
	}
});