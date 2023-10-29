import transactions from "./transactions.json";
import { Table, TableHeadRow, TableHeadItem, TableBodyRow, TableBodyData } from "./TransactionsHistory.styled";

export const TransactionsHistory = () => {
   return (
<Table >
  <thead>
    <TableHeadRow>
      <TableHeadItem>Type</TableHeadItem>
      <TableHeadItem>Amount</TableHeadItem>
      <TableHeadItem>Currency</TableHeadItem>
    </TableHeadRow>
  </thead>

  <tbody>
      {transactions.map(data => {
         return (
            <TableBodyRow key={data.id}>
               <TableBodyData>{data.type}</TableBodyData>
               <TableBodyData>{data.amount}</TableBodyData>
               <TableBodyData>{data.currency}</TableBodyData>
            </TableBodyRow>
         )
      })}
  </tbody>
</Table>
   )
}
