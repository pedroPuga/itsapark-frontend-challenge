import {
  Grid,
  TextField,
  Container,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from './App.styles';
import { processRange } from './RangeProcessor';

const App: React.FC<{}> = () => {
  const classes = useStyles();
  const [firstValue, setFirstNumber] = useState<number | undefined>();
  const [secondValue, setSecondNumber] = useState<number | undefined>();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <Grid
          container
          direction="row"
          spacing={3}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              ITSAPARK CHALLENGE
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="first-number"
              label="First number"
              type="number"
              className={classes.inputNumber}
              value={firstValue}
              onChange={(e) => {
                setFirstNumber(
                  e.target.value ? parseInt(e.target.value) : undefined
                );
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="second-number"
              label="Second number"
              type="number"
              className={classes.inputNumber}
              value={secondValue}
              onChange={(e) => {
                setSecondNumber(
                  e.target.value ? parseInt(e.target.value) : undefined
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.process}
              onClick={() => alert(processRange(firstValue, secondValue))}
            >
              Proccess
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
