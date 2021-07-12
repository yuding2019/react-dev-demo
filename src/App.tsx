import React from 'react';
import './App.less';
import AvatarUrl from '@/assets/avatar.png';

const App: React.FC = () => {
  return (
    <div className="hello">
      <p>hello, React!</p>
      <input placeholder="23333" />
      <img src={AvatarUrl} />
    </div>
  );
};

export default App;
