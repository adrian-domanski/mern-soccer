import { RouteNames, RouteData, Routes } from '../constants/enum';

export const getNavLinks = (isLoggedIn: boolean) =>
  Object.entries(Routes)
    .map(([name, link]) => {
      if (
        (!isLoggedIn && !link.isAuth) ||
        name === RouteNames.Home ||
        (isLoggedIn && link.isAuth)
      ) {
        return [name, link];
      }
    })
    .filter((val) => val) as [RouteNames, RouteData][];
