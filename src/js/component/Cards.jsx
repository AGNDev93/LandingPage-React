import React from "react";
import PropTypes from "prop-types";
const Cards = props => {
    return (
        <div className="card mt-3 d-flex justify-content-center" style={{ "width": "18rem" }}>
            <img src={props.imageURL} className="card-img-top" alt="Card-img-cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
}
Cards.propTypes = {
    imageURL: PropTypes.string,
    tittle: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default Cards;