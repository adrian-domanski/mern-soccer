import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Game } from '../../interfaces/Game';
import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { deleteGame, getGameById, updateGame } from './gameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';

const EditGamePage = () => {
  const { singleGame } = useAppSelector((state) => state.games);
  const initialGame = {
    name: singleGame?.name || '',
    address: singleGame?.address || '',
    numberOfPeople: singleGame?.numberOfPeople || 0,
    date: dayjs(new Date(singleGame?.date || '')),
    time: singleGame?.time || '',
    fieldNumber: singleGame?.fieldNumber || 0,
  };
  const dispatch = useAppDispatch();
  const [game, setGame] = useState(initialGame);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && !singleGame) dispatch(getGameById(id));
    if (singleGame) setGame(initialGame);
  }, [id, singleGame]);

  const handleChange = ({
    target: { value, name, type },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = type === 'number' ? parseInt(value) : value;
    setGame({ ...game, [name]: val });
  };

  const getDateValue = (dateObj: Dayjs) => {
    const date = new Date(dateObj.toString());
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = date.getFullYear();

    if (Number(day) < 10) {
      day = `0${day}`;
    }

    if (Number(month) < 10) {
      month = `0${month}`;
    }

    return dayjs(`${year}-${month}-${day}`);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newGame: Game = { ...game, date: game.date.toDate(), _id: id };

    dispatch(updateGame(newGame));
  };

  const handleDeleteGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!id) return alert('Invalid game id');
    dispatch(deleteGame(id));
    navigate('/');
  };

  return (
    <Container
      sx={{
        marginTop: 10,
        paddingY: 6,
        paddingX: '40px !important',
        maxWidth: '700px !important',
        background: '#fff',
        color: '#fff',
        borderColor: '#fff',
        borderRadius: '10px',
      }}
    >
      <Grid sx={{ margin: '0 auto' }}>
        <Typography
          sx={{ marginBottom: 2 }}
          variant='h4'
          fontWeight={600}
          color={'black'}
        >
          Update Game
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name='name'
              value={game.name}
              fullWidth
              label='name'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name='address'
              value={game.address}
              fullWidth
              label='address'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name='numberOfPeople'
              value={game.numberOfPeople}
              type='number'
              fullWidth
              label='numberOfPeople'
            />
          </Grid>

          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '100%' }}
                label='Date'
                value={getDateValue(game.date)}
                onChange={(newValue) => {
                  setGame({ ...game, date: newValue! });
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name='time'
              value={game.time}
              fullWidth
              label='time'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name='fieldNumber'
              value={game.fieldNumber}
              type='number'
              fullWidth
              label='fieldNumber'
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant='contained'
              disableElevation
              onClick={handleSubmit}
            >
              Update
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ background: '#f44336', color: '#fff' }}
              variant='contained'
              disableElevation
              onClick={handleDeleteGame}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditGamePage;
