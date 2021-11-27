import './App.css';
import Container from './components/Container/Container';

import Profile from './components/Profile/Profile';
import user from './user.json';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
}

export default App;
