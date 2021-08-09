import { MasterPageLayoutProps } from '../Types';
import SideMenu from './navbar';

const MasterPageLayout=(props:MasterPageLayoutProps)=>{
    return(
        <div className="d-flex">
            <div style={{width:'10%',backgroundColor:'white',minWidth:'170px'}}>
           <SideMenu/>
            </div>
            <div className="Container-Right">
           {props.children}
            </div>
        </div>
    )
}

export default  MasterPageLayout