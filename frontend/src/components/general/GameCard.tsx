import { Game } from '../../interfaces/Game';
import 'twin.macro';
import * as Styled from './GameCard.styles';
import Button, { ButtonVariant } from '../core/Button/Button';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaUserFriends,
  FaHashtag,
  FaClock,
} from 'react-icons/fa';
import moment from 'moment';

export default function GameCard({
  date,
  name,
  numberOfPeople,
  time,
  _id,
  fieldNumber,
}: Game) {
  return (
    <div tw="flex flex-col rounded-xl bg-white bg-clip-border">
      <div tw="flex-1 p-6">
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
      </div>
    </div>
  );
}
