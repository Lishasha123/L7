/**
 * 
 * 简易的动画函数： 需要执行动画的对象 ， 目标样式{bottom:"200px"}
 * 
 * **/
function animate(obj, styles, duration,fun) {
	for(var s in styles) {
		(function(){
			var count = duration / 10; //动画次数
			var nowValue = parseInt(window.getComputedStyle(obj, null)[s]);
			var step = (parseInt(styles[s]) - nowValue) / count;
			var timeOut = duration / count;
			var time = setInterval(function() {
				nowValue += step; //nwValue = nowValue + step;
				obj.style[s] = nowValue + "px";
				if(nowValue == parseInt(styles[s])) {
					clearInterval(time);
					if(fun)
					     fun();
				}
			}, timeOut);
		})();
	}
}