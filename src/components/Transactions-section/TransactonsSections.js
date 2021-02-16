import React from 'react';
import Transactions from '../Transactions/Transactions';
import transactionsInfo from '../Transactions/transactions.json';
import styles from './Transaction-section.module.css';

const TransactonsSections = () => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {transactionsInfo.map(item => (
          <Transactions key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactonsSections;
