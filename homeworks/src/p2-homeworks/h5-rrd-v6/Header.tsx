import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

import styles from './Header.module.css'


function Header() {

    let [showNavLink, setShowNavLink] = useState(false)
    const onMouseEnterHandler = () => {
        setShowNavLink(true)
    }
    const onMouseLeaveHandler = () => {
        setShowNavLink(false)
    }
    return (
        <div>
            <div className={styles.backLinks} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>LINKS:
                <div className={styles.navLinksPreJun}>
                    {/*<NavLink to={'/header'}>Header</NavLink>*/}
                    {showNavLink ?
                        <div>
                            <NavLink to={'/pre-junior'}>PRE_JUNIOR</NavLink>
                        </div> : ''}

                </div>
                <div className={styles.navLinksJun} >
                    {/*<NavLink to={'/header'}>Header</NavLink>*/}
                    {showNavLink ?
                        <div>
                            <NavLink to={'/junior'}>JUNIOR</NavLink>
                        </div> : ''}

                </div>
                <div className={styles.navLinksJunPlus} >
                    {/*<NavLink to={'/header'}>Header</NavLink>*/}
                    {showNavLink ?
                        <div>
                            <NavLink to={'/junior-plus'}>JUNIOR_PLUS</NavLink>
                        </div> : ''}

                </div>
            </div>



        </div>


    )
}

export default Header
