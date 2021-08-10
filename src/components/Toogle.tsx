import React from 'react'
import {ToogleProps} from '../Types'
import {SPLYT_SING,SPLYT_LONDON} from '../constant/Location'
const Toogle=({checked,onChange}:ToogleProps)=>{
    return(
        <>
      <div className="d-flex TitleContainer justify-content-around">
      <label className="form-check-label " >{SPLYT_SING}</label>

        <div className="form-check form-switch">
  <input className="form-check-input" value={checked.toString()} onChange={onChange} type="checkbox" id="flexSwitchCheckDefault"/>
    </div>
  <label className="form-check-label">{SPLYT_LONDON}</label>
      </div>
        </>
    )
}
export default Toogle
