import React from 'react'
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div>
            <div>
                <NavLink to={'/header'}>Header</NavLink>
            </div>
            <div>
                <NavLink to={'/pre-junior'}>PRE_JUNIOR</NavLink>
            </div>





        </div>
    )
}

export default Header
