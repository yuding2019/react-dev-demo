import { FC } from 'react';
import './App.less';
import AvatarUrl from '@/assets/avatar.png';

console.log();

const App: FC = () => {
  return (
    <div className="hello">
      <p>hello, React!</p>
      <input placeholder="23333" />
      <img src={AvatarUrl} alt='' />
    </div>
  );
};

export default App;
