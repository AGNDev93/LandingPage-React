import React from "react";
import PropTypes from "prop-types";
const CardBody = props => {
    return (
        <div className="jumbotron mt-3 bg-light p-3">
            <h1 class="display-4">{props.title}</h1>
            <p class="lead">{props.description}</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">{props.buttonLabel}</a>
            </p>
        </div>
    );
}
CardBody.propTypes = {
    tittle: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}
export default CardBody;