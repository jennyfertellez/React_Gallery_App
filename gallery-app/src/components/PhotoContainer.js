import React from "react";
import Photo from "./Photo";

//Photo Container
const PhotoContainer = (props) => {
    const photoResults = props.data;

    let photos = photoResults.map((photo) => (
        <Photos 
            server={photo.server}
            secret={photo.secret}
            id={photo.id}
            key={photo.id}
            title={photo.title}
        />
    ));

    return (
        <div class="photo-container">
            <ul>{photos}</ul>
        </div>
    );
};

export default PhotoContainer;