/*函数防抖：当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间*/
function debounce(fn, wait) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, wait);
    }
}

/*函数节流：预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期*/
// 时间戳实现
function throttle(fn, gap) {
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now;
        if (now - prev > gap) {
            prev = now;
            fn.apply(context, args);
        }

    }
}
//时间定时器实现
function throttle(fn, gap) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;

        if (!timer) {
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, gap);
        }
    }
}