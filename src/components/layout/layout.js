import React from 'react';

import style from '../../style/style.json';
import './layout.scss';
import Toolbar from '../toolbar/toolbar';
import Home from '../home/home';

const layout = () => {
    return (
        <div className="layout-container" style={styles.container}>
            <Toolbar />
            <div className="layout-content">
                <Home />
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