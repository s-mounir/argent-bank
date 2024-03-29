import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { userToken } = useSelector((state) => state.auth)

    //show unauthorized screen if no user is found in redux store
    if (!userToken) {
        return (
            <div>
                <h1>Vous n'etes pas connectés : 
                    <span>
                        <NavLink to='/login'>Se connecter</NavLink>
                    </span>
                </h1>
            </div>
        )
    }

    //returns child route elements
    return <Outlet />
}

export default ProtectedRoute