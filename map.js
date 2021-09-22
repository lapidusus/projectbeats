let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10.5,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    const coords = [
        [55.75, 37.50],
        [55.75, 37.71],
        [55.70, 37.70],
        [55.74, 37.44]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    //myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);