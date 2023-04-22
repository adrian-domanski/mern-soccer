import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import Button, { ButtonVariant } from '../../components/core/Button/Button';
import { Section } from '../../styles/components/Containers';
import MyInput from '../../components/core/Input/Input';
import DatePicker from '../../components/core/DatePicker/DatePicker';
import TimePicker from '../../components/core/TimePicker/TimePicker';
import moment from 'moment';
import { createGame } from '../../features/games/gameSlice';

import 'twin.macro';
import * as Styled from './CreateGamePage.styles';
import { toast } from 'react-toastify';

const CreateGamePage = () => {
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

  const validateFields = () => {
    let isValid = true;

    // Check if name is not empty
    if (!game.name) {
      isValid = false;
      console.log('Name field is required.');
    }

    // Check if address is not empty
    if (!game.address) {
      isValid = false;
      console.log('Address field is required.');
    }

    // Check if fieldNumber is not empty
    if (!game.fieldNumber) {
      isValid = false;
      console.log('Field Number field is required!');
    }

    // Check if numberOfPeople is not empty
    if (!game.numberOfPeople) {
      isValid = false;
      console.log('Number of People field is required.');
    }

    // Check if time is not empty and is a valid time format
    if (!game.time) {
      isValid = false;
      console.log('Time field is required');
    }

    // Check if date is not empty and is a valid date format
    if (!game.date || !moment(game.date, 'DD/MM/YYYY', true).isValid()) {
      isValid = false;
      console.log('Date field is required and must be in DD/MM/YYYY format.');
    }

    return isValid;
  };

  const handleCreateGame = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validate fields before creating game
    if (!validateFields())
      return toast.error(
        'Game creation failed. Please fill in all required fields correctly.'
      );

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

    await dispatch(createGame(newGame));
    navigate(`/`);
  };

  return (
    <Section>
      <Styled.Wrapper>
        <Styled.TableHeader>
          <Styled.HeaderTitle>Create Game</Styled.HeaderTitle>
          <Styled.HeaderSubtitle>
            Add new game to the list
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
                  label={'Name of your game'}
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
                  label={'Address'}
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
                  placeholder={'Click here to select date'}
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
                  label={'1'}
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
                  label={'432'}
                  onChange={(e) => handleChange('number', e)}
                  type="number"
                  name="fieldNumber"
                />
              </Styled.Dd>
            </Styled.ListElement>
            <Styled.ListElement>
              <Styled.Dt></Styled.Dt>
              <Styled.Dd tw="space-x-2">
                <Button
                  variant={ButtonVariant.DARKER}
                  onClick={handleCreateGame}
                >
                  Create Game
                </Button>
              </Styled.Dd>
            </Styled.ListElement>
          </Styled.Dl>
        </Styled.TableBody>
      </Styled.Wrapper>
    </Section>
  );
};

export default CreateGamePage;
