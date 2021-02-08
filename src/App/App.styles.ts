import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '20vh',
    },
    paper: {
      padding: 20,
    },
    inputNumber: {
      width: '100%',
    },
    process: {
      width: '100%',
    },
  })
);
