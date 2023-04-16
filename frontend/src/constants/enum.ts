/**
 * Navbar
 */

export interface RouteData {
  route: string;
  isAuth: boolean;
  title: string;
}

export enum RouteNames {
  Home = 'home',
  CreateGame = 'createGame',
  Logout = 'logout',
  Login = 'login',
  Register = 'register',
}

export const Routes: Record<RouteNames, RouteData> = {
  [RouteNames.Home]: { title: 'Home', route: '/', isAuth: false },
  [RouteNames.CreateGame]: {
    route: '/create-game',
    isAuth: true,
    title: 'Create Game',
  },
  [RouteNames.Logout]: { title: 'Logout', route: '/', isAuth: true },
  [RouteNames.Login]: { title: 'Login', route: '/login', isAuth: false },
  [RouteNames.Register]: {
    title: 'Register',
    route: '/register',
    isAuth: false,
  },
};

/**
 * Footer
 */

export enum SocialLinks {
  GitHub = 'https://github.com/adrian-domanski',
  LinkedIn = 'https://www.linkedin.com/in/adrian-domanski-dev/',
  Portfolio = 'https://www.kodario.dev/',
}
