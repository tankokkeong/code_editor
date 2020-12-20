var myoffset;
function resizeE(elem){
    var borderDiv = document.createElement("div");
    borderDiv.className = "border";
    borderDiv.addEventListener("mousedown",myresize = function myrsize(e) {
	    myoffset = e.clientX - (document.getElementById(elem).offsetLeft + parseInt(window.getComputedStyle(document.getElementById(elem)).getPropertyValue("width")));
	    window.addEventListener("mouseup",mouseUp);
	    document.addEventListener("mousemove",mouseMove = function mousMove(e) {
	   	 document.getElementById(elem).style.width = `${e.clientX -  myoffset - document.getElementById(elem).offsetLeft}px`;
		});
	});
    document.getElementById(elem).appendChild(borderDiv);
}
