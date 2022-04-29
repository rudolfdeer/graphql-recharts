import { useState } from 'react';
import Form from './Form';
import Section from './Section';

function App() {
  const [nickname, setNickname] = useState('');

  return (
    <div className="main">
      <Form setNickname={setNickname} />
      {nickname ? <Section nickname={nickname} /> : null}
    </div>
  );
}

export default App;
