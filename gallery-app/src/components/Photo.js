import React from "react";

//Photo component to display elements from the li and img of each photo
const Photo = (props) => {
    return (
        <li>
            <img 
            src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
            alt={props.title}
            />
        </li>
    );
};

export default Photo;