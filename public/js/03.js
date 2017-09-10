var oNodeList =[];

function parseDom(arg){
    var objE = document.createElement('div');
    objE.innerHTML = arg;
    return objE.childNodes;
}

oNodeList[0] = parseDom('<li><div class="content anim01"><div class="photo"><div><h2 class="am-animation-spin">卡通图</h2></div><div class="am-animation-slide-right"><p>照片</p><span> 留&nbsp&nbsp&nbsp住&nbsp&nbsp&nbsp时&nbsp&nbsp&nbsp间&nbsp&nbsp&nbsp带&nbsp&nbsp&nbsp走&nbsp&nbsp&nbsp的</span></div></div></div></li>');
oNodeList[1] = parseDom('<li class="anim02"><div class="content photo"><div class="heighten"><p>跟着感觉走，纵是初见，</p><p>&nbsp&nbsp蓦然回首，也似曾相识</p></div></div></li>');
oNodeList[2] = parseDom('<li class="anim03"><div class="content photo"><div class="heighten"><h2>纪念</h2><p>很多时候</p><p>瞬间划过指尖</p><p>留下的就只剩纪念</p></div></div></li>');
oNodeList[3] = parseDom('<li><div class="content anim04"><div class="photo"></div><div class="text am-animation-slide-right"><h2>一眼万年</h2><p>换个心情，轻装上阵</p><p>风光如许，一眼万年</p></div></div></li>');
oNodeList[4] = parseDom('<li><div class="content anim05"><div class="text "><h2>如诗如画</h2><p>钟灵毓秀，都是自然的诗篇</p><p>风花雪月，都是风光的画卷</p></div><div class="photo flipInY"></div></div></li>');
oNodeList[5] = parseDom('<li><div class="content anim06"><div class="photo am-animation-slide-left"></div><div class="photo am-animation-slide-right"></div><div class="text am-animation-fade"><p>风景的美好，不止是视觉的到达</p><p>更是一种朦胧的期盼</p></div></div></li>');
oNodeList[6] = parseDom('<li><div class="content anim07"><div class="text"><h2>印象</h2></div><div class="photo heighten"></div><div class="photo widthen"></div><div class="photo widthen"></div><div class="text am-animation-fade"><p>小小的取景框</p><p>小小的印象</p></div></div></li>');
oNodeList[7] = parseDom('<li><div class="content anim08"><div class="photo am-animation-fade"></div><p></p><div class="photo am-animation-fade"></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}
