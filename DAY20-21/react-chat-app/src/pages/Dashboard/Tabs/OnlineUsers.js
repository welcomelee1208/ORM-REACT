import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//carousel
//yarn add react-alice-carousel;
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

//Import Images

import avatar2 from '../../../assets/images/users/avatar-2.jpg'
import avatar4 from '../../../assets/images/users/avatar-4.jpg'
import avatar3 from '../../../assets/images/users/avatar-3.jpg'
import avatar6 from '../../../assets/images/users/avatar-6.jpg'
import avatar7 from '../../../assets/images/users/avatar-7.jpg'
import avatar8 from '../../../assets/images/users/avatar-8.jpg'
import avatar5 from '../../../assets/images/users/avatar-8.jpg'

const OnlineUsers = () => {
    const [config, setConfig] = useState({
        modal: false,
        isOpenCollapse: false,
        groups: [
            {
                gourpId: 1,
                name: '#General',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 0,
                desc: 'General Group',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
            {
                gourpId: 2,
                name: '#Reporting',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 23,
                desc: 'reporing Group here...',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
            {
                gourpId: 3,
                name: '#Designer',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 0,
                isNew: true,
                desc: 'designers Group',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
            {
                gourpId: 4,
                name: '#Developers',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 0,
                desc: 'developers Group',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
            {
                gourpId: 5,
                name: '#Project-aplha',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 0,
                isNew: true,
                desc: 'project related Group',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
            {
                gourpId: 6,
                name: '#Snacks',
                profilePicture: 'Null',
                isGroup: true,
                unRead: 0,
                desc: 'snacks Group',
                members: [
                    {
                        userId: 1,
                        name: 'Sara Muller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 2,
                        name: 'Ossie Wilson',
                        profilePicture: avatar8,
                        role: 'admin',
                    },
                    {
                        userId: 3,
                        name: 'Jonathan Miller',
                        profilePicture: 'Null',
                        role: null,
                    },
                    {
                        userId: 4,
                        name: 'Paul Haynes',
                        profilePicture: avatar7,
                        role: null,
                    },
                    { userId: 5, name: 'Yana sha', profilePicture: avatar3, role: null },
                    {
                        userId: 6,
                        name: 'Steve Walker',
                        profilePicture: avatar6,
                        role: null,
                    },
                ],
            },
        ],
        selectedContact: [],
        isOpenAlert: false,
        message: '',
        groupName: '',
        groupDesc: '',
    })

    const responsive = {
        0: { items: 4 },
        1024: { items: 4 },
    }

    return (
        <React.Fragment>
            {/* Start user status */}
            <div className="px-4 pb-4 dot_remove" dir="ltr">
                <AliceCarousel
                    responsive={responsive}
                    disableDotsControls={false}
                    disableButtonsControls={false}
                    mouseTracking
                >
                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar2} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar4} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Doris</h5>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar5} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Emily</h5>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src={avatar6} alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Steve</h5>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">T</span>
                                <span className="user-status"></span>
                            </div>

                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Teresa</h5>
                        </Link>
                    </div>
                </AliceCarousel>
                {/* end user status carousel */}
            </div>
            {/* end user status  */}
        </React.Fragment>
    )
}

export default OnlineUsers
