import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, BackDrop</div>
            {props.children}
        </Aux>
    )
}

export default layout;