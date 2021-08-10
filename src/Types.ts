import {LatLngExpression} from 'leaflet';

export interface LatLngValues {
    success: boolean;
    message: string;
  }

  export interface LatLngLiteral {
    lat: number;
    lng: number;
}

export interface MapContainerProps {
    checked:boolean,
    numberOfTaxi:number,
    setpickUpTime:(value: React.SetStateAction<boolean>)=>void,
    UpdateValue:()=>void,
    setUpdateValue:() => void,
}

export interface ChangeViewProps {
    center:LatLngExpression, 
    zoom:number
}

export interface TaxiProps {
    driver_id:string,
    location:{
        bearing: number
latitude: number
longitude: number
    }
}
export interface HeaderProps{
    headers:{
        'Content-Type':string
      }
}

export interface MasterPageLayoutProps {
    children:JSX.Element,
}
export interface RouteProps {
    children:JSX.Element,
    auth:boolean
}

export interface LoginProps{
    username:string,
    password:string
}