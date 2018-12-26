import React, { Component } from 'react';
import '../styles/utility.scss'
import '../styles/header.scss'
import Menu from './Menu'

class Header extends Component {
    
    render() {
       
     
        return (
            <div className="container">
                <div className="wrap">
                    <div className="header-img"><h1>playboys</h1></div>
                    <Menu className="header-menu"></Menu>
                </div>
            </div>
        );
    }
}

export default Header;