import { useEffect, useState } from "react";
import check from "../services/methods/authentication.api";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
    try {
        const response = await check();
        if(response.status === 200){
            setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
    } catch (error) {
        setIsAuthenticated(false);
    } finally{
        setLoading(false);
    }
}

useEffect(() => {
    checkAuth();
}, []);

return {isAuthenticated, loading};
};

export default useAuth;