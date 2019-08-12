import React from 'react';

import style from '../../style/style.json';
import './layout.scss';
import Toolbar from '../toolbar/toolbar';
import Home from '../home/home';
import Profile from '../profile/profile';
import About from '../about/about';
import Footer from '../footer/footer';

const layout = () => {
    return (
        <div className="layout-container" style={styles.container}>
            <Toolbar />
            <div className="layout-content">
                <Home />
                <Profile />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default layout;

const styles = {
    container: {
        backgroundColor: style.homeContainer,
    }
}