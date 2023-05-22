ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.06, 82.9045],
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"],
    });
}