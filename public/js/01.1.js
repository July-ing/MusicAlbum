var oNodeList =[];

function parseDom(arg){
	var objE = document.createElement('div');
	objE.innerHTML = arg;
	return objE.childNodes;
}

oNodeList[0] = parseDom('<li ><div class="content" ><div class="ge15"><h2>卡通图</h2> <em>e s d f h d f f g</em></div><div class="anim01 photo"></div></div></li>');
oNodeList[1] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo anim02 am-animation-slide-left"></div></div></li>');
oNodeList[2] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo anim03 am-animation-slide-top"></div></div></li>');
oNodeList[3] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo anim04 am-animation-fade"></div></div></li>');
oNodeList[4] = parseDom('<li><div class="content"><div class="ge25"><h1>priment</h1> <em>f g e a g y j l</em></div><div class="photo anim05 "></div></div></li>');
oNodeList[5] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo anim06 model6_1"></div><div class="photo am-animation-slide-left model6_2"></div></div></li>');
oNodeList[6] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo am-animation-slide-right model6_1"></div><div class="photo am-animation-slide-bottom model6_2"></div></div></li>');
oNodeList[7] = parseDom('<li><div class="content"><div class="ge15"></div><div class="photo am-animation-slide-left model8_1"></div><div class="photo am-animation-slide-right model8_2"></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}