import tw, { styled } from 'twin.macro';

export const FooterContainer = styled.footer`
  ${tw`py-8 bg-gray-800`}
`;

export const FooterColumn = styled.div`
  ${tw`w-full px-4 lg:w-1/4 md:w-1/2 last-of-type:ml-auto`}
`;

export const FooterContent = styled.div`
  ${tw`my-8 text-gray-500`}
`;

export const FooterTitle = styled.h2`
  ${tw`mb-4 text-xl font-semibold text-white`}
`;

export const FooterLink = styled.a`
  ${tw`inline-block mb-2 text-base text-gray-400 hover:text-gray-100`}
`;

export const FooterLinkList = styled.ul`
  ${tw`flex flex-col`}
`;

export const FooterListItem = tw.li``;
