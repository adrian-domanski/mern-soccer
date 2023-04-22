import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { logOutUser } from '../../../features/account/accountSlice';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { getNavLinks } from '../../../utils/helpers';
import { Section } from '../../../styles/components/Containers';
import { RouteNames } from '../../../constants/enum';

import * as Styled from './Navbar.styles';
import 'twin.macro';

const NavBar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  return (
    <Styled.NavbarContainer>
      <Section>
        <Styled.NavbarContent>
          <Link to="/">
            <Styled.Logo>
              <Styled.LogoIcon
                src="/logo_icon.png"
                alt="Soocer ball"
                width={28}
                height={28}
              />
              <Styled.LogoText>FutTube</Styled.LogoText>
            </Styled.Logo>
          </Link>

          <Styled.NavbarList isMobileOpen={isMobileActive}>
            {getNavLinks(isLoggedIn).map(([name, link]) => (
              <Styled.NavbarListItem key={link.title}>
                <Link to={link.route}>
                  <Styled.NavbarLink
                    onClick={() => {
                      name === RouteNames.Logout && dispatch(logOutUser());
                      setIsMobileActive(false);
                    }}
                  >
                    {link.title}
                  </Styled.NavbarLink>
                </Link>
              </Styled.NavbarListItem>
            ))}
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
      </Section>
    </Styled.NavbarContainer>
  );
};

export default NavBar;
