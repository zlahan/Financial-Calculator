import React from 'react';
import "./Footer.css"
const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="col">
                        <h3>Ram & Bytes</h3>
                        <ul className="list">
                            <nav>University of Washington Tacoma</nav>
                            <nav>253-692-4000</nav>
                            <nav>1900 Commerce St.</nav>
                            <nav>Tacoma, WA</nav>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <nav className="col-sm">
                        &copy;{new Date().getFullYear()} Ram & Bytes | ALL RIGHTS RESERVED | PRIVACY NOTICE | CONTACT US, BUT DON'T PLS
                    </nav>
                </div>
             </div> 
        </div>    
    )
}

export default Footer;