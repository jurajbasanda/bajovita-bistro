import React,{useState} from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './imgs/bajovitaBistroLogo.png'

const Nav = () =>{
    AOS.init({
        offset: 50, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        debounceDelay: 50,
        once: true,
      });
    
    const [Nav,setNav] = useState('');
    const openNav = () =>{ (Nav === '') ? setNav(' open') :  setNav('')}

        return(
            <nav >
            
                    <Link to='/'><div className='logo' ><img src={logo} key={logo} alt="Bajovita Bistro"/></div ></Link>
                
                <ul className="nav_links">
                    <a href='#Onas'><li>O Nás</li></a>
                    <a href='#Produkty'><li>Projekty</li></a>
                    <a href='#Recenzie'><li>Recenzie</li></a>
                    <a href='#Kontakt'><li>Kontakt</li></a>
                </ul>

                <ul className={'nav_links950'+ Nav}>
                    <Link to='/' onClick={openNav}><div className='logo'><img src={logo} key={logo} alt="Bajovita Bistro"/></div></Link>
                    <a href='#Onas' onClick={openNav}><li>O Nás</li></a>
                    <a href='#Produkty' onClick={openNav}><li>Projekty</li></a>
                    <a href='#Recenzie'><li>Recenzie</li></a>
                    <a href='#Kontakt' onClick={openNav}><li>Kontakt</li></a>
                </ul>
                
                <div className="burger"  onClick={openNav}><i className="fas fa-bars"></i></div>
            </nav>
        )
    }

export default Nav
