
import { TableWrapper, TableBody, TableTransactionDesc } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <>
            <TableWrapper className="transaction-history">
  <thead>
    <TableTransactionDesc>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableTransactionDesc>
                </thead>
                <TableBody>
                {items.map(el =>  <TableTransactionDesc key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </TableTransactionDesc>)}
    </TableBody>
</TableWrapper>
        </>
    );

}