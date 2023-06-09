import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { RiGlobalFill } from 'react-icons/ri';
import { Section } from '../../../styles/components/Containers';
import { getNavLinks } from '../../../utils/helpers';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Link } from 'react-router-dom';
import { Routes, SocialLinks } from '../../../constants/enum';

import * as Styled from './Footer.styles';
import 'twin.macro';
import { logOutUser } from '../../../store/account/accountSlice';

const Footer = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  return (
    <Styled.FooterContainer>
      <Section>
        <div tw="container mx-auto">
          <div tw="flex flex-wrap">
            <Styled.FooterColumn>
              <Styled.FooterTitle>FutTube™</Styled.FooterTitle>
              <Styled.FooterContent>
                <Styled.Paragraph tw="my-2">
                  Innovative soccer platform for global fans. Join now for an
                  unparalleled experience of the beautiful game.
                </Styled.Paragraph>
              </Styled.FooterContent>
            </Styled.FooterColumn>
            <Styled.FooterColumn>
              <Styled.FooterTitle>Navigation</Styled.FooterTitle>
              <Styled.FooterContent>
                <Styled.FooterLinkList>
                  {getNavLinks(isLoggedIn).map(([, link]) => (
                    <Styled.FooterListItem key={link.title}>
                      <Link
                        to={link.route}
                        onClick={() =>
                          Routes.logout.title === link.title &&
                          dispatch(logOutUser())
                        }
                      >
                        <Styled.FooterLink>{link.title}</Styled.FooterLink>
                      </Link>
                    </Styled.FooterListItem>
                  ))}
                </Styled.FooterLinkList>
              </Styled.FooterContent>
            </Styled.FooterColumn>

            <Styled.FooterColumn>
              <Styled.FooterTitle>Follow Us</Styled.FooterTitle>
              <Styled.FooterContent>
                <Styled.SocialList>
                  <Styled.SocialListItem>
                    <Styled.FooterLink
                      as="a"
                      href={SocialLinks.GitHub}
                      target="_blank"
                    >
                      <Styled.IconWrapper>
                        <AiFillGithub />
                      </Styled.IconWrapper>
                    </Styled.FooterLink>
                  </Styled.SocialListItem>
                  <Styled.SocialListItem>
                    <Styled.FooterLink
                      as="a"
                      href={SocialLinks.LinkedIn}
                      target="_blank"
                    >
                      <Styled.IconWrapper>
                        <FaLinkedin />
                      </Styled.IconWrapper>
                    </Styled.FooterLink>
                  </Styled.SocialListItem>
                  <Styled.SocialListItem>
                    <Styled.FooterLink
                      as="a"
                      href={SocialLinks.Portfolio}
                      target="_blank"
                    >
                      <Styled.IconWrapper>
                        <RiGlobalFill />
                      </Styled.IconWrapper>
                    </Styled.FooterLink>
                  </Styled.SocialListItem>
                </Styled.SocialList>
              </Styled.FooterContent>
            </Styled.FooterColumn>
          </div>
        </div>
      </Section>
    </Styled.FooterContainer>
  );
};

export default Footer;
