import React from 'react'

// const Profile = (props) => {
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             아이디:{props.userId}
//             <br />
//             이름:{props.name}
//             <br />
//             이메일:{props.email}
//             <br />
//             전화번호:{props.telephone}
//             <br />
//         </div>
//     )
// }
const Profile = ({ children, userId, name, email, telephone }) => {
    return (
        <div>
            <h1>{children}-noprops</h1>
            아이디:{userId}
            <br />
            이름:{name}
            <br />
            이메일:{email}
            <br />
            전화번호:{telephone}
            <br />
        </div>
    )
}

export default Profile
