import React from "react";

const Place = (props) => {

    return (
        <div className="Place">
            <img src={props.image} alt="Example Image" />
            <p>
                <h3>{props.name}</h3>
                <h4>{props.location}</h4>
            </p>
            <a className="Button" href={props.url} target="_blank">
                <button>Admissions</button>
            </a>
            <p></p>


        </div>
    )
}

export default Place;