import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.column}>Type</th>
          <th className={s.column}>Amount</th>
          <th className={s.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.row}>{item.type}</td>
            <td className={s.row}>{item.amount}</td>
            <td className={s.row}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
