import React from "react";
import PropTypes from "prop-types";
const Cards = props => {
    return (
        <div className="card mt-3 mb-4 text-justify">
            <img src={props.imageURL} className="card-img-top" alt="Card-img-cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
}
Cards.propTypes = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default Cards;