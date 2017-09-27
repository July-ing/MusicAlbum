var oNodeList =[];

function parseDom(arg){
	var objE = document.createElement('div');
	objE.innerHTML = arg;
	return objE.childNodes;
}

oNodeList[0] = parseDom('<li class="li1"><div class="content"><div class="ge5"></div><div>carton photo <img src="src/3.jpg" alt=""></div><div class="ge5"></div><div class="anim01 am-animation-slide-bottom photo"></div></div></li>');
oNodeList[1] = parseDom('<li class="li2"><div class="content"><p>DREAM</p><div class="anim02 photo"><div></div></div></div></li>');
oNodeList[2] = parseDom('<li ><div class="content"><div class="anim03"><div class="a3top"><div class="fl am-animation-slide-bottom photo"></div><div class="fr"><h1 class="am-animation-fade">A&nbspB<br>C&nbspD</h1><p class="am-animation-fade">M E E T&nbsp&nbsp&nbspL O V E<br>T H R O U G H<br>T H E<br>C R O W D</p></div></div><div class="a3bottom"><div class="fl am-animation-slide-bottom photo"></div><div class="fr am-animation-slide-top photo"></div></div></div></div></li>');
oNodeList[3] = parseDom('<li ><div class="content"><div class="anim04"><div class="am-animation-fade"><h1>I N F I N I T Y</h1><p>I &nbsp&nbspW O U L D  &nbsp&nbspR A T H E R<br>B E &nbsp&nbspW I T H &nbsp&nbspY O U</p></div><div class="am-animation-slide-right photo"></div><div class="am-animation-slide-left photo"></div><div class="am-animation-fade"><h1>SUN-<br>SHINE</h1><p>Y O U &nbsp&nbspA R E<br>N O T &nbsp&nbspA L O N E</p></div></div></div></li>');
oNodeList[4] = parseDom('<li ><div class="content"><div class="anim05"><div class="a5top am-animation-fade"><h1>BEAUTY</h1><h2>F O C U S &nbsp&nbspM Y &nbsp&nbspW A Y</h2><p>B E L O N G　&nbsp&nbspM Y S E L F</p></div><div class="a5bottom cl"><div class="fl flipInY photo"></div><div class="fr flipInX photo"></div><div class="fr flipInX photo"></div></div></div></div></li>');
oNodeList[5] = parseDom('<li ><div class="content"><div class="anim06"><div class="am-animation-fade"><h1>不负时光</h1><span>◇</span><p> S T U D Y<br>A N D &nbsp&nbspW O R K<br>L I K E &nbsp&nbspA R T</p></div><div class="am-animation-slide-right fr photo"></div><div class="am-animation-slide-left fr photo"></div></div></div></li>');
oNodeList[6] = parseDom('<li ><div class="content"><div class="anim07"><div class="am-animation-fade"><p>RECORD MY LIFE</p><span>W O N D E R F U L &nbsp&nbspL I F E<br>W O N D E R F U L &nbsp&nbspD R E A M</span><h1>最初·的梦想</h1></div><div class="am-animation-fade photo"></div></div></div></li>');
oNodeList[7] = parseDom('<li><div class="content"><div class="anim08"><div class="am-animation-fade ">WONDER</div><div class="am-animation-fade">I F &nbsp&nbspL I F E &nbsp&nbspI S &nbsp&nbspA<br>F A I R Y &nbsp&nbspT A L E O R</div><div class="am-animation-slide-bottom photo"></div><div class="am-animation-slide-bottom photo"></div><div class="am-animation-slide-bottom photo"></div></div></div></li>');

//var oUl = document.getElementById('ul');
//for(var i=0; i < oNodeList.length; i++){
//	oUl.appendChild(oNodeList[i][0]);
//}