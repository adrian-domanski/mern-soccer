import GameCard from '../../components/general/GameCard';
import { useAppSelector } from '../../store/store';
import * as Styled from './GamePage.styles';
import { Section } from '../../styles/components/Containers';

export default function GamePage() {
  const { games } = useAppSelector((state) => state.games);

  return (
    <Styled.Wrapper>
      <Section>
        <Styled.Title>Games</Styled.Title>
        <Styled.Grid>
          {games &&
            games.map((game) => (
              <Styled.GridItem key={game._id}>
                <GameCard {...game} />
              </Styled.GridItem>
            ))}
        </Styled.Grid>
      </Section>
    </Styled.Wrapper>
  );
}
