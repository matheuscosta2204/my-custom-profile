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
        // backgroundColor: style.homeContainer,
        height: '80vh',
        color: 'white',
    }
}