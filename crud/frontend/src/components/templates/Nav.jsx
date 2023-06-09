import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default props => 
<aside className="menu-area">
    <nav className="menu">
        <Link to="/home">
            <i className="fa fa-home"></i>   Home
        </Link>
        <Link to="/users">
            <i className="fa fa-users"></i>   Users
        </Link>
    </nav>
</aside>