window.onload = initScripts;

function initScripts(){
	initPlanetListeners();
  initListerners();
}

function initListerners(){
	console.log("script linked");
	document.getElementById('menuButton').addEventListener('click',openMenu);
}

function openMenu(){
	var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
				document.getElementById('header').style.marginBottom = 144 + "px";
    } else {
        x.className = "topnav";
				document.getElementById('header').style.marginBottom = 0;
    }
}

$(window).on("load resize",function(){
  mainHeightToParticle();
});

function mainHeightToParticle(){
	var offsetHeight = document.getElementById('main').offsetHeight;
	document.getElementById('particles-js').style.height = offsetHeight+'px';
	document.getElementsByClassName('particles-js-canvas-el').height = offsetHeight;
	document.getElementsByTagName('footer')[0].style.display = "block";
}

$(document).ready(function() {

        var planetarium = $.virtualsky({
                id: 'planetarium',
								az: 225,
							 	projection: 'stereo',
							 	constellations: true,
								showplanetlabels: true,

        });

});
