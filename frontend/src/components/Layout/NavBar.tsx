import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { logOutUser } from '../../features/account/accountSlice';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import * as Styled from './Navbar.styles';
import 'twin.macro';

interface LinkRoute {
  route: string;
  isAuth: boolean;
  title: string;
}

enum LinkNames {
  Home = 'home',
  CreateGame = 'createGame',
  Logout = 'logout',
  Login = 'login',
  Register = 'register',
}

export const NavbarLinks: Record<LinkNames, LinkRoute> = {
  [LinkNames.Home]: { title: 'Home', route: '/', isAuth: false },
  [LinkNames.CreateGame]: {
    route: '/create-game',
    isAuth: true,
    title: 'Create Game',
  },
  [LinkNames.Logout]: { title: 'Logout', route: '/', isAuth: true },
  [LinkNames.Login]: { title: 'Login', route: '/login', isAuth: false },
  [LinkNames.Register]: {
    title: 'Register',
    route: '/register',
    isAuth: false,
  },
};

const NavBar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const getNavbarLinks = () =>
    Object.entries(NavbarLinks).map(([name, link]) => {
      if (
        (!isLoggedIn && !link.isAuth) ||
        name === LinkNames.Home ||
        (isLoggedIn && link.isAuth)
      ) {
        return (
          <Styled.NavbarListItem>
            <Link to={link.route} key={link.route}>
              <Styled.NavbarLink
                onClick={() => {
                  name === LinkNames.Logout && dispatch(logOutUser());
                  setIsMobileActive(false);
                }}
              >
                {link.title}
              </Styled.NavbarLink>
            </Link>
          </Styled.NavbarListItem>
        );
      }
    });

  return (
    <Styled.NavbarContainer>
      <Styled.NavbarContent>
        <Styled.Logo>
          <Link to="/">
            <Styled.LogoText>FutTube</Styled.LogoText>
          </Link>
        </Styled.Logo>

        <Styled.NavbarList isMobileOpen={isMobileActive}>
          {getNavbarLinks()}
        </Styled.NavbarList>

        <Styled.MobileMenuButton
          onClick={() => setIsMobileActive(!isMobileActive)}
        >
          <Styled.MenuIcon>
            <FaBars />
          </Styled.MenuIcon>
        </Styled.MobileMenuButton>

        {isLoggedIn && (
          <Styled.Avatar aria-label="Open Settings">
            <Styled.AvatarImg src="https://i.pravatar.cc/80" alt="Avatar" />
          </Styled.Avatar>
        )}
      </Styled.NavbarContent>
    </Styled.NavbarContainer>
  );
};

export default NavBar;
