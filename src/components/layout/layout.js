import React from 'react';
import Parallax from 'react-springy-parallax';
import Media from 'react-media';

import './layout.scss';
import Home from '../home/home';
import Profile from '../profile/profile';
import About from '../about/about';

import ReactLogo from '../../media/svg/reactLogo';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}assets/svg/${name}.svg${wrap ? ')' : ''}`

class Layout extends React.Component {

    _scrollTo = (to) => this.parallax.scrollTo(to);

    render() {
        return (
            <>
            <Media queries={{
                mobile: "(max-width: 675px)",
                small: "(max-width: 1015px)",
                large: "(min-width: 1016px)"
            }}>
                {matches => (
                    <>
                    {matches.large &&
                        <Parallax
                            ref={ref => this.parallax = ref}
                            style={{ backgroundColor: '#282C34' }}
                            pages={5}
                            scrolling={true}>

                            <Parallax.Layer
                                offset={0} speed={0} factor={5}
                                style={{ backgroundImage: url('binary-stars', true), backgroundSize: 'cover' }}/>

                            <Parallax.Layer offset={1.4} speed={-0.7} style={{ pointerEvents: 'none' }}>
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
                                offset={1} speed={0}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Profile scrollTo={this._scrollTo} />
                            </Parallax.Layer>

                            <Parallax.Layer
                                offset={2.9} speed={0} factor={2}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <About />
                            </Parallax.Layer>
                        </Parallax>}
                        {matches.small &&
                        <Parallax
                            ref={ref => this.parallax = ref}
                            style={{ backgroundColor: '#282C34' }}
                            pages={5.5}
                            scrolling={true}>

                            <Parallax.Layer
                                offset={0} speed={0} factor={5.5}
                                style={{ backgroundImage: url('binary-stars', true), backgroundSize: 'cover' }}/>

                            <Parallax.Layer offset={1.4} speed={-0.7} style={{ pointerEvents: 'none' }}>
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
                                offset={1.5} speed={0}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Profile scrollTo={this._scrollTo} />
                            </Parallax.Layer>

                            <Parallax.Layer
                                offset={3} speed={0}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <About />
                            </Parallax.Layer>
                        </Parallax>}
                        {matches.mobile &&
                        <Parallax
                            ref={ref => this.parallax = ref}
                            style={{ backgroundColor: '#282C34' }}
                            pages={10}
                            scrolling={true}>

                            <Parallax.Layer
                                offset={0} speed={0} factor={10}
                                style={{ backgroundImage: url('binary-stars', true), backgroundSize: 'cover' }}/>

                            <Parallax.Layer offset={1.4} speed={-0.7} style={{ pointerEvents: 'none' }}>
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
                                offset={1.5} speed={0}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Profile scrollTo={this._scrollTo} />
                            </Parallax.Layer>

                            <Parallax.Layer
                                offset={5} speed={0} factor={2}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <About />
                            </Parallax.Layer>
                        </Parallax>}
                    </>
                )}
                </Media>
            </>
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