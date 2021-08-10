import{  useState } from "react";
import { LatLngExpression } from "leaflet";
import moment from "moment";

import Map from "../components/Map";
import MasterPageLayout from "../components/masterPage";
import Loading from "../components/Loading";
import Toogle from "../components/Toogle";
import Slider from "../components/Slider";
import Card from '../components/Card';

import CardItem from '../constant/CardItem';

import locationName from '../utils/locationName';
const MapPage = () => {
  const defaultPosition: LatLngExpression = [1.285194, 103.8522982]; // Singapore position
  const LondonPosition: LatLngExpression = [51.5049375, -0.0964509]; // London position
  const [UpdateValue, setUpdateValue] = useState<boolean>(false);
  const [NumbersOfTaxis, setNumbersOfTaxis] = useState<number>(10);
  const [pickUpTime, setpickUpTime] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedLocation, setcheckedLocation] = useState<boolean>(false);
  const [cardOpen, setcardOpen] = useState(false);
  const [CardDetails, setCardDetails] = useState(CardItem);
  
  const SetPickUpTime=(value:number)=>{
    setpickUpTime(value)
    setCardDetails({
        ...CardDetails,
        title:'Pick Up Estimate time',
        description:`${locationName(checkedLocation)} at ${moment().add(value,'minutes').format('HH:mm')}`,
        setClose:()=>setcardOpen(false)
    })
    pickUpTime>0&&pickUpTime!==value&&setcardOpen(true)
}
  
  return (
    <>
      <MasterPageLayout>
        <>
          <div className="bodyWrapper">
            <div className="TitleContainer d-flex align-items-center justify-content-between">
              <h1 className="titleText">Map</h1>
            </div>
            <Map
            setLoadingTrue={()=>setLoading(true)}
            setLoadingFalse={()=>setLoading(false)}
              position={checkedLocation ? defaultPosition : LondonPosition}
              checked={checkedLocation}
              numberOfTaxi={NumbersOfTaxis}
              setUpdateValue={() => setUpdateValue(!UpdateValue)}
              setpickUpTime={SetPickUpTime}
              UpdateValue={UpdateValue}
            />
            <div className="my-5 px-4 d-grid">
              <Toogle
                checked={checkedLocation}
                onChange={() => {
                  setcheckedLocation(!checkedLocation);
                }}
              />
              <Slider
                value={NumbersOfTaxis}
                onChange={(e: any) => {
                  setLoading(true);
                  setNumbersOfTaxis(e.target.value);
                  setLoading(false);
                }}
              />
              <button
                type="submit"
                onClick={() => setUpdateValue(true)}
                className="btn btn-primary rounded-pill"
              >
                Ok
              </button>
            </div>
          </div>
        </>
      </MasterPageLayout>
         {cardOpen&&<Card title={CardDetails.title} description={CardDetails.description} setClose={CardDetails.setClose}  />}
      {loading && <Loading />}
    </>
  );
};
export default MapPage;
