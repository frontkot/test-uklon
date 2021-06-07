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

const ScoreTable = ({
  arr
}) => {
  const classes = useStyles();

  const { container, table, theadCell, trowItem } = classes;

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
          {arr.map((item, index) => (
            <TableRow key={index}>
              <TableCell className={trowItem} component='th' scope='row'>
                {item.name}
              </TableCell>
              <TableCell align='center'>{item.score}</TableCell>
              <TableCell align='center'>{index ? null : <WinnerIcon />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;