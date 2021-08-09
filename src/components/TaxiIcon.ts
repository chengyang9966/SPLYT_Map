
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
 const TaxiIcon = new L.Icon({
    iconUrl: '/pin1.png',
    iconRetinaUrl:'/pin1.png',
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    iconSize: new L.Point(60, 75),
    // className: 'leaflet-div-icon'
});
 const TaxiIconSelected = new L.Icon({
    iconUrl: '/pin2.png',
    iconRetinaUrl:'/pin2.png',
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    iconSize: new L.Point(60, 75),
    // className: 'leaflet-div-icon'
});

export  {TaxiIcon,TaxiIconSelected}