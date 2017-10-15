var oNodeList =[];

function parseDom(arg){
	var objE = document.createElement('div');
	objE.innerHTML = arg;
	return objE.childNodes;
}
oNodeList[0] = parseDom('<li ><div class="content"><div class="parent"><p class="text"></p></div><div class="anim01 photo"></div></div></li>');
oNodeList[1] = parseDom('<li><div class="content"><div class="parent"><div class="ge15 text"></div></div><div class="photo anim02 am-animation-slide-left"></div></div></li>');
oNodeList[2] = parseDom('<li><div class="content"><div class="photo anim03 am-animation-slide-top"></div><div class="parent"><p class="text"></p></div></div></li>');
oNodeList[3] = parseDom('<li><div class="content"><div class="parent"><div class="ge15 text"></div></div><div class="photo anim04 am-animation-fade"></div></div></li>');
oNodeList[4] = parseDom('<li><div class="content"><div class="ge5"></div><div class="photo anim05 "></div><div class="ge5"></div><div class="parent"><p class="text"></p></div></div></li>');
oNodeList[5] = parseDom('<li><div class="content"><div class="parent"><div class="ge10 text"></div></div><div class="photo anim06 model6_1"></div><div class="photo am-animation-slide-left model6_2"></div></div></li>');
oNodeList[6] = parseDom('<li><div class="content"><div class="parent"><div class="ge15 text"></div></div><div class="photo am-animation-slide-right model6_1"></div><div class="photo am-animation-slide-bottom model6_2"></div></div></li>');
oNodeList[7] = parseDom('<li><div class="content"><div class="parent"><div class="ge15 text"></div></div><div class="photo am-animation-slide-left model8_1"></div><div class="photo am-animation-slide-right model8_2"></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}
