import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import Button, { ButtonVariant } from '../../components/core/Button/Button';
import { Section } from '../../styles/components/Containers';
import MyInput from '../../components/core/Input/Input';
import DatePicker from '../../components/core/DatePicker/DatePicker';
import TimePicker from '../../components/core/TimePicker/TimePicker';
import moment from 'moment';
import {
  deleteGame,
  getGameById,
  updateGame,
} from '../../store/games/gameSlice';

import 'twin.macro';
import * as Styled from './EditGamePage.styles';

const EditGamePage = () => {
  const { singleGame } = useAppSelector((state) => state.games);

  const dispatch = useAppDispatch();
  const [game, setGame] = useState({
    name: '',
    address: '',
    date: '',
    time: '',
    fieldNumber: '',
    numberOfPeople: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Set singleGame to state
  useEffect(() => {
    if (id && !singleGame) dispatch(getGameById(id));
  }, [id, singleGame]);

  const handleChange = (
    inputType: 'text' | 'number' | 'date' | 'time',
    e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    extraData?: string
  ) => {
    switch (inputType) {
      case 'text':
        return setGame((prev) => ({
          ...prev,
          [e?.target.name as string]: e?.target.value as string,
        }));
      case 'number':
        return setGame((prev) => ({
          ...prev,
          [e?.target.name as string]: parseInt(e?.target.value as string),
        }));
      case 'date':
        if (!extraData) break;
        return setGame((prev) => ({ ...prev, date: extraData }));
      case 'time':
        if (!extraData) break;
        return setGame((prev) => ({ ...prev, time: extraData }));
      default:
        break;
    }
  };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newGame = {
      ...singleGame,
      ...(game.name && { name: game.name }),
      ...(game.address && { address: game.address }),
      ...(game.fieldNumber && { fieldNumber: game.fieldNumber }),
      ...(game.numberOfPeople && { numberOfPeople: game.numberOfPeople }),
      ...(game.time && { time: game.time }),
      ...(game.date && { date: moment(game.date, 'DD/MM/YYYY').toDate() }),
      _id: id,
    };

    await dispatch(updateGame(newGame));
    navigate(`/game/${id}`);
  };

  const handleDeleteGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!id) return alert('Invalid game id');
    dispatch(deleteGame(id));
    navigate('/');
  };

  return (
    <Section>
      <Styled.Wrapper>
        <Styled.TableHeader>
          <Styled.HeaderTitle>Edit Game</Styled.HeaderTitle>
          <Styled.HeaderSubtitle>
            Update details about this game
          </Styled.HeaderSubtitle>
        </Styled.TableHeader>

        <Styled.TableBody>
          <Styled.Dl>
            <Styled.ListElement>
              <Styled.Dt>Game Name</Styled.Dt>
              <Styled.Dd>
                <MyInput
                  id="name"
                  value={game?.name}
                  label={singleGame?.name || ''}
                  onChange={(e) => handleChange('text', e)}
                  name="name"
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt>Location</Styled.Dt>
              <Styled.Dd>
                <MyInput
                  id="address"
                  label={singleGame?.address || ''}
                  value={game?.address}
                  onChange={(e) => handleChange('text', e)}
                  name="address"
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt>Date</Styled.Dt>
              <Styled.Dd>
                <DatePicker
                  id="date-picker-2"
                  name="date"
                  value={game?.date}
                  handleChange={(date) =>
                    handleChange(
                      'date',
                      undefined,
                      moment(date).format('DD/MM/YYYY')
                    )
                  }
                  placeholder={moment(singleGame?.date).format('DD/MM/YYYY')}
                />
              </Styled.Dd>
            </Styled.ListElement>

            <Styled.ListElement>
              <Styled.Dt>Time</Styled.Dt>
              <Styled.Dd>
                <TimePicker
                  id="time-picker-2"
                  name="time"
                  value={game?.time}
                  handleChange={(time) => handleChange('time', undefined, time)}
                  placeholder={singleGame?.time}
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt>Number of Players</Styled.Dt>
              <Styled.Dd>
                <MyInput
                  id="numberOfPeople"
                  value={game?.numberOfPeople}
                  label={String(singleGame?.numberOfPeople) || '0'}
                  onChange={(e) => handleChange('number', e)}
                  type="number"
                  name="numberOfPeople"
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt>Field number</Styled.Dt>
              <Styled.Dd>
                <MyInput
                  id="fieldNumber"
                  value={game?.fieldNumber}
                  label={String(singleGame?.fieldNumber) || '0'}
                  onChange={(e) => handleChange('number', e)}
                  type="number"
                  name="fieldNumber"
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt>
                <span>Edit Game</span>
              </Styled.Dt>
              <Styled.Dd tw="space-x-2">
                <Styled.CTAWrapper>
                  <Button
                    variant={ButtonVariant.DANGER}
                    onClick={handleDeleteGame}
                  >
                    Delete Game
                  </Button>
                  <Button variant={ButtonVariant.DARKER} onClick={handleEdit}>
                    Save edits
                  </Button>
                </Styled.CTAWrapper>
              </Styled.Dd>
            </Styled.ListElement>
          </Styled.Dl>
        </Styled.TableBody>
      </Styled.Wrapper>
    </Section>
  );
};

export default EditGamePage;
