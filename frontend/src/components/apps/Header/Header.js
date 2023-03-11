import React from 'react';
import logo from "images/yicon.svg";

export const Header = (props) => {
  return (
    <header className='mb-3 border-bottom'>
      <div className='navbar navbar-expand-lg navbar-dark bg-light'>
        <img src={logo} alt="" width="38" height="38"></img>
        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
          <li >
            <a className='nav-link px-2 active' href='#'>Home</a>
          </li>
          <li >
            <a className='nav-link px-2 ' href='#'>Products</a>
          </li>
          <li >
            <a className='nav-link px-2 ' href='#'>Category</a>
          </li>
          <li >
            <a className='nav-link px-2 ' href='#'>Address</a>
          </li>
          <li >
            <a className='nav-link px-2 ' href='#'>Users</a>
          </li>
          <li >
            <a className='nav-link px-2 disabled'>About Us</a>
          </li>
        </ul>

        <div className='text-end'>
          <ul className='nav text-small'>
            <li><a href='#' className='link-dark text-decoration-none' data-bs-toggle="dropdown" aria-expanded="false">
            <img src={logo} width='32' height='32' className='rounded-circle' />
            </a>
            </li>
            <li><a className='dropdown-item' href='#'>Sign out</a></li>
          </ul>
        </div>
      </div>

    </header>
  );
}
