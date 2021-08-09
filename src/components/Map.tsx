import { MapContainer, TileLayer, Marker, Tooltip,Popup,useMapEvents,MapConsumer,useMap } from "react-leaflet";
import React,{useEffect,useState,useMemo,useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import L,{LatLngExpression} from 'leaflet';
import axios from "axios";
import {TaxiIcon,TaxiIconSelected} from "./TaxiIcon";
import distance from '../utils/FIndDistance';
import {LatLngLiteral,MapContainerProps,ChangeViewProps,TaxiProps,HeaderProps} from '../Types';
import {CreateHeader} from '../utils/header';
let config:HeaderProps = CreateHeader();
// delete L.Icon.prototype._getIconUrl;
const icon= L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
     shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
     });



const Map = (props:MapContainerProps) => {
const{checked,numberOfTaxi,setpickUpTime,UpdateValue,setUpdateValue}=props
    const defaultPosition:LatLngExpression= [1.285194,103.8522982]; // Singapore position
    const LondonPosition:LatLngExpression= [51.5049375, -0.0964509]; // London position
    const [Taxis, setTaxis] = useState<TaxiProps[]>([])
 
    const [position, setPosition] = useState(defaultPosition)
   
    const ChangeView=({ center, zoom }:ChangeViewProps)=> {
        const map1 = useMap();
        map1.setView(center, zoom);
        return null;
      }
   

    useEffect(()=>{
      
        axios.get('/api/getLocation',
        Object.assign(config,{params:{
          lat:defaultPosition[0],
          lng:defaultPosition[1],
          count:10,
        }})).then(res=>{
            const{pickup_eta,drivers}=res.data
            setpickUpTime(pickup_eta)
            setTaxis(drivers)
            setUpdateValue()
        })



    },[UpdateValue])

    useEffect(()=>{
        if(checked&&checked===true){
            setPosition(LondonPosition)
            axios.get('/api/getLocation',
            Object.assign(config,{params:{
              lat:defaultPosition[0],
              lng:defaultPosition[1],
              count:10,
            }})).then(res=>{
                const{pickup_eta,drivers}=res.data
                setpickUpTime(pickup_eta)
                setTaxis(drivers)
                setUpdateValue()
            })
        }else{
            setPosition(defaultPosition)
            axios.get('/api/getLocation',
            Object.assign(config,{params:{
              lat:defaultPosition[0],
              lng:defaultPosition[1],
              count:10,
            }})).then(res=>{
                const{pickup_eta,drivers}=res.data
                setpickUpTime(pickup_eta)
                setTaxis(drivers)
                setUpdateValue()
            })
        
        }


    },[checked])
    
    return (
        <div className="TitleContainer MapContainer">
            
        <MapContainer id="Map1" center={position} zoom={15} scrollWheelZoom={false} >
        <ChangeView center={!checked?defaultPosition:LondonPosition} zoom={15} /> 
        {/* <MyComponent /> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={position} icon={icon}
       
        >
        {/* <Marker position={defaultPosition2}/> */}
          <Popup>
            Your Current Location is at {!checked?'Splyt Singapore Pte. Ltd':'Splyt (London)'}
          </Popup>
        </Marker>
        {
           Taxis&& Taxis.length>0&& Taxis.map((w,i)=>{

               let BearingNumber=()=>{if(distance(position[0],position[1],w.location.latitude,w.location.longitude,"K")<= 0.5){
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