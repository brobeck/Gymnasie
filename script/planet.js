
function initPlanetListeners()
{
  var planFig = document.getElementsByClassName('planetFigure');

  for(i=0;i<planFig.length;i++)
  {
    planFig[i].addEventListener('click',dispMercury);
  }
}

function dispMercury()
{
  var nxtSib = this.nextSibling.nextSibling;

  console.log(nxtSib);

  if(nxtSib.style.display === 'block'){
    nxtSib.style.display = "none";
  }
  else{
    nxtSib.style.display = "block";
  }
}
