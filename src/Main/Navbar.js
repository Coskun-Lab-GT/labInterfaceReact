import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleBtn from '../GoogleBtn.js'

function Navbar() {
    const [isLogined, setIsLogined] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const setLoggedIn = token => {
      setIsLogined(true);
      setAccessToken(token);
      console.log(accessToken);
    }
    const setLoggedOut = () => {
      setAccessToken(null);
      setIsLogined(false);
      console.log(accessToken);
      this.props.history.push("/home");
    }

    if (!isLogined) {
        return (
            <div>
                    <div className = "login">
                        <GoogleBtn className = "google" setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} />
                    </div>
                    <nav className = "navbar">

                    <NavLink
                        exact
                        activeClassName = "active"
                        className = "tab"
                        to = "/about"
                    >EZLabX</NavLink>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav className = "navbar">
                    <div className = "login">
                        <GoogleBtn isLogined={isLogined} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} />
                    </div>
                    <NavLink
                        exact
                        activeClassName = "active"
                        className = "tab"
                        to = "/"
                    >EZLabX</NavLink>
    
                    <NavLink
                        activeClassName = 'active'
                        className = 'tab'
                        to = '/home'
                    >NewHome</NavLink>
    
                    <NavLink
                        activeClassName = "active"
                        className = "tab"
                        to = "/inventory"
                    >Inventory</NavLink>
    
                    <NavLink
                        activeClassName = "active"
                        className = "tab"
                        to = "/levels"
                    >Levels</NavLink>
    
                   <NavLink
                        activeClassName = "active"
                        className = "tab"
                        to =  "/calendar"
                    >Calendar</NavLink>
    
                    {/* <NavLink
                        activeClassName = "active"
                        className = "tab"
                        to = "/dashboards"
                    >Dashboards</NavLink>
     */}
                    <NavLink
                        activeClassName = "active"
                        className = "tab"
                        to = "/admin/inventory"
                    >Admin</NavLink>
    
                </nav>
            </div>
        )
    }
   
}

export default Navbar
