import React, { useState } from "react";
import styles from "./retirementstart.module.css";

const RetirementStrat = () => {
  const range = [
    { label: "Employee Contribution", value: 50 },
    { label: "Retirement age", value: 65 },
  ];

  const [rangeValues, setRangeValues] = useState(range);

  const handleRangeChange = (index, event) => {
    const updatedRangeValues = [...rangeValues];
    updatedRangeValues[index].value = event.target.value;
    setRangeValues(updatedRangeValues);
  };

  return (
    <div className={styles.container}>
      <h2>Retirement strategy</h2>
      <div className={styles.range}>
        {range.map((data, index) => (
          <div key={index} className={styles.rangeContainer}>
            <h4>{data.label}</h4>
            <input
              className={styles["custom-input"]}
              type='range'
              id={`vol${index}`}
              name={`vol${index}`}
              min='0'
              max='100'
              value={rangeValues[index].value}
              onChange={(event) => handleRangeChange(index, event)}
            />
            {/* Display percentage symbol on the first range value */}
            <p>
              {index === 0
                ? `${rangeValues[index].value}%`
                : rangeValues[index].value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetirementStrat;
