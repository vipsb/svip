// JavaScript Document
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}
suspendcode12="<DIV id=\"lovexin12\" style='left:25px;POSITION:absolute;TOP:100px;'><a href='http://suo.im/4OXIX' target='_blank'><img border=0 src=inc/ad-0001.gif><br></div>"

suspendcode14="<DIV id=\"lovexin14\" style='right:25px;POSITION:absolute;TOP:100px;'><a href='http://suo.im/4OXIX' target='_blank'><img border=0 src=inc/ad-0002.gif><br></div>"

document.write(suspendcode12); 
document.write(suspendcode14); 
window.setInterval("heartBeat()",1);
