import React from 'react';

import './toolbar.scss';
// import style from '../../style/style.json';
import ToolbarItem from './toolbarItem/toolbarItem';

const toolbar = () => {
    return (
        <div className="toolbar-container">
            <ToolbarItem to="home">Home</ToolbarItem>
            <ToolbarItem to="profile">Profile</ToolbarItem>
            <ToolbarItem to="about">About</ToolbarItem>
        </div>
    );
}

export default toolbar;

// const styles = {
//     container: {
//         // backgroundColor: style.homeContainer,
//     }
// }