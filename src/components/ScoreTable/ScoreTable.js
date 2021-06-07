import React from 'react';
import './ScoreTable.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WinnerIcon from '../WinnerIcon/WinnerIcon';
import { getData } from '../../store/userItems/selectors';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  container: {
    boxShadow: 'none',
    minWidth: '15em',
    maxWidth: '20em',
  },
  theadCell: {
    fontWeight: 700,
  },
  trowItem: {
    fontWeight: 700,
    textTransform: 'uppercase',
  }
});

const ScoreTable = () => {
  const classes = useStyles();
  const { container, table, theadCell, trowItem } = classes;
  const userItems = useSelector(getData);

  const arrWithScore = userItems
                        .map((e) => ({score: e.value.reduce((prev, cur) => prev + cur), ...e}))
                        .sort((a,b) => b.score - a.score);

  const highestValue = arrWithScore[0].score;

  return (
    <TableContainer component={Paper} className={container}>
      <Table className={table} size='small' aria-label='a danse table'>
        <TableHead>
          <TableRow>
            <TableCell className={theadCell}>Item</TableCell>
            <TableCell className={theadCell} align='center'>Score</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrWithScore.map((item, index) => (
            <TableRow key={index}>
              <TableCell className={trowItem} component='th' scope='row'>
                {item.name}
              </TableCell>
              <TableCell align='center'>{item.score}</TableCell>
              <TableCell align='center'>{item.score === highestValue ? <WinnerIcon /> : null}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;