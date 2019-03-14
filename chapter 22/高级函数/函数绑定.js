var heandler = {
	message: "Event handled",
	handleClick: function(event) {
		alert(this.message);
	}
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", handler.handleClick);       //undeifined
 /*使用bind()函数解决以上问题*/
 var handler = {
 	message: "Event handled",
 	handleClick: function(event) {
 		alert(this.message + ":" + event.type);
 	}
 };
 var btn = document.getElementById('my-btn');
 EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));s