import {
  NavbarLinkNames,
  NavbarLinkRoute,
  NavbarLinks,
} from '../constants/enum';

export const getNavLinks = (isLoggedIn: boolean) =>
  Object.entries(NavbarLinks)
    .map(([name, link]) => {
      if (
        (!isLoggedIn && !link.isAuth) ||
        name === NavbarLinkNames.Home ||
        (isLoggedIn && link.isAuth)
      ) {
        return [name, link];
      }
    })
    .filter((val) => val) as [NavbarLinkNames, NavbarLinkRoute][];
