import { GlobalStyle } from './GlobalStyle';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/Friendlist';
import { TransactionsHistory } from './Transactions/TransactionsHistory';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from '../components/Transactions/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Profile user={user} />
      <Statistics title={"Upload Stats"} stats={data} /> 
      <FriendList friends={friends} />
      <TransactionsHistory transaction={transactions} />
    </>
  );
};
