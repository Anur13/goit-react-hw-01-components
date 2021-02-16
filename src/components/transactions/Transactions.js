import React from "react"
import PropTypes from "prop-types"
import styles from "../Transactions-section/Transaction-section.module.css"

const Transactions = ({ type, amount, currency }) => {
    return (
        <tr className={styles.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

Transactions.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Transactions
