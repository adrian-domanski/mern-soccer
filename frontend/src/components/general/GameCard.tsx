import { Game } from '../../interfaces/Game';
import './GameCard.css';

interface Props extends Game {}

export default function GameCard({
  address,
  date,
  name,
  numberOfPeople,
  time,
}: Props) {
  return (
    <div className='game-card'>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{numberOfPeople}</p>
      <p>{time ? time : 'not time assigned yet'}</p>
      <p>{date.toString().split('T')[0].split('-').reverse().join('/')}</p>
    </div>
  );
}
