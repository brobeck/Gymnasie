window.onload = initListerners;

function initListerners(){
	document.getElementById('menuButton').addEventListener('click',openMenu);
	
}

function openMenu(){
	    var x = document.getElementById("rect");
    if (x.className === "rectangle") {
        x.className += " responsive";
    } else {
        x.className = "rectangle";
    }

}