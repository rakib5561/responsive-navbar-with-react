import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, SetScreenWidth] = useState(window.innerWidth);

    const togglenav = ()=>{
        setToggleMenu(!toggleMenu);
    }

    useEffect(()=>{

        const changeWidth = () =>{
            SetScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

    },[])

    return (
        <div>
            
            <nav>
                {
                    (toggleMenu || screenWidth > 500)&&(
                        <ul className='menu-list'>
                    <li className='items'>Home</li>
                    <li className='items'>About</li>
                    <li className='items'>Skills</li>
                    <li className='items'>Portfolio</li>
                    <li className='items'>Contact</li>
                </ul>
                    )
                }
                <button onClick={togglenav} className='toggole-btn'>click</button>
            </nav>

        </div>
    );
};

export default Navbar;