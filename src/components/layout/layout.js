import React from 'react';
import Parallax from 'react-springy-parallax';

//import style from '../../style/style.json';
import './layout.scss';
//import Toolbar from '../toolbar/toolbar';
import Home from '../home/home';
import Profile from '../profile/profile';
import About from '../about/about';
import Footer from '../footer/footer';

import ReactLogo from '../../media/svg/reactLogo';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}assets/svg/${name}.svg${wrap ? ')' : ''}`

class Layout extends React.Component {

    _scrollTo = (to) => this.parallax.scrollTo(to);

    render() {
        return (
            <Parallax
                ref={ref => this.parallax = ref}
                style={{ backgroundColor: '#282C34' }}
                pages={4}
                scrolling={true}>

                <Parallax.Layer
                    offset={0} speed={0} factor={4}
                    style={{ backgroundImage: url('binary-stars', true), backgroundSize: 'cover' }}/>

                <Parallax.Layer offset={1.4} speed={-0.7} style={{ pointerEvents: 'none' }}>
                    {/* <img src={url('logo')} style={{ width: '15%', marginLeft: '80%' }} /> */}
                    <div style={{ width: '15%', marginLeft: '80%' }}>
                        <ReactLogo />
                    </div>
                </Parallax.Layer>

                <Parallax.Layer 
                    offset={0} speed={0.5} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Home scrollTo={this._scrollTo} />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1} speed={0} factor={1}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Profile />
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3} speed={0} 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <About />
                        <Footer />
                </Parallax.Layer>
            </Parallax>
        );
    }
    // return (
    //     <>
    //         <div className="layout-container" style={styles.container}>
    //             <Toolbar />
    //             <div className="layout-content">
    //                 <Home />
    //                 <Profile />
    //                 <About />
    //             </div>
    //         </div>
    //         <Footer />
    //     </>
    // );
}

export default Layout;

// const styles = {
//     container: {
//         backgroundColor: style.homeContainer,
//     }
// }