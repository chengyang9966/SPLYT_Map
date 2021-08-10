import axios from 'axios'
import {CreateToken,CreateHeader} from './createToken'
const  CheckAuth=async()=>{
   
    const user =JSON.parse(localStorage.getItem('user')||'{}')
    const login =localStorage.getItem('login')||''
    console.log('login: ', login.length);

       
        let temp =false
        if(!login&&login.length===0){
            return temp
        }
  
          
            if(  login==='true'&&user&&Object.keys(user).length>0){
                if(CreateToken()!==''){
                 await  axios.post('/api/auth',{
                    username:user.username
                    },CreateHeader()
                    ).then(res=>{
                        if(res.status===201){
                            temp= true 
                        }
                    })
                }
            }
        
        return temp
}
export default CheckAuth