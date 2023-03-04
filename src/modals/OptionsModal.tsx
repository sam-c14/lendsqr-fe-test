import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import UserCheck from "../assests/images/user-check.svg";
import UserTimes from "../assests/images/user-times.svg";
import { optionsUserDetail } from "../types/globalTypes";
import React from "react";

interface optionsProps {
  user: optionsUserDetail;
}

const OptionsModal = ({ user }: optionsProps) => {
  return (
    <div className="options-menu">
      <div className="view-details">
        <BsEye />
        <Link className="route-link" to={`user/${user.id}`}>
          View Details
        </Link>
      </div>
      <div>
        <div>
          <img src={UserTimes} alt="blacklist" />
        </div>
        <p>Blacklist User</p>
      </div>
      <div>
        <div>
          <img src={UserCheck} alt="activate" />
        </div>
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default OptionsModal;
