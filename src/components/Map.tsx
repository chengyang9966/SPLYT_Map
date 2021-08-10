import { MapContainer, TileLayer, Marker,Popup,useMap } from "react-leaflet";
import React,{useEffect,useState} from 'react';
import 'leaflet/dist/leaflet.css';
import L,{LatLngTuple} from 'leaflet';
import axios from "axios";
import {TaxiIcon,TaxiIconSelected} from "./TaxiIcon";
import distance from '../utils/FIndDistance';
import {LatLngLiteral,MapContainerProps,ChangeViewProps,TaxiProps,HeaderProps} from '../Types';
import {CreateHeader} from '../utils/header';
import {SPLYT_SING,SPLYT_LONDON} from '../constant/Location';
import locationName from '../utils/locationName'
let config:HeaderProps = CreateHeader();
// delete L.Icon.prototype._getIconUrl;
const icon= L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
     shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
     });



const Map = (props:MapContainerProps) => {
const{checked,numberOfTaxi,setpickUpTime,UpdateValue,setUpdateValue,position,setLoadingFalse,setLoadingTrue}=props
   
    const [Taxis, setTaxis] = useState<TaxiProps[]>([])
 const[TempLocation,setTempLocation]=useState<LatLngTuple>(position)
 const[TempChecked,setTTempChecked]=useState<boolean>(checked)

   
    const ChangeView=({ center, zoom }:ChangeViewProps)=> {

        const map1 = useMap();
      UpdateValue&&UpdateValue===true&&map1.setView(center, zoom);
        return null;
      }
   

    useEffect(()=>{
      if(UpdateValue&&UpdateValue===true){
        setLoadingTrue()
          axios.get('/api/getLocation',
          Object.assign(config,{params:{
            lat:position[0],
            lng:position[1],
            count:numberOfTaxi,
          }})).then(res=>{
              const{pickup_eta,drivers}=res.data
              setpickUpTime(pickup_eta)
              setTaxis(drivers)
              setTempLocation(position)
              setUpdateValue()
              setLoadingFalse()
              setTTempChecked(checked)
          })
      
      }
       



    },[UpdateValue])

    useEffect(()=>{
      setLoadingTrue()
          axios.get('/api/getLocation',
          Object.assign(config,{params:{
            lat:position[0],
            lng:position[1],
            count:numberOfTaxi,
          }})).then(res=>{
              const{pickup_eta,drivers}=res.data
              setpickUpTime(pickup_eta)
              setTaxis(drivers)
              setTempLocation(position)
              setUpdateValue()
              setLoadingFalse()
              setTTempChecked(checked)
          })
    
       



    },[])

    return (
        <div className="TitleContainer MapContainer">
            
        <MapContainer id="Map1" center={TempLocation} zoom={15} scrollWheelZoom={false} >
        <ChangeView center={TempLocation} zoom={15} /> 
        {/* <MyComponent /> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={TempLocation} icon={icon}
       
        >
        {/* <Marker position={defaultPosition2}/> */}
          <Popup>
            Your Current Location is at {locationName(TempChecked)}
          </Popup>
        </Marker>
        {
           Taxis&& Taxis.length>0&& Taxis.map((w,i)=>{

               let BearingNumber=()=>{if(distance(TempLocation[0],TempLocation[1],w.location.latitude,w.location.longitude,"K")<= 0.5){
                   return true 
               }else return false
}
               return(
                   <Marker key={w.driver_id}  position={[w.location.latitude,w.location.longitude]} icon={BearingNumber()?TaxiIconSelected:TaxiIcon}/>

               )
           })
        }
        
      </MapContainer>
        </div>
        
    );
  };
  
  export default Map