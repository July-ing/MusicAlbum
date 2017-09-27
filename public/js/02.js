var oNodeList =[];

function parseDom(arg){
	var objE = document.createElement('div');
	objE.innerHTML = arg;
	return objE.childNodes;
}

oNodeList[0] = parseDom('<li class="li1"><div class="content"><div class="ge5"></div><div><img src="src/3.jpg" alt=""></div><div class="ge5"></div><div class="anim01 am-animation-slide-bottom photo"></div></div></li>');
oNodeList[1] = parseDom('<li class="li2"><div class="content"><p></p><div class="anim02 photo"><div></div></div></div></li>');
oNodeList[2] = parseDom('<li ><div class="content"><div class="anim03"><div class="a3top"><div class="fl am-animation-slide-bottom photo"></div><div class="fr"><h1 class="am-animation-fade"><br></h1><p class="am-animation-fade"><br><br><br></p></div></div><div class="a3bottom"><div class="fl am-animation-slide-bottom photo"></div><div class="fr am-animation-slide-top photo"></div></div></div></div></li>');
oNodeList[3] = parseDom('<li ><div class="content"><div class="anim04"><div class="am-animation-fade"><h1></h1><p><br</p></div><div class="am-animation-slide-right photo"></div><div class="am-animation-slide-left photo"></div><div class="am-animation-fade"><h1><br></h1><p><br></p></div></div></div></li>');
oNodeList[4] = parseDom('<li ><div class="content"><div class="anim05"><div class="a5top am-animation-fade"><h1></h1><h2></h2><p></p></div><div class="a5bottom cl"><div class="fl flipInY photo"></div><div class="fr flipInX photo"></div><div class="fr flipInX photo"></div></div></div></div></li>');
oNodeList[5] = parseDom('<li ><div class="content"><div class="anim06"><div class="am-animation-fade"><h1></h1><span>◇</span><p><br><br></p></div><div class="am-animation-slide-right fr photo"></div><div class="am-animation-slide-left fr photo"></div></div></div></li>');
oNodeList[6] = parseDom('<li ><div class="content"><div class="anim07"><div class="am-animation-fade"><p></p><span><br></span><h1></h1></div><div class="am-animation-fade photo"></div></div></div></li>');
oNodeList[7] = parseDom('<li><div class="content"><div class="anim08"><div class="am-animation-fade "></div><div class="am-animation-fade"></div><div class="am-animation-slide-bottom photo"></div><div class="am-animation-slide-bottom photo"></div><div class="am-animation-slide-bottom photo"></div></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}
