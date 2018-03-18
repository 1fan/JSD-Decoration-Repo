function showright() {
	var floatContact = document.getElementById('float-right-contact');
	var floatContactMini = document.getElementById('float-right-contact-mini');
	if(floatContact.style.display=="none") {
		floatContact.style.display="block";
		floatContactMini.style.display="none";
	}else {
		floatContact.style.display="none";
		floatContactMini.style.display="block";
	}
}

<!-- 返回顶部start
function floatButton () {
if (document.all) {
document.all.topButton.style.pixelTop = document.body.scrollTop;
}
else if (document.layers) {
document.topButton.top = window.pageYOffset;
}
else if (document.getElementById) {
document.getElementById('topButton').style.top = window.pageYOffset + 'px';
   }
}
if (document.all)
window.onscroll = floatButton;
else
setInterval ('floatButton()', 100);
function initButton () {
if (document.all) {
document.all.topButton.style.pixelLeft = document.body.clientWidth - document.all.topButton.offsetWidth;
document.all.topButton.style.visibility = 'visible';
}
else if (document.layers) {
document.topButton.left = window.innerWidth - document.topButton.clip.width - 15;
document.topButton.visibility = 'show';
}
else if (document.getElementById) {
document.getElementById('topButton').style.left = (window.innerWidth - 35) + 'px';
document.getElementById('topButton').style.visibility = 'visible';
   }
}
// 返回顶部End -->
