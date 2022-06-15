// import s from './TransactionHistory.module.css';
import {
  TransactionTable,
  TransactionHead,
  TransactionHeadRow,
  TransactionHeadColumn,
  TransactionBody,
  TransactionBodyColumn,
  TransactionBodyRow,
} from './Transaction.styled';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionHeadRow>
          <TransactionHeadColumn>Type</TransactionHeadColumn>
          <TransactionHeadColumn>Amount</TransactionHeadColumn>
          <TransactionHeadColumn>Currency</TransactionHeadColumn>
        </TransactionHeadRow>
      </TransactionHead>

      <TransactionBody>
        {items.map(item => (
          <TransactionBodyColumn key={item.id}>
            <TransactionBodyRow>{item.type}</TransactionBodyRow>
            <TransactionBodyRow>{item.amount}</TransactionBodyRow>
            <TransactionBodyRow>{item.currency}</TransactionBodyRow>
          </TransactionBodyColumn>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
