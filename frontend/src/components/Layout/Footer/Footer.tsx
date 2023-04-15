import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import * as Styled from './Footer.styles';
import 'twin.macro';
import { Section } from '../../../styles/Containers';
import { getAuthLinks } from '../../../utils/helpers';
import { useAppSelector } from '../../../store/store';
import { Link } from 'react-router-dom';

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
                <ul tw="flex">
                  <li tw="mx-2">
                    <Styled.FooterLink href="#">
                      <FaFacebookF />
                    </Styled.FooterLink>
                  </li>
                  <li tw="mx-2">
                    <Styled.FooterLink href="#">
                      <FaTwitter />
                    </Styled.FooterLink>
                  </li>
                  <li tw="mx-2">
                    <Styled.FooterLink href="#">
                      <FaLinkedin />
                    </Styled.FooterLink>
                  </li>
                  <li tw="mx-2">
                    <Styled.FooterLink href="#">
                      <FaInstagram />
                    </Styled.FooterLink>
                  </li>
                </ul>
              </Styled.FooterContent>
            </Styled.FooterColumn>
          </div>
        </div>
      </Section>
    </Styled.FooterContainer>
  );
};

export default Footer;
