import React from 'react';
import { Element } from 'react-scroll';

//import './home.scss';
// import style from '../../style/style.json';

const home = () => {
    return (
        <Element id="home" style={styles.container}>Home</Element>
    );
}

export default home;

const styles = {
    container: {
        // backgroundColor: style.homeContainer,
        height: '100vh',
        color: 'white',
    }
}