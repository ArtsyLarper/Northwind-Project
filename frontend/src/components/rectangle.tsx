
import OvalVignette from './vignette';
import "../styles/Form.css"

import React from 'react';

const Rectangle = (): JSX.Element => {
    return (
        <div>
            <div style={{
                width: '45vw', // 100% of the viewport width
                height: '15vh', // 100% of the viewport height
                backgroundColor: '#ffffff', // Example color
                position: "relative",
                padding: '5%',
                borderRadius: '10px',
            }} >
                
                <OvalVignette src="/pug.jpg" alt="Descriptive Alt Text" />
            
            </div>
            
        </div>
             
    );
};

export default Rectangle;
