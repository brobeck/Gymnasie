function initPlanetListeners() {
    document.getElementById('btn').addEventListener('click', print);
    print();
}

var planets/*And Pluto...*/ = [
  {
    name: "Merkurius",
    distance: 1,
    size: 8,
    image: "img/planets/merkurius.svg"
  },{
    name: "Venus",
    distance: 2,
    size: 6,
    image: "img/planets/venus.svg"
  },{
    name: "Jorden",
    distance: 3,
    size: 5,
    image: "img/planets/jorden.svg"
  },{
    name: "Mars",
    distance: 4,
    size: 7,
    image: "img/planets/mars.svg"
  },{
    name: "Jupiter",
    distance: 5,
    size: 1,
    image: "img/planets/jupiter.svg"
  },{
    name: "Saturnus",
    distance: 6,
    size: 2,
    image: "img/planets/saturnus.svg"
  },{
    name: "Uranus",
    distance: 7,
    size: 3,
    image: "img/planets/uranus.svg"
  },{
    name: "Neptunus",
    distance: 8,
    size: 4,
    image: "img/planets/neptunus.svg"
  },{
    name: "Pluto",
    distance: 9,
    size: 9,
    image: "img/planets/pluto.svg"
  }
]

var sortedBy = {
  size: _.sortBy(planets, 'size'),
  distance: _.sortBy(planets, 'distance'),
  name: _.sortBy(planets, 'name'),
}

var sortedArr = [];
function print() {
  switch ($("#sortBySelect").val()) {
    case "distance":
      sortedArr = sortedBy.distance;
      break;
    case "size":
      sortedArr = sortedBy.size;
      break;
    case "name":
      sortedArr = sortedBy.name;
      break;
    default:
      sortedArr = sortedBy.distance;
  }

  /*<figure class = "planetFigure">
    <img id = "mercuryImage" src="bilder//planets//merkurius.svg" alt="Merkurius">
    <figcaption class = "planetCaption">Merkurius</figcaption>
  </figure>
  <div id="mercuryInfo">
    info om merkurius
  </div>*/

  var contentBox = $("#solsysContent");
  contentBox.empty();
  _.each(sortedArr, function(planet){
    var template = "";
    template += "<figure class = 'planetFigure'>";
    template +=   "<img src='" + planet.image + "' alt='" + planet.name + "'>";
    template +=   "<figcaption class = 'planetCaption'>" + planet.name + "</figcaption>";
    template += "</figure>";
    template += "<div id='" + planet.name + "Info'>"
    template +=   "info om merkurius"
    template += "</div>"
    var planetElement = $(template);
    contentBox.append(planetElement);
  });
  mainHeightToParticle();
}
