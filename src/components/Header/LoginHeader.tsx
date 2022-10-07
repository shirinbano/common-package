import React from "react";
import BackIcon from '../../Assets/Icons/BackIcon.svg';
import Logo from '../../Assets/Images/Logo.svg';
import Notification from '../../Assets/Icons/Notification.svg';

const LoginHeader = () => {
    return (
        <div className="d-flex justify-content-between shadow-sm loginHeader align-items-center">
            <div className="loginHeaderBackIcon bg-customGray rounded-4 text-center">
                <img src={BackIcon} />
            </div>
            <div>
                <img src={Logo} />
            </div>
            <div>
                <img src={Notification} />
            </div>
        </div>
    )
}

export default LoginHeader;