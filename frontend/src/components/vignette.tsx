

const OvalVignette = ({ src, alt }) => (
    <div style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        //transform: 'translate(150%, 150%)',
        width: '150px', // Adjust as needed
        height: '200px', // Adjust as needed
        overflow: 'hidden',
        borderRadius: '50%',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right'
    }}>
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
    </div>
);

export default OvalVignette;
