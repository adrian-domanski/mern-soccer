import { FC } from 'react';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer';

import * as Styled from './Layout.styles';

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Styled.PageWrapper>{children}</Styled.PageWrapper>
      <Footer />
    </>
  );
};

export default Layout;
