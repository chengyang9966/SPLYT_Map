import React,{useState} from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginProps,HeaderProps } from '../Types';
import EyesIcon from '../components/EyeIcon';
import axios from 'axios';
import {CreateHeader} from '../utils/header';
const LoginPage=()=>{
    const [PreviewPassword,setPreviewPassword]=useState<boolean>(false);
    let config:HeaderProps = CreateHeader();
    const [user,setUser]=useState<LoginProps>({
        username:'',
        password:''
    })
    const onChange =(name:string,value:string)=>{
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        axios.post('/api/login',{body:user,...config}).then(res=>{
            console.log(res.data)
        })
    }
    return(
        <div className="popUp-Bg d-flex align-items-center justify-content-center">
        <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			
			</div>
			<div className="card-body">
				<form onSubmit={(data:any)=>onSubmit(data)}>
					 <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
						</div>
						<input type="text" className="form-control" name="username" onChange={(e)=>onChange(e.target.name,e.target.value)} placeholder="username" value={user.username}/>
						
					</div> 
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
                            <FontAwesomeIcon icon={faKey}/>
                                
                                </span>
						</div>
						<input type={PreviewPassword?'text':'password'} className="form-control" name="password" onChange={(e)=>onChange(e.target.name,e.target.value)} placeholder="password" value={user.password}/>
                        {EyesIcon(PreviewPassword,()=>setPreviewPassword(!PreviewPassword))}
                    </div>
					{/* <div className="row align-items-center remember">
						<input type="checkbox">Remember Me</input>
					</div>
                */}
                <div className="form-group d-flex justify-content-center">
                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div> 
				</form>
			</div>
			{/* <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div> */}
		</div>
	</div>
</div>
        </div>
    )
}

export default LoginPage    