import React, { useState } from "react";
import styles from "./mobileSidebar.module.css";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoMdAnalytics } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FiHome />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoMdAnalytics />,
  },
  {
    path: "/updates",
    name: "Updates",
    icon: <IoIosPaper />,
  },
  {
    path: "/user",
    name: "Profile",
    icon: <FaUser />,
  },
];

const MobileSidebar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.mobileSidebar}>
      <section className={styles.routes}>
        {routes.map((route) => (
          <NavLink key={route.name} to={route.path} className={styles.links}>
            <div className={styles.icon}>{route.icon}</div>
          </NavLink>
        ))}
        <div className={styles.searchIconContainer} onClick={handleSearchClick}>
          <FaSearch size={18} />
        </div>

        {/* Search Input Field */}
        <div className={styles.searchInputContainer}>
          <input
            type='text'
            placeholder='Search...'
            value={searchValue}
            onChange={handleSearchInputChange}
            style={{ display: isSearchVisible ? "block" : "none" }}
          />
        </div>
      </section>
      <div className={styles.notificationIconContainer}>
        <IoIosNotifications size={24} />
      </div>
    </div>
  );
};

export default MobileSidebar;
