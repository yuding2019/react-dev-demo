import { FC, useState, memo, useMemo } from 'react';
import './App.less';

const Parent: FC = memo(({ children }) => {
  const [_, update] = useState(1);

  console.log('parent render');
  return (
    <div>
      <button onClick={() => update(prev => ++prev)}>parent render</button>
      {children}
    </div>
  );
});

const Child: FC = () => {
  console.log('child render');
  return <span>child</span>;
};

const App: FC = () => {
  const [text, setText] = useState('');

  console.log('app render');

  return (
    <div className="hello">
      <button onClick={() => setText(prev => 'world' + Date.now())}>hello {text}</button>
      {useMemo(() => (
        <Parent>
          <Child />
        </Parent>
      ), [])}
    </div>
  );
};

export default App;
