import React from 'react';

const Navbar = () => {
    const links=<>
    <li className='m-2 font-semibold' >Home</li>
    <li className='m-2 font-semibold'>Listed Books</li>
    <li className='m-2 font-semibold'>Pages To Read</li>
    </>
    return (
        <div className="navbar bg-black text-white border-1 rounded-2xl shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-black dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="  text-xl font-mono text-black p-2 bg-amber-50 rounded-2xl font-extrabold">Boi🐞Poka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-lg">Sign In</a>
  </div>
</div>
    );
};

export default Navbar;