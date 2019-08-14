if(!Function.prototype.bind){
	Function.prototype.bind = function(oThis){
		if(typeof this!=='function'){
			throw new TypeError('FUnction.prototype.bind-what is tryign bo be bound is not callable');
		}
		var aArgs = Array.prototype.slice.call(arguments, 1),
		fToBind = this;
		FNOP = function(){},
		fBound = function(){
			//this instanceof fBound === true时，说明返回的fBound被当做new的构造函数调用
			return fToBind.apply(this instanceof fBound ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
		};
		维护原型关系
		if(this.prototype){
			FNOP.prototype = this.prototype;
		}
		//执行下面的代码使fBound.prototype是fNOP的实例，因此
		//返回的fBound若作为new的构造函数，new生成的新对象作为this传入fBound，新对象的__proto__就是fNOP的实例
		fBound.prototype = new fNOP();
		return fBound;
	};
}