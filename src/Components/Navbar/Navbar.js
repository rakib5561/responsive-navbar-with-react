import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div>
            
            <nav>
                <ul className='menu-list'>
                    <li className='items'>Home</li>
                    <li className='items'>About</li>
                    <li className='items'>Skills</li>
                    <li className='items'>Portfolio</li>
                    <li className='items'>Contact</li>
                </ul>
                <button className='toggole-btn'>click</button>
            </nav>

        </div>
    );
};

export default Navbar;