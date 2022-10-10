import React from "react";
import BackIcon from '../../Assets/Icons/BackIcon.svg';
import BaseLogo from "../Images/Logo";
import Notification from '../../Assets/Icons/Notification.svg';
import Logo from '../../Assets/Images/Logo.svg';

interface LoginHeaderProps{
    headerClass?:string
}
const LoginHeader = (props:LoginHeaderProps) => {
    return (
        <div className={`d-flex justify-content-between loginHeader align-items-center ${props.headerClass}`}>
            <div className="loginHeaderBackIcon bg-customGray rounded-4 text-center">
                <img src={BackIcon} />
            </div>
            <div>
                <BaseLogo logo={Logo} />
            </div>
            <div>
                {/* <img src={Notification} /> */}
            </div>
        </div>
    )
}

export default LoginHeader;