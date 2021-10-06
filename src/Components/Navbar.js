import React, {useState, useEffect} from 'react'
// serves as html <a><a/> tag
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './navbar.css'

function Navbar() {
    // click state is initially set to false
    const [click, setClick] = useState(false)
    // function to change click state onclick
    const handleClick = () => setClick(!click)
    /** onclick of a menu item, drop down from mobile menu icon disapear */
    const closeMobileMenu = () => setClick(false)
    // button state initially set to false
    const [button, setButton] = useState(true)

    // toggle between full window width and mobile width of 960
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    }, [])

    // add eventlistener to window 
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* get icon from font awesome */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                   TRVL <i class="fab fa-typo3"></i>
                    </Link> 
                    {/** handle events onclick of mobile menu icons */}
                    <div className='menu-icon' onClick = {handleClick}>
                        {/** class of the icon changes onclick using a condition */}
                    <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>  
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick = {closeMobileMenu}>
                                Services 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick = {closeMobileMenu}>
                                Products 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
                    {/** button style is set with the help of the imported button component */}
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>

            </nav>
        </>
    )
}

export default Navbar

