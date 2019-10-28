import React from 'react';
import { Element } from 'react-scroll';

import data from '../../data/data.json';

import './home.scss';
import HeartBeating from '../../media/svg/heartBeating';
import DownArrow from '../../media/svg/downArrow';

const home = (props) => {
    return (
        <Element id="home" style={styles.container} className="home">
            <div className="entrance-container">
                <div className="entrance-text">
                    <h2>Hi there, I am</h2>
                    <h1>{data.firstName} {data.lastName}!</h1>
                </div>
                <div className="breef-description">
                    <p>A developer who loves development.</p>
                    <div className="js-container">
                        <p>Javascript!</p>
                        <HeartBeating />
                    </div>
                </div>
                <div style={{ width: '50px', position: 'fixed', bottom: 20, cursor: 'pointer' }} onClick={() => props.scrollTo(1)}>
                    <DownArrow />
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