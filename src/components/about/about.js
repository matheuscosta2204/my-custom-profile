import React from 'react';
import { Element } from 'react-scroll';

//import './home.scss';
// import style from '../../style/style.json';

const about = () => {
    return (
        <Element id="about" style={styles.container}>About</Element>
    );
}

export default about;

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to right, #282c34, #2b303a, #2f3440, #323846, #363c4c)',
        height: '75vh',
        color: 'white',
    }
}