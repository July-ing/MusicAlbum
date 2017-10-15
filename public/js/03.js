var oNodeList =[];

function parseDom(arg){
    var objE = document.createElement('div');
    objE.innerHTML = arg;
    return objE.childNodes;
}

oNodeList[0] = parseDom('<li><div class="content anim01"><div class="photo"><div class="am-animation-slide-right"><p class="text"></p></div></div></div></li>');
oNodeList[1] = parseDom('<li class="anim02"><div class="content photo"><div class="heighten"><div class="parent"><p class="text"></p></div></div></div></li>');
oNodeList[2] = parseDom('<li class="anim03"><div class="content photo"><div class="heighten"><div class="parent"><p class="text"></p></div></div></div></li>');
oNodeList[3] = parseDom('<li><div class="content anim04"><div class="photo"></div><div class="am-animation-slide-right"><div class="parent"><p class="text"></p></div></div></div></li>');
oNodeList[4] = parseDom('<li><div class="content anim05"><div class="parent "><p class="text"></p></div><div class="photo flipInY"></div></div></li>');
oNodeList[5] = parseDom('<li><div class="content anim06"><div class="photo am-animation-slide-left"></div><div class="photo am-animation-slide-right"></div><div class="text am-animation-fade"><p>风景的美好，不止是视觉的到达</p><p>更是一种朦胧的期盼</p></div></div></li>');
oNodeList[6] = parseDom('<li><div class="content anim07"><div class="parent"><p class="text"></p></div><div class="photo heighten"></div><div class="photo widthen"></div><div class="photo widthen"></div></li>');
oNodeList[7] = parseDom('<li><div class="content anim08"><div class="photo am-animation-fade"></div><div class="parent"><p class="text"></p></div><div class="photo am-animation-fade"></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}
