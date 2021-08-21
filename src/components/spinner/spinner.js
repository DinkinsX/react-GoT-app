import React from 'react';
import './spinner.css';

const Spinner = () => {
    const styledFieldOne = {
        'left':'75.95px',
        'top':'75.95px',
        'animationDelay': '0s'
    };
    return (
        
        <div className="loadingio-spinner-blocks-4o3x8watftd">
            <div className="ldio-trmayykp42d">
                <div style={styledFieldOne}></div>
                <div style={{'left':'159.65px','top':'75.95px','animationDelay':'0.19685039370078738s'}}></div>
                <div style={{'left':'75.95px','top':'159.65px','animationDelay':'0.5905511811023622s'}}></div>
                <div style={{'left':'159.65px','top':'159.65px','animationDelay':'0.39370078740157477s'}}></div>
            </div>
        </div>

    )
}

export default Spinner;