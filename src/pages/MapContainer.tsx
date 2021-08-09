import React,{useEffect,useState} from 'react';
import {LatLngExpression} from 'leaflet';

import Map from '../components/Map';
import MasterPageLayout from '../components/masterPage';
import axios from 'axios';
import {CreateHeader} from '../utils/header';

import { HeaderProps } from '../Types';
import Loading from '../components/Loading';

const MapPage=()=>{
    const defaultPosition:LatLngExpression = [1.285194,103.8522982]; // Singapore position
    const [UpdateValue, setUpdateValue] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    let config:HeaderProps = CreateHeader();
    useEffect(()=>{
      axios.get('/api/getLocation',
      Object.assign(config,{params:{
        lat:defaultPosition[0],
        lng:defaultPosition[1],
        count:10,
      }})).then(res=>{
        console.log(res.data)
      })
    })

    return(
        <>
<MasterPageLayout>
<>
<div className="bodyWrapper">
                  <div className="TitleContainer d-flex align-items-center justify-content-between">
            <h1 className="titleText">
              Map
            </h1>
              </div>
      <Map checked={false} numberOfTaxi={10} setUpdateValue={()=>console.log('qaweqe')} setpickUpTime={(value)=>{console.log(value)}} UpdateValue={()=>console.log('BYE')}/>
        <div className="my-5 px-4 d-grid">
  <button type="submit" onClick={()=>setUpdateValue(true)} className="btn btn-primary rounded-pill">Ok</button>
  </div>
        </div>
  </>
    </MasterPageLayout>
    {
        loading&& <Loading />
    }
    </>
    )
}
export default MapPage