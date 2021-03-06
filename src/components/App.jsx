import Profile from './Profile';
import user from '../path/user';
import Statistics from './Statistics';
import data from '../path/data';
import FriendList from './FriendList';
import friends from '../path/friends';
import TransactionHistory from './TransactionHistory';
import transactions from '../path/transactions'

export const App = () => {
  return (
    <div>
      <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats = {user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
