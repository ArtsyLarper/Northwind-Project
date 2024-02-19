import "../styles/Form.css"

import Rectangle from './rectangle';
import OvalVignette from './vignette';

const SelectedEmployee = () => (
    <div style={{ position: 'relative', 
    transform: 'translate(50%, 50%)',
    justifyContent: 'flex-end', 
    margin: '0',
    padding: '0'
    }}>
        <div style={{ position: 'relative', top: 0, left: 0 }}>
            <Rectangle />
            <OvalVignette src="/pug.jpg" alt="Descriptive Alt Text" />
        </div>
    </div>
);

export default SelectedEmployee;