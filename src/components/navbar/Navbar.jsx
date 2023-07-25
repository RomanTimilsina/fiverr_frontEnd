import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
    
  }

  const { pathname } = useLocation()
  useEffect(() => {
    window.addEventListener('scroll',isActive)

    return () => {
      window.removeEventListener('scroll',isActive)
  }
},[])

const currentUser = {
  id:1,
  userName:'John',
  isSeller:true
}

  return (
    <div  className={active || pathname ? 'navbar active': 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link  to={'/'}  className="link">
            <div className="fiverr">
            <div className="text">fiverr</div>
          <div className="dot">.</div>
            </div>
          
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span></span>Sign in
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {
            currentUser && (
              <div className="user">
                <img onClick={() => setOpen(!open)} src="https://th.bing.com/th?id=ORMS.db3e8ae82fb11a5954da487265f63ce5&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" />
                <span onClick={() => setOpen(!open)} >{currentUser?.userName}</span>
                { open &&
                  <div className={active ? "options active" : 'options'}>
                  {currentUser?.isSeller && (
                    <>
                    <Link className="link option" to={'/mygigs'}>Gigs</Link>
                    <Link className="link option"  to={'/add'}>Add New Gigs</Link>
                    </>
                  )}
                  <Link className="link option"  to={'/orders'}>Orders</Link>
                  <Link className="link option"  to={'/messages'}>Messages</Link>
                  <span className="link option" >Logout</span>
                
                </div>
                }
              </div>
            )
          }
        </div>
      </div>
      {
        (active || pathname) && (
        <>
        
      <hr />
      <div className="menu">
      <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>

      </div>
        
      </>
      )}
    </div>
  )
}

export default Navbar
