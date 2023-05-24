ymaps.ready(init);

var myMap;

function init(){
    const mapWrap = document.querySelector('#map');
    const preloader = document.querySelector('.spinner-border');
    mapWrap.classList.remove('hide-element');
    preloader.classList.add('hide-element');

    myMap = new ymaps.Map("map", {
        center: [55.06, 82.9045],
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"],
    });

    var myPlacemark = new ymaps.Placemark([55.0603, 82.9045], {
        balloonContentHeader: 'Home',
        balloonContentBody: 'Новосибирск, ул.Дачная 21/2',
    });

    myMap.geoObjects.add(myPlacemark);
}

const updateIcon = document.querySelector('.update-icon');

updateIcon.addEventListener('click', () => {
    myMap.setCenter([55.06, 82.9045]);
    myMap.setZoom(16);
});