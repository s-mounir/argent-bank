import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { logout } from '../utils/authSlice';

function Header() {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

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
          <NavLink to="./" className="main-nav-item" onClick={() => dispatch(logout())}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="./login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>);
}
export default Header