import React from 'react';
import github from 'images/github.svg';
export const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <footer className='py-5'>
      <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
        <p>© {year} Thi Hong Yen Truong. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className='ms-3'>
            <a className='link-dark' href='https://github.com/truthblue82'>
              <img src={github} className='bi' width='24' height='24' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
