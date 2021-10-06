// Button component to be used in different files

import React from 'react'
import './Button.css'
// serves as html <a><a/> tag
import { Link } from 'react-router-dom' 

// array storing class names for button styles
const STYLES = ['btn--primary', 'btn--outline']

// array storing class names for button size
const SIZES = ['btn--medium', 'btn--large']

// export button function
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    
    // check if button has any one of the styles in STYLES array, if true keep the style else use style class at index 0
       const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 

       // checck if button any one of the sizes in SIZES array, if true keep the size else use size class at index 0
       const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
       <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type = {type}>
            {/** this button component will be reused, hence the children will be the content displayed on the button if used in a different file */}
                {children}
            </button>
       </Link> 
    )
}