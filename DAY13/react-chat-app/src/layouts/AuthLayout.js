import React from 'react'

const Authlayout = (props) => {
    return (
        <React.Fragment>
            <div className="layout-wrapper d-lg-flex">{props.children}</div>
        </React.Fragment>
    )
}

export default Authlayout
