import React from "react";
import PropTypes from "prop-types";
const NavBar = ({ text1, text2, text3, text4, text5 }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{text1}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{text2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{text3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{text4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{text5}</a>
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