import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGameById } from '../../store/games/gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import 'twin.macro';
import { Section } from '../../styles/components/Containers';
import Button, { ButtonVariant } from '../../components/core/Button/Button';
import * as Styled from './GameDetails.styles';
import moment from 'moment';

export default function SingleGamePage() {
  const dispatch = useAppDispatch();
  const { singleGame } = useAppSelector((state) => state.games);
  const { isLoggedIn } = useAppSelector((state) => state.account);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      alert('null id');
      return;
    }
    dispatch(getGameById(id));
  }, [id]);

  return (
    <Section>
      <Styled.Wrapper>
        <Styled.TableHeader>
          <Styled.HeaderTitle>Game Information</Styled.HeaderTitle>
          <Styled.HeaderSubtitle>
            Details about this game.
          </Styled.HeaderSubtitle>
        </Styled.TableHeader>

        <Styled.TableBody>
          <Styled.Dl>
            <Styled.ListElement>
              <Styled.Dt>Game Name</Styled.Dt>
              <Styled.Dd>{singleGame?.name}</Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Location</Styled.Dt>
              <Styled.Dd>{singleGame?.address}</Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Date</Styled.Dt>
              <Styled.Dd>
                {moment(singleGame?.date).format('MMMM Do YYYY')}
              </Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Time</Styled.Dt>
              <Styled.Dd>{singleGame?.time}</Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Field Number</Styled.Dt>
              <Styled.Dd>{singleGame?.fieldNumber}</Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Number of Players</Styled.Dt>
              <Styled.Dd>{singleGame?.numberOfPeople}</Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>
                {isLoggedIn ? (
                  <span>Edit Game</span>
                ) : (
                  <span>Login to Edit</span>
                )}
              </Styled.Dt>
              <Styled.Dd>
                <Styled.CTAWrapper>
                  {isLoggedIn ? (
                    <Link to={`/edit-game/${singleGame?._id}`}>
                      <Button variant={ButtonVariant.DARKER}>
                        Edit this Game
                      </Button>
                    </Link>
                  ) : (
                    <Link to={`/login`}>
                      <Button variant={ButtonVariant.SECONDARY}>
                        Login to edit
                      </Button>
                    </Link>
                  )}
                </Styled.CTAWrapper>
              </Styled.Dd>
            </Styled.ListElement>
          </Styled.Dl>
        </Styled.TableBody>
      </Styled.Wrapper>
    </Section>
  );
}
