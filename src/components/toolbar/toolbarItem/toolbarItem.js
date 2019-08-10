import React from 'react';

import './toolbarItem.scss';

const toolbarItem = props => {
    return (
        <div className="toolbar-item-container">
            {props.children}
        </div>
    );
}

export default toolbarItem;
