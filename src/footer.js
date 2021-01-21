import React  from 'react';
import './App.css';

export const Footer = (props)=>{
    return (<>
        <div className="botones row">
            <div className="btn1">
            <button  className="btn" onClick={props.onPrev}><i className="fas fa-step-backward"></i></button>
            </div>
            <div className="btn2">
            <button  className="btn" onClick={props.onPlay}><i className="fas fa-play"></i></button>
            </div>
            <div className="btn22">
            <button  className="btn" onClick={props.onStop}><i className="fas fa-pause-circle"></i></button>
            </div>
            <div className="btn3">
            <button  className="btn" onClick={props.onNext}><i className="fas fa-step-forward"></i></button>
            </div>
        </div>
        </>
    )
};