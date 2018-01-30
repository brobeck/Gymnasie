window.onload = start;

function start()
{
  initListeners();
}

function initListeners()
{
  var planFig = document.getElementsByClassName('planetFigure');

  for(i=0;i<planFig.length;i++)
  {
    planFig[i].addEventListener('click',dispMercury);
  }
}

function dispMercury()
{
  this.nextSibling.style.display = "block";
}
