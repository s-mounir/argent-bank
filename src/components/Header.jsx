import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../utils/authSlice';

function Header() {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  console.log('HEADER : ', userInfo)

  return (
    <nav className="main-nav">
      <NavLink to="./" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {userInfo ? (
          <NavLink to="./sign-in" className="main-nav-item" onClick={() => dispatch(logout())}>
          <i className="fa fa-user-circle"></i>
          Sign Out
        </NavLink>
        ) : (
          <NavLink to="./sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>);
}
export default Header