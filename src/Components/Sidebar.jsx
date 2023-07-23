import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
// icons
import { FiHome } from "react-icons/fi";
import { IoMdAnalytics } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

import { FiLogOut } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

// framer motion
import { AnimatePresence } from "framer-motion";

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

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isMobileView ? (
        <MobileSidebar />
      ) : (
        <motion.div
          className={styles.sidebar}
          animate={{ width: isOpen ? "220px" : "60px  " }}
        >
          <section className={styles.routes}>
            <div className={styles.TopSection}>
              <div className={styles.logo}>logo</div>
              <div className={styles.search}>
                <div className={styles.searchIcon} onClick={toggle}>
                  <FaSearch />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.input
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                      variants={inputAnimation}
                      type='text'
                      placeholder='search'
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className={styles.links}
              >
                <div className={styles.icon}>{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial='hiddin'
                      animate='show'
                      exit='hidden'
                      className={styles.link}
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
          <section className={styles["function-icons"]}>
            <div className={styles.links}>
              <div className={styles.icon}>
                <IoIosNotifications />
                {/* <div className={styles.notificationDot}></div> */}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial='hiddin'
                    animate='show'
                    exit='hidden'
                    className={styles.link}
                  >
                    Notification
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.links}>
              <div className={styles.icon}>
                <FiLogOut />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial='hiddin'
                    animate='show'
                    exit='hidden'
                    className={styles.link}
                  >
                    Logout
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </motion.div>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
