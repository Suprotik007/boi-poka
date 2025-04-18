import React from 'react';
import{Link,NavLink} from 'react-router'
const Navbar = () => {
    const links=<>
   <Link to='/'> <li className='m-2 font-semibold hover:bg-amber-100 w-fit rounded-2xl p-2 hover:text-black font-mono ' >Home</li></Link>

    <Link to='./readList'><li className='m-2 font-semibold font-mono hover:bg-amber-100 w-fit rounded-2xl p-2 hover:text-black '>Read-list</li></Link>

    
    </>
    return (
        <div className="navbar bg-black text-white border-2  rounded-2xl shadow-sm items-center">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-black dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
        {links}
      </ul>
    </div>
    <a className="  text-3xl font-mono  p-5 rounded-2xl font-extrabold text-white">Boi🪲Poka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end p-5">
    <a className="btn rounded-lg hover:bg-amber-100 font-mono font-semibold text-xl">Sign In</a>
  </div>
</div>
    );
};

export default Navbar;