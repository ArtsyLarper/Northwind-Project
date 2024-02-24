
import OvalVignette from './vignette';
import "../styles/Form.css"

import React from 'react';

const Rectangle = (): JSX.Element => {
    return (
        <div>
            <div style={{
                width: '48vw', // 100% of the viewport width
                height: '20vh', // 100% of the viewport height
                backgroundColor: '#f0f0f0', // Example color
                position: "relative"
            }} />
            <div style={{ position: 'relative',transform: 'translate(-20%, -40%)', top: '0', left: '0' }}>
                <OvalVignette src="/pug.jpg" alt="Descriptive Alt Text" />
            </div>
        </div>
             
    );
};

export default Rectangle;
