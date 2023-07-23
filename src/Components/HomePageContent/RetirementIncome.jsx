import React from "react";
import styles from "./retirementIncome.module.css";
import Chart from "../../Assets/chart.png";
// import BarChart from "./BarChart";
import ProgressCircle from "./ProgressCricle";
// import RiArrowDropDownFill from "react-icons/ri";

const RetirementIncome = () => {
  const stats = [
    { amount: "$300,000", text: "My Goal" },
    { amount: "59%", text: "Goal Achieved" },
    { amount: "$300", text: "Est Monthly Income" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.bluetext}>Retirement Income</p>
        <h2>Starting Year 2056</h2>
      </div>

      <div className={styles.stats}>
        {stats.map((data, index) => (
          <div key={index} className={styles.statsContainer}>
            <h2>{data.amount}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.contributions}>
        <div className={styles.header}>
          <h3>Contributions Overtime</h3>
        </div>
        <img src={Chart} alt='chart' width={"100%"} />
      </div>
      <div className={styles.Compare}>
        <h3>How do I compare to my Peers</h3>
        <div className={styles.Comparecontainer}>
          <div className={styles.filters}>
            <div className={styles.filter}>
              <h4>Age</h4>
              <p>Under 30</p>
            </div>
            <div className={styles.filter}>
              <h4>Salary</h4>
              <p>K 20 - K 30</p>
            </div>
            <div className={styles.filter}>
              <h4>Gender</h4>
              <p>Male</p>
            </div>
          </div>
          <div className={styles.progress}>
            <div className={styles.circle}>
              <ProgressCircle progress={78} size={100} />
              <p>Average</p>
            </div>
            <div className={styles.circle}>
              <ProgressCircle progress={95} size={100} />
              <p>Top</p>
            </div>
            <div className={styles.circle}>
              <ProgressCircle progress={59} size={100} />
              <p>Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementIncome;
