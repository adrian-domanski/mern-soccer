import GameCard from '../../components/general/GameCard/GameCard';
import { useAppSelector } from '../../store/store';
import * as Styled from './GamePage.styles';
import { Section } from '../../styles/components/Containers';
import AddGameCard from './AddGameCard/AddGameCard';

export default function GamesPage() {
  const { games } = useAppSelector((state) => state.games);

  return (
    <Styled.Wrapper>
      <Section>
        <Styled.Title>Games</Styled.Title>
        <Styled.Grid>
          <AddGameCard />
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
