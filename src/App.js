import Profile from "./components/profile/Profile";
import FriendList from "./components/friends/FriendList";
import Container from "./components/container/Container";
import Statistics from "./components/statistics/Statics";
import TransactionHistory from "./components/transaction/Transaction";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => (
  <Container>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />;
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </Container>
);

export default App;
