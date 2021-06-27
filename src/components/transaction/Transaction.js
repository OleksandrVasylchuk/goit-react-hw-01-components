import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={s.item}>
            <td className={s.data}>{item.type}</td>
            <td className={s.data}>{item.amount}</td>
            <td className={s.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      typcurrencye: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
