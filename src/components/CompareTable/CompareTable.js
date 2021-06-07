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
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/userItems/selectors';
import { updateData } from '../../store/userItems/actions';

const useStyles = makeStyles({
  body: {
    borderCollpse: 'initial',
  },
  table: {
    borderCollpse: 'initial',
    width: '80%',
  },

  container: {
    boxShadow: 'none',
    minWidth: '10em',
    maxWidth: '15em',
  },
  cell: {
    padding: '2px 5px',
    border: '1px solid grey',
    borderRadius: '5px',
    
  },
  cellActive: {
    fontWeight: 700,
    background: 'blue',
  },

})

const CompareTable = () => {
  const classes = useStyles();
  const { thead, container, cell, cellActive, table, body } = classes;
  const userItems = useSelector(getData);
  const dispatch = useDispatch();
  
  const numOfUserItems = userItems.length;
  let renderArr = [];  

  for(let i = 0; i < numOfUserItems; i++) {
    for(let u = i+1; u < numOfUserItems; u++) {
      const firstItem = userItems[i];
      const secondItem = userItems[u];

      renderArr.push(
        {
          firstItemName: firstItem.name, firstItemIsMore: firstItem.value[u],
          secondItemName: secondItem.name, secondItemIsMore: !firstItem.value[u],
          id: [i, u],
        }
      )
    }
  }

  const toggleItem = (e) => {
    const firstItemIndex = +e.target.id[0];
    const secondItemIndex = +e.target.id[e.target.id.length - 1]; 
    
    const newData = userItems.map((e, index) => {
      switch(index) {
        case firstItemIndex:
          const newValueFirstCase = e.value.map((e, index) => index === secondItemIndex ? e = !e : e);
          return { ...e, value: newValueFirstCase}; 
        case secondItemIndex:
          const newValueSecondCase = e.value.map((e, index) => index === firstItemIndex ? e = !e : e);
          return { ...e, value: newValueSecondCase};
        default:
          return e;
      }
    })

    dispatch(updateData(newData))    
    
  }

  



  return (
    <div className='table-content'>
      <h3>Compare Items</h3>
      <TableContainer component={Paper} className={container}>
        <Table className={table}>
          <TableBody className={body}>
            {renderArr.map((item, index) => (
              <TableRow key={index} onClick={(e) => toggleItem(e)}>
                <TableCell id={item.id} className={item.firstItemIsMore ? `${cellActive} ${cell}` : cell} component='th' scope='row'>
                  {item.firstItemName}
                </TableCell>
                <TableCell id={item.id} className={item.secondItemIsMore ? `${cellActive} ${cell}` : cell} >
                  {item.secondItemName}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>
  );
};

export default CompareTable;