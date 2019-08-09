import React from 'react';
//import './home.scss';
import style from '../../style/style.json';

const home = () => {
    return (
        <div style={styles.container}>Home</div>
    );
}

export default home;

const styles = {
    container: {
        backgroundColor: style.homeContainer,
        height: '100vh'
    }
}