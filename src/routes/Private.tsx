import PrivateRoute from "../utils/PrivateRoute";
import React,{useState,useEffect} from "react";
import NotFound from '../components/NotFound';
import Loading from "../components/Loading";
import MapContainer from "../pages/MapContainer";
import HomePage from '../pages/Home';
import CheckAuth from '../utils/authChecker';
import {
    Route, Switch
  } from "react-router-dom";
const PrivateRoutes=()=>{
    const [status,SetStatus]=useState(false)
    const [data,SetData]=useState(false)
    useEffect(() => {
        !status&&
        CheckAuth().then(res=>
            {  console.log('res: ', res);
              SetData(res);
              SetStatus(true)
          }).then(err=>{
              console.error(err);
          SetStatus(true)}
          );
    }, [status])
     
    console.log('data: ', data);

    return(
        <>
        {
            !status?
            <Loading/>:
            <PrivateRoute auth={data}>
            <Switch>
                <Route path="/map" exact component={MapContainer}/>
                <Route path="/home" exact component={HomePage}/>
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