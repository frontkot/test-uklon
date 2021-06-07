import React from 'react';
import './CompareTable.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { getData } from '../../store/userItems/selectors';

const useStyles = makeStyles({
  container: {
    boxShadow: 'none',
    minWidth: '15em',
    maxWidth: '20em',
  },

})

const CompareTable = () => {
  const classes = useStyles();
  const { thead, container } = classes;
  const userItems = useSelector(getData);

  return (
    <TableContainer component={Paper} className={container}>
      <Table size='small' aria-label='adanse table'>
        <TableHead className={thead}>
          Compare Items
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
      
    </TableContainer>
  );
};

export default CompareTable;