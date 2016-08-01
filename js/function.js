//兼容className的获取
function getClass(classname,range){
	var range=range?range:document;
	if(document.getElementsByClassName){
		return range.getElementsByClassName(classname);
	}else{
		var all=range.getElementsByTagName("*");
		
		var arr=[];
		for(var i=0;i<all.length;i++){
			var str=all[i].className;
			if(checkClass(str,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function checkClass(str,classname){
	var arr=str.split(" ");

	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}

/*getContent(obj,[val])
获取或者是设置元素的文本
思路：
	1、判断浏览器
	2、判断第二个参数
	3、获取文本或者是设置文本*/
function getContent(obj,val){
	if(obj.textContent){

		if(val){
			obj.textContent=val;
		}else{
			return obj.textContent;
		}
	}else{

		if(val){
			obj.innerText=val;
		}else{
			return obj.innerText;
		}
	}
}




/*getStyle(obj,arrt)
思路：
	1、判断浏览器 obj.currentStyle
	2、ie6~8 对象.currentStyle.属性;
	3、w3c  getComputedStyle(对象,null).属性*/

function getStyle(obj,arrt){
	if(obj.currentStyle){	
		return obj.currentStyle[arrt];
	}else{
		return getComputedStyle(obj,null)[arrt];
	}
}


/*$(select)
$(".one") 通过className获取元素
$("#one") 通过id获取元素
$("div")  通过标签获取元素
思路：
	1、判断参数的第一个字符       str.charAt()
	2、根据字符执行相应的分支
		返回相应的元素*/

function $(select,content){
	if(typeof select=="string"){
		var content=content?content:document;
		var frist=select.charAt(0);

		if(frist=="#"){
			//id   
			return content.getElementById(select.substring(1));

		}else if(frist=="."){
			//className  类
			return getClass(select.substring(1),content);

		}else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
			//tagName 	标签
			return content.getElementsByTagName(select);
		}else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
			//创建一个标签
			return document.createElement(select.slice(1,-1));
		}
	}else if(typeof  select=="function"){
		addEvent(window,"load",select);
	}
	
}