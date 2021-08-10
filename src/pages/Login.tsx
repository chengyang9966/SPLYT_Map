import React from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
const LoginPage=()=>{
    return(
        <div className="popUp-Bg d-flex align-items-center justify-content-center">
        <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			
			</div>
			<div className="card-body">
				<form>
					 <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div> 
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
                            <FontAwesomeIcon icon={faKey}/>
                                
                                </span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					{/* <div className="row align-items-center remember">
						<input type="checkbox">Remember Me</input>
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div> */}
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default LoginPage    