import React from 'react';
import { Element } from 'react-scroll';

import './home.scss';
import HeartBeating from '../../media/svg/heartBeating';

const home = () => {
    return (
        <Element id="home" style={styles.container} className="home">
            <div className="entrance-container">
                <div className="entrance-text">
                    <h2>Hi there, I am</h2>
                    <h1>Matheus Costa!</h1>
                </div>
                <div className="breef-description">
                    <p>A developer who loves development.</p>
                    <div className="js-container">
                        <p>Javascript!</p>
                        <HeartBeating />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default home;

const styles = {
    container: {
        //backgroundImage: 'linear-gradient(to right, #282c34, #2b303a, #2f3440, #323846, #363c4c)',
        height: '100vh',
        color: 'white',
    },
}