import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

    return (
        <div className="ValidationComponent">
            {
                props.textLength >= 5 ?
                    <p>Text long enough</p> :
                    <p>Text too short</p>
            }
        </div>
    )
};

export default validationComponent;
