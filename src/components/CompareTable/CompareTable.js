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

const useStyles = makeStyles({
  
})

const CompareTable = ({
  arr
}) => {
  const classes = useStyles();
  const { thead,  } = classes;

  return (
    <TableContainer component={Paper}>
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