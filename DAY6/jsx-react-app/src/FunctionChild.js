import React from 'react'

const FunctionChild = (props) => {
    return (
        <div>
            <h1>회사소개</h1>
            <h1>{props.children}</h1>
            회사명:{props.companyName}
            <br />
            전화번호:{props.telephone}
            <br />
            주소:{props.address}
            <br />
        </div>
    )
}

export default FunctionChild
