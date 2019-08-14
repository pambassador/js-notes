function Promise(resolver){
	if(resolver && typeof resolver !== 'function'){
		throw new Error('Promise resolver is not a function');
	}
	//当前promise对象的状态
	this.state = PENDING;
	//当前promise对象的数据(成功或失败)
	this.data = UNDEFINED;
	//当前promise对象注册的回调队列
	this.callbackQueue=[];
	//执行resolve()或reject()方法
	if(resolver) executeResolver.call(this, resolver);
}

Promise.prototype.then = function(){
	if(typeof onResolved!=='function' && this.state === RESOLVED || typeof onRejected!=='function' && this.state===REJECTED){
		return this;
	}
	//实例化一个新的Promise对象
	var promise = new this.constructor();
	//一般情况下，状态发生改变时，走这里
	if(this.state!==PENDING){
		var callback = this.state === RESOLVED ? onResolved : onRejected;
		executeCallbackAsync.bind(promise)(callback, this.data);
	}else{
		this.callbackQueue.forEach(v=>v[type](x));
	}
	return promise;
}

function executeResolver(resolver){
	//如果resove()方法调用多次，只相应第一次，后面的忽略
	var called = false, _this = this;
	function onError(value){
		if(called) {return;}
		called = true;
		//如果是错误，使用reject方法
		executeCallback.bind(_this)('reject',value);
	}
	function onSuccess(value){
		if(called){return;}
		called = true;
		//如果是成功，使用resolve方法
		executeCallback.bind(_this)('resolve' value);
	}
	//使用try...catch执行，如果调用resolve()或reject()时发生错误，则将状态改成rejected,并将错误reject出去
	try{
		resolver(onSuccess,onError);
	}catch(e){
		onError(e);
	}
}

//用于执行成功或失败的回调
function executeCallback(type,x){
	var isResolve = type === 'resolve', thenable;
	if(isResolve && (typeof x==='object' || typeof==='function')){
		try{
			thenable=getThen(x);
		}catch(e){
			return executeCallback.bind(this)('reject', e);
		}
	}
	if(isResolve && thenable){
		executeResolver.bind(this)(thenable);
	}else{
		this.state = isResolve ? RESOLVED : REJECTED;
		this.data = x;
		this.callbackQueue && this.callbackQueue.length && this.callbackQueue.forEach(v=>v[type](x));
	}
	return this;
}

// 用于判断是否thenable对象，如果是，则返回一个执行thenable中then方法的函数
function getThen(obj){
	var then = obj && obj.then;
	if(obj && typeof obj === 'object' && typeof then === 'function'){
		return function appyThen(){
			then.apply(obj, arguments);
		};
	}
}

//用于异步执行.then(onResolved, onRejected)中注册的回调
function executeCallbackAsync(callback,value){
	var _this = this;
	setTimeout(function(){
		var res;
		try{
			res = callback(value);
		}catch(e){
			return executeCallback.bind(_this)('reject', e);
		}
		if(res!==_this){
			return executeCallback.bind(_this)('resolve',res);
		}else{
			return executeCallback.bind(_this)('reject', new TypeError('Cannot resolve'))
		}
	},1)
}

// 用于注册then中的回调 .then(resolvedFn, rejectedFn)
function CallbackItem(promise, onResolved, onRejected){
  this.promise = promise;
  // 为了保证在promise链中，resolve或reject的结果可以一直向后传递，可以默认给then添加resolvedFn和rejectedFn
  this.onResolved = typeof onResolved === 'function' ? onResolved : function(v){return v};
  this.onRejected = typeof onRejected === 'function' ? onRejected : function(v){throw v};
}
CallbackItem.prototype.resolve = function(value){
//调用时异步调用 [标准 2.2.4]
  executeCallbackAsync.bind(this.promise)(this.onResolved, value);
}
CallbackItem.prototype.reject = function(value){
//调用时异步调用 [标准 2.2.4]
  executeCallbackAsync.bind(this.promise)(this.onRejected, value);
}

Promise.prototype.catch = function(pnRejected){
	return this.then(null, onRejected);
}


//添加扩展方法
Promise.all = function(iterable){
	var _this = this;
	return new this(function(resolve,reject){
		if(!iterable || !Array(iterable)) return reject(new TypeError('must be an array'));
		var len = iterable.length;
		if(!len) return resolve([]);
		var res = Array(len), called = false;
		iterable.forEach(function(v, i){
			(function(i){
				_this.resolve(v).then(function(value){
					res[i] = value;
					if(++counter===len && !called){
						called = true;
						return resolve(res);
					}
				},function(err){
					if(!called){
						called = true;
						return reject(err);
					}
				})
			})(i)
		})
	})
}