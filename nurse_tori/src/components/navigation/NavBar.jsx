import React from 'react'
import './NavBar.css'


const NavBar = props => {
    return (
        <React.Fragment>
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a className='nav-link-item'>

                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link-item'>

                            Story
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link-item'>

                            Experience
                    </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link-item'>

                            Blog
                    </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link-item'>

                            Photos
                    </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default NavBar