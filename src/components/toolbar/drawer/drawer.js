    
import React from 'react';
import { slideInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import './drawer.scss';
import ToolbarItem from '../toolbarItem/toolbarItem';

const drawer = (props) => {

    const cssDrawer = [css(styles.slideInLeft), "drawer"]
    if(props.show) {
        return (
            <div className={cssDrawer.join(' ')}>
                <ToolbarItem to="home">Home</ToolbarItem>
                <ToolbarItem to="profile">Profile</ToolbarItem>
                <ToolbarItem to="about">About</ToolbarItem>
            </div>
        );
    } else {
        return (<></>);
    }
};

export default drawer;

const styles = StyleSheet.create({
    slideInLeft: {
        animationName: slideInLeft,
        animationDuration: '1s'
    },
});