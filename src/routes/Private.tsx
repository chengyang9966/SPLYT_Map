import PrivateRoute from "../utils/PrivateRoute";
import React,{useState,useEffect} from "react";
import NotFound from '../components/NotFound';
import Loading from "../components/Loading";
import MapContainer from "../pages/MapContainer"
import {
    Route, Switch
  } from "react-router-dom";
const PrivateRoutes=()=>{
    const [status,SetStatus]=useState(true)
    const [data,SetData]=useState(true)
    return(
        <>
        {
            !status?
            <Loading/>:
            <PrivateRoute auth={data}>
            <Switch>
                <Route path="/map" exact component={MapContainer}/>
           {/* <Route path="/123" exact component={Title}/>
           <Route path="/Profile" exact component={Profile}/>
           <Route path="/Map" exact component={MapPage}/> */}
            <NotFound/>
            </Switch>
        </PrivateRoute>
        }
        </>
    )
}

export default PrivateRoutes