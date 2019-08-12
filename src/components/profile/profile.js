import React from 'react';
import { Element } from 'react-scroll';

//import './home.scss';
// import style from '../../style/style.json';

const profile = () => {
    return (
        <Element id="profile" style={styles.container}>Profile</Element>
    );
}

export default profile;

const styles = {
    container: {
        // backgroundColor: style.homeContainer,
        height: '100vh',
        color: 'white',
    }
}