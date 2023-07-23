import React from "react";
import UserContent from "../Components/HomePageContent/UserContent";
import styles from "./home.module.css";
import RetirementIncome from "../Components/HomePageContent/RetirementIncome";
import RetirementStrat from "../Components/HomePageContent/RetirementStrat";
const Home = () => {
  return (
    <div className={styles.container}>
      <UserContent />
      <RetirementIncome />
      <RetirementStrat />
    </div>
  );
};

export default Home;
