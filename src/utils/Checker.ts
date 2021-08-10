import {CheckerProps,CheckerReturnProps} from '../Types'
const Checker=(props:CheckerProps):CheckerReturnProps=>{
    const {username,password}=props
    let error={
        Error:false
    }    
    if(!password){
        error=Object.assign(error,{
            PasswordText:'Please provide a password longer than 6 digit',
            Error:true
        })
    }
    if(!username){
        error=Object.assign(error,{
            UserNameText:'Please provide a username',
            Error:true
        })
    }
    if(password!==undefined){
        if(password.length<6){
            error=Object.assign(error,{
                PasswordText:'Please provide a password longer than 6 digit',
                Error:true
            })

        }
    }
    if(username!==undefined){
        if(username.length<6){
            error=Object.assign(error,{
                UserNameText:'Please provide a username longer than 6 digit',
                Error:true
            })
        }
    }
    
    return error
    
    }
    
    export default Checker