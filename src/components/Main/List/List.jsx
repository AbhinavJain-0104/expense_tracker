import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';

import useStyles from './styles';
import { Delete } from '@mui/icons-material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
    const classes = useStyles();

   const {deleteTransaction,transactions}=useContext(ExpenseTrackerContext); 

   

  return (
    <MUIList dense={false} className={classes.list}>
{transactions.map((transaction)=>(
<Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
<ListItem>
<ListItemAvatar>
<Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
<CurrencyRupeeIcon />
</Avatar>
</ListItemAvatar>

<ListItemText primary={transaction.category} secondary={`\u20B9${transaction.amount} On  ${transaction.date}`} />
<ListItemSecondaryAction>
    <IconButton edge="end" aria-label='delete' onClick={()=> deleteTransaction(transaction.id)}>
        <Delete/>
    </IconButton>

</ListItemSecondaryAction>



</ListItem>

</Slide>

))}


</MUIList>
 );
}

export default List
