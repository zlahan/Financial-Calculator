import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <hr />
                {/* Column */}
                    <div className="col">
                        <h4>Ram & Bytes</h4>
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