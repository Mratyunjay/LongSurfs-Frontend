import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link' >ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link'>CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>WRITE</Link>
          </li>
          <li className='topListItem'>
            <Link to='/' className='link' onClick={handleLogout}>{user && 'LOGOUT'}</Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImg' src={user.profilePic} alt="profile pic - update later" />
        ) : (
          <ul className='topList'>
            <li className='topListItem'><Link to='/login' className='link' >LOGIN</Link></li>
            <li className='topListItem'><Link to='/register' className='link' >REGISTER</Link></li>
          </ul >
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div >
  )
}
