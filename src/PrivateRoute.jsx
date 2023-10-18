import { getToken } from './lib/token'
import { Navigate,Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const token = getToken()
    if(!token){
        return <Navigate to="/login"/>
    }

 return(
    <Outlet/>
    )
}

export default PrivateRoute