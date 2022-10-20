import './topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
  const user = false;
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
            <Link to='/' className='link'>{user && 'LOGOUT'}</Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImg' src="https://images.unsplash.com/photo-1662920390926-61936eddb607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="profile pic - update later" />
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
