/**
 * Navbar
 */

export interface NavbarLinkRoute {
  route: string;
  isAuth: boolean;
  title: string;
}

export enum NavbarLinkNames {
  Home = 'home',
  CreateGame = 'createGame',
  Logout = 'logout',
  Login = 'login',
  Register = 'register',
}

export const NavbarLinks: Record<NavbarLinkNames, NavbarLinkRoute> = {
  [NavbarLinkNames.Home]: { title: 'Home', route: '/', isAuth: false },
  [NavbarLinkNames.CreateGame]: {
    route: '/create-game',
    isAuth: true,
    title: 'Create Game',
  },
  [NavbarLinkNames.Logout]: { title: 'Logout', route: '/', isAuth: true },
  [NavbarLinkNames.Login]: { title: 'Login', route: '/login', isAuth: false },
  [NavbarLinkNames.Register]: {
    title: 'Register',
    route: '/register',
    isAuth: false,
  },
};
//
