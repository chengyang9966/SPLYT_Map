import {LatLngExpression,LatLngTuple} from 'leaflet';

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
    setpickUpTime:(value: number)=>void,
    UpdateValue:boolean,
    setUpdateValue:() => void,
    position:LatLngTuple,
    setLoadingTrue:()=>void,
    setLoadingFalse:()=>void,
    SetError:(value:string)=>void
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
export interface LoginPageProps{
   register?:boolean
}
export interface ToogleProps{
   checked:boolean
   onChange:()=>void
}

export interface SliderProps{
   value:number
   onChange:(e:any)=>void
}
export interface CardProps{
    title:string
    description:string
    button?:boolean
    buttonText?:string
    link?:string
    setClose:string |(()=>void)
}