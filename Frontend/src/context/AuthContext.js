import { createContext,useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
   
    let [authTokens,setauthTokens] = useState(()=> localStorage.getItem('authTokens') ?  JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user,setUser] = useState(()=> localStorage.getItem('authTokens') ?  jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading,setLoading] = useState(true)


    const navigate = useNavigate()

    let loginUser = async(e) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/auth/token/',{
            method : 'POST',
            headers: { 
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data= await response.json()
        if(response.status === 200){
            setauthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/');
        }
        else{
            alert('something went wrong')
        }
       
    }
    let logoutUser = () => {
        setauthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    }

    let updateToken = async () => {
        console.log("update token called")
        let response = await fetch('http://127.0.0.1:8000/auth/token/refresh/',{
            method : 'POST',
            headers: { 
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })
        let data= await response.json()
        if(response.status === 200){
            setauthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))

        }else{
            logoutUser();
        }

        if(loading){
            setLoading(false);
        }
    }
    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        authTokens:authTokens,
    }


    useEffect(()=>{
        if(loading){
            updateToken()
        }
        let fourMinutes = 1000*60*4
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken();
            }
        },fourMinutes)

        return ()=> clearInterval(interval);
    },[authTokens,loading])


    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
        )
};


