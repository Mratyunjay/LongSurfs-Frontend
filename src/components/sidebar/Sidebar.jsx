import { useEffect, useState } from 'react';
import axios from 'axios';
import './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
        <p>Trying to enjoy life at it's fullest because I am worried about wasting it. Also, want to build new skills so moving my wordpress blog to MERN stacked personlized site. Apart from this I sing and try to read to feel brainy</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((cat) => (
            <li key={cat.name} className="sidebarListItem"><Link className='link' to={`/?cat=${cat.name}`}> {cat.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div >
  )
}
