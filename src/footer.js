import React from 'react';
import './App.css';

export const Footer = (props) => {
    return (<>
        <footer className="footer mt-auto py-3">
            <div className="container row">
                <div className="botones col-12">
                    <button className="btn btn1 col-1" onClick={props.onPrev}><i className="fas fa-step-backward"></i></button>
                    <button className="btn btn2 col-1" onClick={props.onPlay}><i className="fas fa-play"></i></button>
                    <button className="btn btn3 col-1" onClick={props.onStop}><i className="fas fa-pause-circle"></i></button>
                    <button className="btn btn4 col-1" onClick={props.onNext}><i className="fas fa-step-forward"></i></button>
                </div>
            </div>
        </footer>
    </>
    )
};