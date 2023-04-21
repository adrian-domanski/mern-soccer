import tw, { styled } from 'twin.macro';

export const NavbarContainer = tw.nav`
  p-4 
  text-white 
  bg-gray-900
  relative
  lg:h-[80px]
`;

export const LogoIcon = tw.img`w-7 h-7 mr-2`;

export const NavbarContent = tw.div`
  flex 
  max-w-6xl
  items-center 
  mx-auto
`;

export const Logo = tw.div`
  font-bold flex items-center
`;

export const LogoText = tw.h1`
  text-lg
  md:text-2xl
`;

export const NavbarListItem = tw.li`
   text-center border-b border-gray-950 bg-gray-800 even:bg-gray-900 md:bg-transparent
`;

export const NavbarLink = tw.a`mx-4 font-medium hover:underline py-3 w-full block -ml-1`;

export const NavbarList = styled.ul<{ isMobileOpen: boolean }>`
  ${tw`absolute scale-y-0 md:scale-y-100 md:space-x-3 transition-transform origin-top top-full md:w-fit w-[calc(100% + 16px)] px-2 -left-2 md:static ml-auto md:flex`}
  ${({ isMobileOpen }) => isMobileOpen && tw`scale-y-100`}
`;

export const MobileMenuButton = tw.button`
  flex 
  items-center 
  justify-center
  border-none 
  bg-transparent 
  ml-auto
  md:hidden
`;

export const MenuIcon = tw.svg`
  w-5 
  h-5 
  text-white
`;

export const Avatar = tw.div`
  hidden 
  md:block
`;

export const AvatarImg = tw.img`
  w-10 
  h-10 
  rounded-full
`;
