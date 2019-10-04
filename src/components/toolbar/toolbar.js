import React from 'react';
import Headroom from 'react-headroom';

import './toolbar.scss';
// import style from '../../style/style.json';
import Drawer from './drawer/drawer';
import ToolbarItem from './toolbarItem/toolbarItem';

class Toolbar extends React.Component {
    state = {
        scrolled: 0,
        hamburgerActive: false
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
        const scrolled = `${scrollPx / winHeightPx * 100}`;

        this.setState({ scrolled, hamburgerActive: false });
    };

    render() {

        const progressBarClassName = this.state.scrolled < 33
                                        ? "progress-bar" 
                                        : this.state.scrolled < 66 
                                            ? "gradient-progress-bar"
                                            : "dark-gradient-progress-bar";

        const progressBarStyle = {
            width: `${this.state.scrolled}%`,
        };

        const cssHamburger = ["hamburger", "hamburger--spring", "js-hamburger", "toolbar-hamburguer", this.state.hamburgerActive ? "is-active" : ""];

        return (
            <div className="toolbar-container">
                <div className="web-page">
                    <div style={styles.progressContainer} className="progress-container">
                        <div style={progressBarStyle} className={progressBarClassName} />
                    </div>
                    <div className="toolbar-content">
                        <ToolbarItem to="home">Home</ToolbarItem>
                        <ToolbarItem to="profile">Profile</ToolbarItem>
                        <ToolbarItem to="about">About</ToolbarItem>
                    </div>
                </div>
                <div className="mobile-web-page">
                    <div style={styles.progressContainer} className="progress-container">
                        <div style={progressBarStyle} className={progressBarClassName} />
                    </div>
                    <Headroom>
                        <button class={cssHamburger.join(' ')} type="button" onClick={() => this.setState({ hamburgerActive: !this.state.hamburgerActive })}>
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </Headroom>
                    <Drawer show={ this.state.hamburgerActive } />
                </div>
            </div>
        );
    }
}

export default Toolbar;

const styles = {
    progressContainer: {
        background: "#e6fffa",
    },
}