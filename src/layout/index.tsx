import { FC } from 'react';

import Header from './Header';

const Layout: FC = ({
  children
}) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <Header />
      </header>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
