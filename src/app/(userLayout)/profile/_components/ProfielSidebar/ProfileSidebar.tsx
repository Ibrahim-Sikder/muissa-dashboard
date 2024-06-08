import Link from "next/link";
import React from "react";
import {
  FaStaylinked,
  FaUserLock,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

const ProfileSidebar = () => {
  return (
    <div className="h-[500px] w-[400px] p-5  bg-[#1591A3] text-white ">
      <div className="space-y-5">
        <Link href="/profile">
          <div className="flex items-center space-x-2 ">
            <FaUserTie size={25} />
            <span> My Acount</span>
          </div>
        </Link>

        {/* <div>
          <Link href="/profile/booking">
            <div className="flex items-center space-x-2 ">
              <FaBookmark size={25} />
              <span>My Booking</span>
            </div>
          </Link>
        </div> */}
        <div>
          <Link href="/profile/membership">
            <div className="flex items-center space-x-2 ">
              <FaUsers size={25} />
              <span>Membership</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/profile/services">
            <div className="flex items-center space-x-2 ">
              <FaStaylinked size={25} />
              <span>Services</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/profile/change-password">
            <div className="flex items-center space-x-2 ">
              <FaUserLock size={25} />
              <span>Change Password </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
