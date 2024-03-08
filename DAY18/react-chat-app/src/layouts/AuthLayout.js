import React from 'react'
import LeftsidebarMenu from './LeftSidebarMenu'
const Authlayout = (props) => {
    return (
        <React.Fragment>
            <div className="layout-wrapper d-lg-flex">
                <LeftsidebarMenu />
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Authlayout
