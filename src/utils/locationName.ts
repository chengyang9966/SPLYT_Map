
import {SPLYT_SING,SPLYT_LONDON} from '../constant/Location'
const locationName=(value:boolean)=>{
    if(value){
        return SPLYT_LONDON
    }
    return SPLYT_SING
}

export default locationName