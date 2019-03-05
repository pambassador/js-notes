/*闭包是指有权访问另一个函数作用域中的变量的函数*/
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		if(value1 < value2) {
			return -1;
		} else if(value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}

/*闭包只能取得包含函数中任何变量的最后一个值*/
function createFunctions() {
	var result = new Array();
	for(var i=0; i<10; i++) {
		result[i] = function() {
			return i;           //每个函数否返回10
		};
	}
	return result;
} 

/*创建另一个匿名函数强制让闭包的行为符合预期*/
function createFunctions() {
	var result = new Array();
	for(var i=0; i<10; i++) {
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}
	return result;
}    