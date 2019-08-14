import React from 'react';
import { Element } from 'react-scroll';

import './home.scss';
import HeartBeating from '../../media/svg/HeartBeating';

// import style from '../../style/style.json';

const home = () => {
    return (
        <Element id="home" style={styles.container}>
            <div className="entrance-container">
                <div className="entrance-text">
                    <h2>Hi there, I am&nbsp;</h2>
                    <h1>Matheus Costa!</h1>
                </div>
                <div className="breef-description">
                    <p>A developer who loves development.</p>
                    <p>Javascript</p><HeartBeating />
                </div>
            </div>
        </Element>
    );
}

export default home;

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to right, #282c34, #2b303a, #2f3440, #323846, #363c4c)',
        height: '100vh',
        color: 'white',
    },
}