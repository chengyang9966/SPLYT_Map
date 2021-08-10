import {SliderProps} from '../Types'

const Slider=({value,onChange}:SliderProps)=>{
    return(
        <>
        <div className="TitleContainer">
<input type="range" className="form-range" value={value} onChange={onChange} id="customRange2"/>
<div style={{textAlign:'center',marginTop:'10px'}} className="slider-text">{value} numbers of Taxis</div>
        </div>
</>
    )
}

export default Slider