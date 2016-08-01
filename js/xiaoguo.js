window.onload=function(){

	var banner=$(".banner_hezi")[0];
	var as=$("a",banner);
	var list=$("li",banner);
	// console.log(list);
	// var btnL=$(".btnL",banner)[0];
	// var btnR=$(".btnR",banner)[0];
	// console.log(btnL);
	var index=0;
	as[0].style.zIndex=10;

	var t=setInterval(lunbo,2000);


	

	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(lunbo,2000);
	}
//点击 选项卡
	for(var i=0;i<list.length;i++){
	
		list[i].index=i;

		list[i].onclick=function(){

			if(index==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				// as[j].style.zIndex=5;
				animate(as[j],{opacity:0});
				list[j].className="";//初始效果
			}

			// as[this.num].style.zIndex=10;
			animate(as[this.index],{opacity:1});
			list[this.index].className="hot";
			index=this.index;
		}
	}
	


	// 左右按钮
	// var flag=true;
	// btnR.onclick=function(){
	// 	if(flag){
	// 		flag=false;
	// 		lunbo();
	// 	}
		
	// }
	// btnL.onclick=function(){
	// 	if(flag){
	// 		flag=false;
	// 		lunbo2();
	// 	}
	// }
	function lunbo2(){
		index--;
		if(index<0){
			index=as.length-1;
		}
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex=5;
			animate(as[i],{opacity:0},function(){
				flag=true;
			});
			list[i].className="";//初始效果
		}
		list[index].className="hot";
		// as[index].style.zIndex=10;
		animate(as[index],{opacity:1},function(){
				flag=true;
			});

	}

	function lunbo(){
		index++;
		if(index==as.length){
			index=0;
		}
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex=5;
			animate(as[i],{opacity:0},function(){
				flag=true;
			});
			list[i].className="";//初始效果
		}
		list[index].className="hot";
		// as[index].style.zIndex=10;
		animate(as[index],{opacity:1},function(){
				flag=true;
			});

	}



	fangda(".wutu_box")
	function fangda(obj){
		var win=$(obj)[0];
		
		var img=$("img",win);
		var widths = parseInt(getStyle(img[0],"width"));
		// console.log(widths);
		for(var i=0;i<img.length;i++){
			// console.log(img[i]);
			img[i].index=i//!!!!!!!!!!!!!!!!!
			img[i].onmouseover = function(){
				animate(img[this.index],{width:widths+10,height:widths+10});
			}

			// console.log(img[i]);
			img[i].onmouseout = function(){
				animate(img[this.index],{width:widths,height:widths});
			}

			
		}
		
	}


	yidong(".main_2",0);
	yidong(".main_2",1);
	yidong(".main_2",2);
	yidong(".main_2",3);
	yidong(".main_2",4);
	yidong(".main_2",5);

	function yidong(obj,num){
		var win=$(obj)[num];
		
		var img=$("img",win);
		console.log(img);
		for(var i=0;i<img.length;i++){
			img[i].index=i;
			// console.log(img[i].index)
			img[i].onmouseover = function(){
			animate(img[this.index],{right:50});

		}
			img[i].onmouseout = function(){
			animate(img[this.index],{right:0},Tween.Linear);
		}
		}
		
	}
	yidong1("#main_3");
	function yidong1(obj){
		var win=$(obj);
		
		var img=$("img",win);
		// console.log(img);
		for(var i=0;i<img.length;i++){
			img[i].index=i;
			// console.log(img[i].index)
			img[i].onmouseover = function(){
			animate(img[this.index],{right:50});

		}
			img[i].onmouseout = function(){
			animate(img[this.index],{right:0},Tween.Linear);
		}
		}
		
	}
	xuanxiangka1(".erduofu",".erduo")
	function xuanxiangka1(obj,val){
	var arr = $(obj);
	var item = $(val);
	
	for(var i=0;i<arr.length;i++){
		arr[i].index = i;
		arr[i].onmouseover = function(){
			// item[this.index].style.display = "block";	
			animate(item[this.index],{top:-12,opacity:1});
		}
		arr[i].onmouseout = function(){
			// item[this.index].style.display = "none";
			animate(item[this.index],{top:0,opacity:0});	
		}
		
		}
	}

	xuanxiangka(".shang1",".xia1");
	xuanxiangka(".shang2",".xia2");
	xuanxiangka(".shang3",".xia3");
	xuanxiangka(".shang4",".xia4");
	
	xuanxiangka(".hs_fu",".hs_zi");
	xuanxiangka(".fenlei",".detail");
	function xuanxiangka(obj,val){
	var arr = $(obj);
	var item = $(val);
	
	for(var i=0;i<arr.length;i++){
		arr[i].index = i;
		arr[i].onmouseover = function(){
			item[this.index].style.display = "block";	
		}
		arr[i].onmouseout = function(){
			item[this.index].style.display = "none";	
		}
		
		}
	}
//楼层
louceng(".main_box",".search_hezi",".louti",".leftsidebar")
function louceng(floor,search,li,search1){
		var lous=$(floor);/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	// console.log(lous);
	var arr=[];
	// var num=0;
	for(var i=0;i<lous.length;i++){
		arr.push(lous[i].offsetTop);
		// console.log(arr[i]);
	}
	//获得浏览器窗口的高度
	var height=document.documentElement.clientHeight;
	// console.log(height);
	var sflag=true;
	var search1=$(search1)[0];
	var search=$(search)[0];/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	//楼层跳转

	var flag=true;
	var lis=$(li);/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	// console.log(lis);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		
		// console.log(lis[i].index)
		lis[i].onclick=function(){
			flag=false;

			// if( num==this.index){
			// 	return;
			// }
			var obj=document.body?document.body:document.documentElement;
			// console.log(arr[this.index])
			for(var j=0;j<lis.length;j++){
				lis[j].style.background="#626262";
			}
			lis[this.index].style.background="#000";

			animate(obj,{scrollTop:arr[this.index]-70},function(){
				flag=true;
			});
			// num=this.index;

		}
	}
	document.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;
		// console.log(scrolltop);
		for(var j=0;j<lous.length;j++){
			// console.log(lous[j]);
			if(scrolltop+height>=arr[j]+300){
				var imgs=$("img",lous[j]);
				// console.log(imgs);
				for(var g=0;g<imgs.length;g++){
					imgs[g].src=imgs[g].getAttribute("imgpath");
				}
			}
		}

		//搜索
		if(scrolltop>=arr[1]-1000){
			if(sflag){
				sflag=false;
				animate(search,{top:0});
				animate(search1,{left:2});
			}
		}else{
			if(!sflag){
				sflag=true;
				animate(search,{top:-50});
				animate(search1,{left:-38});
			}
			
		}
		// 按钮
		if(!flag){
			return ;
		}
		for(var j=0;j<lous.length;j++){
			// console.log(lous[j]);
			if(scrolltop+height>=arr[j]+300){
				for(var i=0;i<lis.length;i++){
				lis[i].style.background="#626262";
			}
			lis[j].style.background="#000";
			}
		}
	}

	}
/******************************************************************************/
}



/* 无缝轮播
	num		记录当前窗口的图片
	next    记录即将显示图片
	在动画之前下一张图片就位   left=widths
	num   left=-widths
	next  left=0
	num=next
*/