import React from "react";
import PropTypes from "prop-types";
const NavBar = ({ text1, text2, text3, text4, text5 }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="#">{text1}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">{text2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">{text3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">{text4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">{text5}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    text5: PropTypes.string
}

export default NavBar;