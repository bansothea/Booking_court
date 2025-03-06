import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import routes from "../config/routes"

export const ProtectedRouted = () => {
    const [loading, setLoading] = useState(true)
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const router= useRouter();

    useEffect(()=>{
        const token = localStorage.getItem("token"); 

        if(!token){
            setIsAuthenticated(false)
            router.replace("/signin");

        }
        else{
            setIsAuthenticated(true);
        }
        
        setLoading(false);
    },[router]);
    if (loading ) return <p>Loading...</p>
  return isAuthenticated ? children : null;
}
