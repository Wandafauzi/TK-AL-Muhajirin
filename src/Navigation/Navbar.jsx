import { Link, NavLink } from "react-router-dom";


const Navbar=() => {
  return(
    <>
    <div className="banner">
            <div className="navbar fixed-top">
                <img src="./asset/logo-tk.jpg" width="50px" height="40px" alt=""/>
                <ul>
                    <li><NavLink to={"home.jsx"}>Home</li>
                    <li><NavLink to={"about.jsx"}>About</li>
                    <li><NavLink to={"shop.jsx"}>Shop</li>
                    <li><NavLink to={"daftar.jsx"}>Pendaftaran</li>
                    <li><NavLink to={"login.jsx"}>Login</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;