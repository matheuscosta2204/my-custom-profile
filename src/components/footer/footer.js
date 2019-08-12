import React from 'react';
import { Element } from 'react-scroll';

//import './home.scss';
// import style from '../../style/style.json';

const footer = () => {
    return (
        <Element id="footer" style={styles.container}>Footer</Element>
    );
}

export default footer;

const styles = {
    container: {
        // backgroundColor: style.homeContainer,
        height: '20vh',
        color: 'white',
    }
}