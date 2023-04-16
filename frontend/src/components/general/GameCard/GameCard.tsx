import { Game } from '../../../interfaces/Game';
import 'twin.macro';
import * as Styled from './GameCard.styles';
import Button, { ButtonVariant } from '../../core/Button/Button';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  FaCalendarAlt,
  FaUserFriends,
  FaHashtag,
  FaClock,
} from 'react-icons/fa';

export default function GameCard({
  date,
  name,
  numberOfPeople,
  time,
  _id,
  fieldNumber,
}: Game) {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Link to={`/game/${_id}`}>
          <Styled.Title>{name}</Styled.Title>
        </Link>

        <Styled.Paragraph>
          <FaCalendarAlt /> {moment(date).calendar()}
        </Styled.Paragraph>
        <Styled.Paragraph>
          <FaUserFriends /> {numberOfPeople}
        </Styled.Paragraph>
        <Styled.Paragraph>
          <FaClock /> {time}
        </Styled.Paragraph>
        <Styled.Paragraph>
          <FaHashtag /> Field no. {fieldNumber}
        </Styled.Paragraph>
        <Link to={`/game/${_id}`}>
          <Button as="a" variant={ButtonVariant.DARKER}>
            Show Game
          </Button>
        </Link>
      </Styled.Content>
    </Styled.Wrapper>
  );
}
