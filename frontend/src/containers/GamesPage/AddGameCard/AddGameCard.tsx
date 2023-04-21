import * as Styled from './AddGameCard.styles';
import Button, { ButtonVariant } from '../../../components/core/Button/Button';
import { useAppSelector } from '../../../store/store';
import { FaPlus } from 'react-icons/fa';
import { Routes } from '../../../constants/enum';
import { Link } from 'react-router-dom';
import ConditionalLink from '../../../components/core/ConditionalLink';

const AddGameCard = () => {
  const { isLoggedIn } = useAppSelector((state) => state.account);

  return (
    <ConditionalLink to={Routes.createGame.route} condition={isLoggedIn}>
      <Styled.Wrapper isLoggedIn={isLoggedIn}>
        <Styled.Content>
          <Styled.Title>Add New Game</Styled.Title>

          {isLoggedIn ? (
            <Button as="a" variant={ButtonVariant.DARKER}>
              <FaPlus />
            </Button>
          ) : (
            <Styled.CTAWrapper>
              <Link to={Routes.login.route}>
                <Button as="a" variant={ButtonVariant.DARKER}>
                  Login
                </Button>
              </Link>
              <Link to={Routes.register.route}>
                <Button as="a" variant={ButtonVariant.DARKER}>
                  Register
                </Button>
              </Link>
            </Styled.CTAWrapper>
          )}
        </Styled.Content>
      </Styled.Wrapper>
    </ConditionalLink>
  );
};

export default AddGameCard;
