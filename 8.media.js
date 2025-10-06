import React from 'react';

const Media = (props) => {
    return (
        <div>
            <h1>This is Media Component</h1>
            <h2>{props.name}</h2> {/* Displaying the "name" prop */}
        </div>
    );
}

export default Media;
