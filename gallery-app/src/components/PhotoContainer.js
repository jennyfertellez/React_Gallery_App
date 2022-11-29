import React from "react";
import Photos from "./Photos";

//Photo Container
const PhotoContainer = (props) => {
    const photoResults = props.data;

    let photoList = photoResults.map((photo) => (
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
            <ul>{photoList}</ul>
        </div>
    );
};

export default PhotoContainer;