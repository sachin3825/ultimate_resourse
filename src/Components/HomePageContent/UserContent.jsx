import React from "react";
import styles from "./userContent.module.css";
import { IoIosArrowDown } from "react-icons/io";

const UserContent = () => {
  const data = [
    {
      Amount: "$4,000",
      text: "Year-to-Date",
    },
    {
      Amount: "$1,892",
      text: "Total interest",
    },
  ];

  const Transation = [
    { date: "2020-08-07", to: "Withdrawal Transfer to Bank-xxx11" },
    { date: "2020-07-21", to: "Withdrawal Transfer to Bank-xxx11" },
    { date: "2020-07-16", to: "Withdrawal Transfer to Bank-xxx11" },
  ];

  const imgUrl =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60";
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <img src={imgUrl} alt='profile' />
        </div>
        <div className={styles.text}>
          <h2>Hi Mike,</h2>
          <p>welcome back</p>
        </div>
      </div>
      <div className={styles.Accountdetails}>
        <h3>Today</h3>
        <div className={styles.accountBalance}>
          <h1>$19,892</h1>
          <p>Account balance</p>
        </div>
        <div className={styles.accountdue}>
          {data.map((data, index) => (
            <div key={index}>
              <h3>{data.Amount}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>

        <button>
          I want to <IoIosArrowDown />
        </button>
      </div>
      <div className={styles.recentTransaction}>
        <h3>Recent Transaction</h3>
        {Transation.map((data, index) => (
          <div key={index} className={styles.transation}>
            <p>{data.date}</p>
            <h4>{data.to}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContent;
