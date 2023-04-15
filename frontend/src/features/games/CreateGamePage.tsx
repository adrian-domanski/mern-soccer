import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Game } from '../../interfaces/Game';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createGame } from './gameSlice';
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const CreateGamePage = () => {
  const initialGame = {
    name: '',
    address: '',
    numberOfPeople: 0,
    date: dayjs(new Date()),
    time: '',
    fieldNumber: 0,
  };
  const dispatch = useAppDispatch();
  const [game, setGame] = useState(initialGame);
  const navigate = useNavigate();

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
    const year = date.getFullYear();

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

    const newGame: Game = { ...game, date: game.date.toDate() };

    dispatch(createGame(newGame));
    setGame(initialGame);
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
          variant="h4"
          fontWeight={600}
          color={'black'}
        >
          Create Game
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="name"
              value={game.name}
              fullWidth
              label="name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="address"
              value={game.address}
              fullWidth
              label="address"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="numberOfPeople"
              value={game.numberOfPeople}
              type="number"
              fullWidth
              label="numberOfPeople"
            />
          </Grid>

          <Grid item xs={12}>
            {/* <TextField
              onChange={handleChange}
              name='date'
              value={getDateValue(game.date)}
              InputLabelProps={{ shrink: true }}
              type='date'
              fullWidth
              label='date'
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Date"
                value={getDateValue(game.date)}
                onChange={(newValue) => {
                  newValue && setGame({ ...game, date: newValue });
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="time"
              value={game.time}
              fullWidth
              label="time"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              name="fieldNumber"
              value={game.fieldNumber}
              type="number"
              fullWidth
              label="fieldNumber"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateGamePage;
