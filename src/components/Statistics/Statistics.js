import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics-Section/Statistics-Section.module.css';

const Statistics = ({ label, percentage }) => {
  const r = () => (Math.random() * 256) >> 0;
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return (
    <li style={{ backgroundColor: color }} className={styles.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
