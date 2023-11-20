import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Eventify</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("events")}}><Link style={{textDecoration:'none'}} to='/events'>Events</Link>{menu==='events'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("organize")}}><Link style={{textDecoration:'none'}} to='/organize'>Organize</Link>{menu==='organize'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("participate")}}><Link style={{textDecoration:'none'}} to='/participate'>Participate</Link>{menu==='participate'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar