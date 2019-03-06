/*外部文件*/
function loadStyles(url) {
	var link = document.createELement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
/*使用<style>元素来包含嵌入css*/
function loadStyleString(css) {
	var style = document.createElement("style");
	style.type = "text/css";
	try {
		style.appendChild(document.createTextNode(css));
	} catch (ex) {
		style.styleSheet.cssText = css;
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}