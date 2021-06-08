import React from 'react';
import './CompareTable.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/userItems/selectors';
import { updateData } from '../../store/userItems/actions';


const CompareTable = () => {
  const userItems = useSelector(getData);
  const dispatch = useDispatch();
  const mainClass = 'table';
  
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
    <div className={`${mainClass}__section`}>
      <h3 className={`${mainClass}__header`}>Compare Items</h3>
      <TableContainer component={Paper} className={`${mainClass}__container`}>
        <Table className={`${mainClass}__content`}>
          <TableBody className={`${mainClass}__body`}>
            {renderArr.map((item, index) => (
              <TableRow key={index} className={`${mainClass}__row`} onClick={(e) => toggleItem(e)}>
                <TableCell id={item.id} className={item.firstItemIsMore ? `${mainClass}__cell-active table__cell` : `${mainClass}__cell`} component='th' scope='row'>
                  {item.firstItemName}
                </TableCell>
                <TableCell id={item.id} className={item.secondItemIsMore ? `${mainClass}__cell-active table__cell` : `${mainClass}__cell`}>
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