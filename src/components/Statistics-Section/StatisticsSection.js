import React from 'react';
import styles from './Statistics-Section.module.css';

import statisticalData from '../Statistics/statistical-data.json';
import Statistics from '../Statistics/Statistics';

const StatisticsSection = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className={styles.statList}>
        {statisticalData.map(item => {
          return <Statistics key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default StatisticsSection;
