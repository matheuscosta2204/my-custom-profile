import React from 'react';
import { Link } from 'react-scroll';

import './toolbarItem.scss';

const toolbarItem = props => {
    return (
        <Link 
            className="toolbar-item-container"
            activeClass="toolbar-item-active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-200}
            duration={600}>
                {props.children}
        </Link>
    );
}

export default toolbarItem;