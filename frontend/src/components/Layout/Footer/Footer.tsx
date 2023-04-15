import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { RiGlobalFill } from 'react-icons/ri';
import { Section } from '../../../styles/Containers';
import { getAuthLinks } from '../../../utils/helpers';
import { useAppSelector } from '../../../store/store';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../../../constants/enum';

import * as Styled from './Footer.styles';
import 'twin.macro';

const Footer = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);

  return (
    <Styled.FooterContainer>
      <Section>
        <div tw="container px-4 mx-auto">
          <div tw="flex flex-wrap">
            <Styled.FooterColumn>
              <Styled.FooterTitle>FutTube™</Styled.FooterTitle>
              <Styled.FooterContent>
                <p tw="my-2">
                  Innovative soccer platform for global fans. Join now for an
                  unparalleled experience of the beautiful game.
                </p>
              </Styled.FooterContent>
            </Styled.FooterColumn>
            <Styled.FooterColumn>
              <Styled.FooterTitle>Navigation</Styled.FooterTitle>
              <Styled.FooterContent>
                <Styled.FooterLinkList>
                  {getAuthLinks(isLoggedIn).map(([, link]) => (
                    <Styled.FooterListItem key={link.route}>
                      <Link to={link.route}>
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
