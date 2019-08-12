import React from 'react';

import './toolbar.scss';
// import style from '../../style/style.json';
import ToolbarItem from './toolbarItem/toolbarItem';

class Toolbar extends React.Component {
    state = {
        scrolled: 0
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        this.setState({ scrolled });
    };

    render() {

        const progressBarStyle = {
            width: "5px",
            background: "#e91e63",
            height: this.state.scrolled
          };

        return (
            <div className="toolbar-container">
                <div className="toolbar-content">
                    <div style={styles.progressContainer}>
                        <div style={progressBarStyle} />
                    </div>
                    <ToolbarItem to="home">Home</ToolbarItem>
                    <ToolbarItem to="profile">Profile</ToolbarItem>
                    <ToolbarItem to="about">About</ToolbarItem>
                </div>
            </div>
        );
    }
}

export default Toolbar;

const styles = {
    progressContainer: {
        background: "#f8bbd0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        width: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 5
    },
}