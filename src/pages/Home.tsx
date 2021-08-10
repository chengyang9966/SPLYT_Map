
import MasterPageLayout from '../components/masterPage';

const HomePage=()=>{

    return (
        <MasterPageLayout>
            <div className="bodyWrapper">
                <div style={{width:'90vw',height:'100vh'}} className="d-flex flex-column justify-content-center align-items-center">
              <h1>Welcome to SPLYT_MAP</h1> 
                <img src="/pin2.png" width="100" height="100" className="rotate"/>
                </div>
            </div>
        </MasterPageLayout>
    )
}

export default HomePage