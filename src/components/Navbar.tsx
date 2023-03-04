import Logo from "../assests/images/Logo.svg"
import Lendsqr from '../assests/images/lendsqr.svg'
import Adedeji from '../assests/images/Adedeji.svg'
import { AiOutlineSearch } from "react-icons/ai";
import {GoTriangleDown} from 'react-icons/go'
import BellIcon from '../assests/images/BellIcon.svg'
import { HiBars3BottomRight} from "react-icons/hi2"
import React,{useState,useEffect,useRef} from 'react'

const Navbar = () => {
    // const listInput : HTMLInputElement | null = document.querySelector('.list-input')
    // const searchContainer : HTMLDivElement | null = document.querySelector('.menu-list-search-container')
    // const searchBtn : HTMLDivElement | null = document.querySelector('.menu-list-search-container-btn')
    // searchBtn?.addEventListener('click',()=>{
    //     listInput?.classList.add('w-85')
    //     searchContainer?.classList.add('w-100-bg-white')
    //     console.log('Here')
    // })

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const menuListRef = useRef<HTMLDivElement>(null)
    
    const showMenuList = ()=>{
            menuListRef.current?.classList.add('sm-nav-width')
            setIsMenuOpen(!isMenuOpen)
            const opaqueBg = document.createElement('div')
            opaqueBg.classList.add('opaque-bg')
            document.documentElement.appendChild(opaqueBg)
            opaqueBg.addEventListener('click',()=>[
                setIsMenuOpen(!isMenuOpen)
                ,menuListRef.current?.classList.remove('sm-nav-width')
                ,document.documentElement.removeChild(opaqueBg)
            ])
    }

  return (
    <div className='nav'>
        <div className='nav-items'>
            <div className='nav-items-logo-container'>
                <div><img src={Logo} alt="logo" /></div>
                <div><img src={Lendsqr} alt="logo" /></div>
            </div>
            <div className='nav-items-search'>
                <div className="nav-items-search-container">
                    <input type="text" placeholder="Search for anything"/>
                    <div>
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>
            <div className='nav-items-details-container'>
                <div className="link">
                    <a href="www.google.com">Docs</a>
                </div>
                <div className="bell">
                    <img src={BellIcon} alt="bell-icon" />
                </div>
                <div className="profile">
                    <div>
                        <img src={Adedeji} alt="profile-logo" />
                    </div>
                    <p>Adedeji</p>
                    <GoTriangleDown />
                </div>
            </div>
            
            <div onClick={showMenuList} className="menu-btn">
                <HiBars3BottomRight />
            </div>

            <div ref={menuListRef} className="menu-list" id="menu-list">
                <div className="menu-list-search">
                    <div className="menu-list-search-container">
                        <input className="list-input" type="text" placeholder="Search for anything"/>
                    <div className="menu-list-search-container-btn">
                        <AiOutlineSearch />
                    </div>
                    </div>
                </div>
                <div className="menu-list-links">
                    <div className="link">
                        <a href="www.google.com">Docs</a>
                    </div>
                    <div className="bell">
                        <a href="www.search.com"><img src={BellIcon} alt="bell-icon" /></a>
                    </div>
                </div>
                <div className="menu-list-profile">
                    <div className="profile">
                        <div>
                            <img src={Adedeji} alt="profile-logo" />
                        </div>
                        <p>Adedeji</p>
                        <GoTriangleDown />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar